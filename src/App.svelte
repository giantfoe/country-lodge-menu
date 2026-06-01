<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import WelcomeStep from './components/WelcomeStep.svelte';
  import StepNavigator from './components/StepNavigator.svelte';
  import GuidedItemGrid from './components/GuidedItemGrid.svelte';
  import CartPane from './components/CartPane.svelte';
  import CustomDialog from './components/CustomDialog.svelte';
  import FlotDialog from './components/FlotDialog.svelte';
  import { menuItems } from './menuData.js';

  // Guided view Modes: 'welcome', 'guided', 'full'
  let viewMode = "welcome";
  let activeStep = 0;

  // Track last active menu view to support "Resume Ordering" from Welcome screen
  let lastActiveViewMode = "guided";
  let lastActiveStep = 1;

  $: {
    if (viewMode === 'guided' || viewMode === 'full') {
      lastActiveViewMode = viewMode;
      if (viewMode === 'guided' && activeStep > 0) {
        lastActiveStep = activeStep;
      } else if (viewMode === 'full') {
        lastActiveStep = 1;
      }
    }
  }
  
  let simulatedTime = "13:00";
  let diningLocation = "";
  let diningOption = "dine-in"; // defaulted for restaurant service

  // Cart & Review states
  let cart = [];
  let showReviewOverlay = false;
  let showFlotModal = false;

  // Custom options selection dialog
  let showCustomModal = false;
  let selectedItemForModal = null;

  // Course steps definition
  const steps = [
    { id: "welcome", name: "Welcome", desc: "Table selection" },
    { id: "starters", name: "Starters & Salads", desc: "Light plates, appetizers, and fresh salads to begin", categories: ["Salads", "Cold Appetizers", "Hot Appetizers", "Lebanese Corner"] },
    { id: "mains", name: "Main Courses & Steaks", desc: "Grilled meats, burgers, pasta, pizza, and live steaks", categories: ["Main Course", "Live Steak Section", "Our Burgers", "Pasta", "Pizza"] },
    { id: "japanese", name: "Japanese & Sushi", desc: "Maki rolls, sashimi, nigiri, poke bowls, and udon", categories: ["Japanese Selection", "Yakitori Skewers"] },
    { id: "specials", name: "Specials & Desserts", desc: "African dish of the day and fresh sweet treats", categories: ["African Corner", "Desserts Corner"] },
    { id: "drinks", name: "Beverages & Wines", desc: "Mocktails, local juices, local beers, wine cellars, coffee, and tea", categories: ["Beverages", "Coffee", "Tea", "Iced Drinks"] }
  ];

  // Load cart from LocalStorage on mount and parse table parameters
  onMount(() => {
    // Parse table from URL query params (e.g., ?table=12 or ?t=12)
    const params = new URLSearchParams(window.location.search);
    const urlTable = params.get('table') || params.get('t');
    if (urlTable) {
      diningLocation = urlTable.trim();
    }

    const storedCart = localStorage.getItem('lodge_guided_cart');
    if (storedCart) {
      try {
        cart = JSON.parse(storedCart);
      } catch (e) {
        console.error('Failed parsing localStorage cart:', e);
      }
    }
  });

  // Save cart to LocalStorage reactively
  $: {
    localStorage.setItem('lodge_guided_cart', JSON.stringify(cart));
  }

  // Cart metrics
  $: cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  $: subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  $: total = subtotal;

  // Determine active course items based on step
  $: activeStepItems = (() => {
    const currentStepConfig = steps[activeStep];
    if (!currentStepConfig || !currentStepConfig.categories) return [];
    return menuItems.filter(item => currentStepConfig.categories.includes(item.category));
  })();

  // Cart operations
  function generateCartKey(item, customDetails) {
    let key = item.id;
    if (customDetails) {
      if (customDetails.choices) {
        key += "_" + Object.values(customDetails.choices).sort().join("_");
      }
      if (customDetails.extraAddons) {
        key += "_" + customDetails.extraAddons.map(x => x.name).sort().join("_");
      }
      if (customDetails.notes) {
        key += "_" + customDetails.notes.replace(/\s+/g, '').toLowerCase();
      }
    }
    return key;
  }

  function getCartItemQty(itemId) {
    const match = cart.find(x => x.id === itemId);
    return match ? match.qty : 0;
  }

  function handleAddClick(event) {
    const item = event.detail.item;
    if (item.options && item.options.length > 0) {
      selectedItemForModal = item;
      showCustomModal = true;
    } else {
      addToCart(item, 1, null, item.price);
    }
  }

  function handleModalAdd(event) {
    const { item, qty, customDetails, price } = event.detail;
    addToCart(item, qty, customDetails, price);
    showCustomModal = false;
  }

  function addToCart(item, qty, customDetails, singlePrice) {
    const key = generateCartKey(item, customDetails);
    const existingIndex = cart.findIndex(x => x.key === key);

    if (existingIndex >= 0) {
      cart[existingIndex].qty += qty;
      cart = [...cart];
    } else {
      cart = [...cart, {
        key,
        id: item.id,
        name: item.name,
        price: singlePrice,
        qty,
        customDetails,
        itemRef: item
      }];
    }
  }

  function handleCardIncrease(event) {
    const item = event.detail.item;
    const match = cart.find(x => x.id === item.id);
    if (match) {
      changeQty(match.key, 1);
    } else {
      addToCart(item, 1, null, item.price);
    }
  }

  function handleCardDecrease(event) {
    const item = event.detail.item;
    const matches = cart.filter(x => x.id === item.id);
    if (matches.length > 0) {
      changeQty(matches[0].key, -1);
    }
  }

  function changeQty(key, delta) {
    const idx = cart.findIndex(x => x.key === key);
    if (idx >= 0) {
      if (cart[idx].qty + delta > 0) {
        cart[idx].qty += delta;
      } else {
        cart = cart.filter(x => x.key !== key);
      }
      cart = [...cart];
    }
  }

  function handleIncrease(event) { changeQty(event.detail.key, 1); }
  function handleDecrease(event) { changeQty(event.detail.key, -1); }
  function handleRemove(event) {
    cart = cart.filter(x => x.key !== event.detail.key);
  }

  // Navigation steps controls
  function nextStep() {
    if (activeStep < steps.length - 1) {
      activeStep += 1;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function prevStep() {
    if (activeStep > 0) {
      activeStep -= 1;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function jumpToStep(event) {
    activeStep = event.detail.index;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Checkout operations
  function triggerCheckout() {
    showReviewOverlay = false;
    showFlotModal = true;
  }

  function handlePaymentSuccess() {
    cart = [];
    diningLocation = "";
    showFlotModal = false;
    viewMode = "welcome"; // Return to table setup
    activeStep = 0;
  }

  // View mode changes
  function enterGuidedMode() {
    viewMode = "guided";
    activeStep = 1;
  }

  function enterFullMode() {
    viewMode = "full";
    activeStep = 1; // bypass welcome timeline
  }

  function exitToWelcome() {
    viewMode = "welcome";
    activeStep = 0;
  }

  function resumeOrdering() {
    showReviewOverlay = false;
    if (viewMode === "welcome") {
      viewMode = lastActiveViewMode;
      activeStep = lastActiveStep;
    }
  }
</script>

<div class="app-layout">
  <!-- Svelte minimalist Header -->
  <Header 
    simulatedTime={simulatedTime} 
    cartCount={cartCount}
    on:timeChange={(e) => simulatedTime = e.detail.time}
    on:toggleCart={() => showReviewOverlay = true}
    on:goHome={exitToWelcome}
  />

  {#if viewMode === 'guided'}
    <!-- Stepper only active in guided wizard mode -->
    <StepNavigator 
      steps={steps} 
      activeStep={activeStep}
      on:jump={jumpToStep}
    />
  {/if}

  <!-- Main Guided Deck Container -->
  <main class="guided-container">
    {#if viewMode === 'welcome'}
      <!-- Step 0: Table Number configuration -->
      <WelcomeStep 
        bind:diningLocation={diningLocation}
        on:startGuided={enterGuidedMode}
        on:startFull={enterFullMode}
      />
    {:else if viewMode === 'guided'}
      <!-- Step 1-5: Menu Course cards selection in Guided mode -->
      {@const currentStep = steps[activeStep]}
      <div class="step-title-block">
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
          <div>
            <span class="step-number">Course Step {activeStep} of {steps.length - 1}</span>
            <h1 class="step-title">{currentStep.name}</h1>
            <p class="step-subtitle">{currentStep.desc}</p>
          </div>
          <button type="button" class="skip-link" on:click={enterFullMode}>
            Browse Full Menu &rarr;
          </button>
        </div>
      </div>

      <GuidedItemGrid 
        courseName={currentStep.name}
        items={activeStepItems}
        simulatedTime={simulatedTime}
        cart={cart}
        on:add={handleAddClick}
        on:increase={handleCardIncrease}
        on:decrease={handleCardDecrease}
      />
    {:else if viewMode === 'full'}
      <!-- Full Menu Browse Mode -->
      <div class="step-title-block">
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
          <div>
            <span class="step-number">Complete Catalog</span>
            <h1 class="step-title">All Menu Categories</h1>
            <p class="step-subtitle">
              {#if diningLocation}
                Table: {diningLocation} — Scroll or search to browse items.
              {:else}
                Scroll or search to browse items.
              {/if}
            </p>
          </div>
          <button type="button" class="skip-link" on:click={enterGuidedMode}>
            Switch to Guided Flow &rarr;
          </button>
        </div>
      </div>

      <GuidedItemGrid 
        courseName="All Menu Categories"
        items={menuItems}
        simulatedTime={simulatedTime}
        cart={cart}
        on:add={handleAddClick}
        on:increase={handleCardIncrease}
        on:decrease={handleCardDecrease}
      />
    {/if}
  </main>

  <!-- Sticky footer navigation panel -->
  {#if viewMode !== 'welcome'}
    <footer class="wizard-footer">
      <div class="wizard-footer-container">
        {#if viewMode === 'guided'}
          <!-- Guided navigation controls -->
          {#if activeStep > 1}
            <button type="button" class="wizard-btn-secondary" on:click={prevStep}>
              &larr; Back
            </button>
          {:else}
            <button type="button" class="wizard-btn-secondary" on:click={exitToWelcome}>
              <span class="back-btn-text-desktop">&larr; {diningLocation ? 'Change Table' : 'Home'}</span>
              <span class="back-btn-text-mobile" style="display: none;">&larr; Home</span>
            </button>
          {/if}

          {#if activeStep < steps.length - 1}
            <div style="display: flex; align-items: center; gap: 20px;">
              <button type="button" class="skip-link" on:click={nextStep}>Skip</button>
              <button type="button" class="wizard-btn-primary" on:click={nextStep}>
                <span class="next-btn-text-desktop">Next: {steps[activeStep + 1].name} &rarr;</span>
                <span class="next-btn-text-mobile" style="display: none;">Next &rarr;</span>
              </button>
            </div>
          {:else}
            <button type="button" class="wizard-btn-primary" on:click={triggerCheckout}>
              <span>Checkout</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          {/if}
        {:else}
          <!-- Full Menu mode navigation controls -->
          <button type="button" class="wizard-btn-secondary" on:click={exitToWelcome}>
            <span class="back-btn-text-desktop">&larr; {diningLocation ? 'Change Table' : 'Home'}</span>
            <span class="back-btn-text-mobile" style="display: none;">&larr; Home</span>
          </button>

          <button type="button" class="wizard-btn-primary" on:click={triggerCheckout} disabled={cartCount === 0}>
            <span>Checkout</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        {/if}
      </div>
    </footer>
  {/if}

  <!-- Full-Screen Edit Order Summary Overlay Screen -->
  {#if showReviewOverlay}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="edit-order-overlay step-container-transition" style="display: flex;">
      <CartPane 
        cart={cart}
        subtotal={subtotal}
        total={total}
        on:increase={handleIncrease}
        on:decrease={handleDecrease}
        on:remove={handleRemove}
        on:close={resumeOrdering}
        on:checkout={triggerCheckout}
      />
    </div>
  {/if}

  <!-- Options customization popup -->
  <CustomDialog 
    item={selectedItemForModal}
    show={showCustomModal}
    on:close={() => { showCustomModal = false; selectedItemForModal = null; }}
    on:add={handleModalAdd}
  />

  <!-- Simulated Flot Pay dialog checkout -->
  <FlotDialog 
    show={showFlotModal}
    total={total}
    diningOption={diningOption}
    bind:diningLocation={diningLocation}
    on:close={() => showFlotModal = false}
    on:paymentSuccess={handlePaymentSuccess}
  />
</div>
