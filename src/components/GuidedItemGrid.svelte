<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  export let courseName = "";
  export let items = [];
  export let simulatedTime = "13:00";
  export let cart = [];

  let searchQuery = "";
  let activeFilters = [];

  // Section definition for Catalog grouping
  const sections = [
    { name: "All", categories: [] },
    { name: "Starters & Salads", categories: ["Salads", "Cold Appetizers", "Hot Appetizers", "Lebanese Corner"] },
    { name: "Mains & Pizza", categories: ["Main Course", "Live Steak Section", "Our Burgers", "Pasta", "Pizza"] },
    { name: "Japanese & Sushi", categories: ["Japanese Selection", "Yakitori Skewers"] },
    { name: "Specials & Desserts", categories: ["African Corner", "Desserts Corner"] },
    { name: "Drinks & Coffee", categories: ["Beverages", "Coffee", "Tea", "Iced Drinks"] }
  ];
  let activeSection = "All";

  // Reset active section when changing course steps
  $: {
    if (courseName) {
      activeSection = "All";
    }
  }

  // Helper: check quantity of an item in the cart (passed cart to ensure reactivity in Svelte 5)
  function getCartQty(itemId, currentCart) {
    const matches = currentCart.filter(x => x.id === itemId);
    return matches.reduce((sum, x) => sum + x.qty, 0);
  }

  // Helper: check if an item is available based on time
  function checkAvailability(item) {
    const [hoursStr] = simulatedTime.split(':');
    const hours = parseInt(hoursStr, 10);

    if (item.menu === 'coffeeshop') {
      return hours >= 6 && hours < 11;
    }
    if (item.category === 'African Corner') {
      return hours >= 11 && hours < 18;
    }
    return true;
  }

  function toggleFilter(filter) {
    if (activeFilters.includes(filter)) {
      activeFilters = activeFilters.filter(x => x !== filter);
    } else {
      activeFilters = [...activeFilters, filter];
    }
  }

  // Perform search and filter locally for the active step
  $: filteredItems = items.filter(item => {
    // Section group filter (only for full menu view mode)
    if (courseName.includes("All") && activeSection !== "All") {
      const currentSec = sections.find(s => s.name === activeSection);
      if (currentSec && !currentSec.categories.includes(item.category)) {
        return false;
      }
    }

    // Search match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description && item.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }

    // Active tags filter
    if (activeFilters.includes('spicy') && !item.spicy) return false;
    if (activeFilters.includes('nuts') && !item.nuts) return false;
    if (activeFilters.includes('vegetarian') && !item.vegetarian) return false;
    if (activeFilters.includes('alcohol') && !item.alcohol) return false;

    // Available now filter
    if (activeFilters.includes('available') && !checkAvailability(item)) return false;

    return true;
  });

  function handleCardClick(item) {
    if (!checkAvailability(item)) return;
    const qty = getCartQty(item.id, cart);
    
    // If the item has options, clicking the card body always opens the customization dialog
    // so guests can add another customized portion.
    // If it has no options, clicking it when not in cart adds 1 portion.
    if (item.options && item.options.length > 0) {
      dispatch('add', { item });
    } else if (qty === 0) {
      dispatch('add', { item });
    }
  }

  function handleIncrease(item) {
    // If it has custom options, we don't want to just increment randomly on card, 
    // we let the parent know. For basic items, we can just increment.
    dispatch('increase', { item });
  }

  function handleDecrease(item) {
    dispatch('decrease', { item });
  }
</script>

<div class="step-container-transition">
  <!-- Search & Filters local to this step -->
  <div class="search-filter-section" style="margin-bottom: 24px;">
    <div class="search-box">
      <input 
        type="text" 
        bind:value={searchQuery} 
        placeholder={`Search in ${courseName} (e.g. chicken, fish, salad)...`}
        autocomplete="off"
      >
      {#if searchQuery}
        <button class="clear-search-btn" onclick={() => searchQuery = ""}>&times;</button>
      {/if}
    </div>

    <div class="filter-chips">
      <button 
        type="button" 
        class="tag-chip" 
        class:active={activeFilters.includes('spicy')}
        onclick={() => toggleFilter('spicy')}
        style="display: inline-flex; align-items: center; gap: 6px;"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        </svg>
        <span>Spicy</span>
      </button>
      <button 
        type="button" 
        class="tag-chip" 
        class:active={activeFilters.includes('nuts')}
        onclick={() => toggleFilter('nuts')}
        style="display: inline-flex; align-items: center; gap: 6px;"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
          <path d="M12 3a9 9 0 0 0-9 9c0 5 9 9 9 9s9-4 9-9a9 9 0 0 0-9-9z"/>
          <path d="M3 12h18"/>
        </svg>
        <span>Contains Nuts</span>
      </button>
      <button 
        type="button" 
        class="tag-chip" 
        class:active={activeFilters.includes('vegetarian')}
        onclick={() => toggleFilter('vegetarian')}
        style="display: inline-flex; align-items: center; gap: 6px;"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
          <path d="M19 2L9.8 11.2" />
        </svg>
        <span>Vegetarian</span>
      </button>
      {#if courseName === 'Beverages' || courseName === 'Welcome'}
        <button 
          type="button" 
          class="tag-chip" 
          class:active={activeFilters.includes('alcohol')}
          onclick={() => toggleFilter('alcohol')}
          style="display: inline-flex; align-items: center; gap: 6px;"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
            <path d="M12 2v13" />
            <path d="M5 2h14c0 4.5-3.5 8-7 8s-7-3.5-7-8z" />
            <path d="M8 22h8" />
          </svg>
          <span>Serves Alcohol</span>
        </button>
      {/if}
      <button 
        type="button" 
        class="tag-chip" 
        class:active={activeFilters.includes('available')}
        onclick={() => toggleFilter('available')}
        style="display: inline-flex; align-items: center; gap: 6px;"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>Available Now</span>
      </button>
    </div>
  </div>

  {#if courseName.includes("All") && !searchQuery.trim()}
    <div style="margin-bottom: 24px;">
      <h2 style="font-family: var(--font-display); font-size: 13px; font-weight: 800; text-transform: uppercase; color: var(--ink-light); letter-spacing: 0.5px; margin-bottom: 12px;">
        Browse Menu Sections
      </h2>
      <div class="full-menu-sections-grid">
        {#each sections.filter(s => s.name !== 'All') as sec}
          {@const count = items.filter(item => sec.categories.includes(item.category)).length}
          <button 
            type="button" 
            class="section-select-card" 
            class:active={activeSection === sec.name}
            onclick={() => activeSection = (activeSection === sec.name ? 'All' : sec.name)}
          >
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; gap: 8px; width: 100%;">
              <h3 style="font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--ink); text-align: left;">{sec.name}</h3>
              <span style="font-size: 11px; font-weight: 700; color: var(--ink-muted); white-space: nowrap;">{count} items</span>
            </div>
            <p style="font-size: 12px; color: var(--ink-muted); line-height: 1.4; text-align: left;">
              {#if sec.name === 'Starters & Salads'}
                Cold & hot appetizers, Lebanese plates, and fresh salads.
              {:else if sec.name === 'Mains & Pizza'}
                Prime steaks, burgers, live cuts, pasta, and pizza.
              {:else if sec.name === 'Japanese & Sushi'}
                Authentic maki, fresh sashimi platters, and yakitori.
              {:else if sec.name === 'Specials & Desserts'}
                African local dish of the day and sweet dessert treats.
              {:else if sec.name === 'Drinks & Coffee'}
                Craft mocktails, local beers, wine, coffee, and shakes.
              {/if}
            </p>
          </button>
        {/each}
      </div>
    </div>
    
    {#if activeSection !== 'All'}
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1.5px solid var(--ink); padding-bottom: 8px;">
        <h2 style="font-family: var(--font-display); font-size: 18px; font-weight: 800; color: var(--ink);">
          Showing: {activeSection}
        </h2>
        <button type="button" class="skip-link" style="font-size: 13px; font-weight: 700;" onclick={() => activeSection = 'All'}>
          Clear Section Filter &times;
        </button>
      </div>
    {/if}
  {/if}

  <div class="selection-list">
    {#each filteredItems as item, index (item.id)}
      {@const isAvailable = checkAvailability(item)}
      {@const cartQty = getCartQty(item.id, cart)}
      
      {#if courseName.includes("All") && (index === 0 || filteredItems[index - 1].category !== item.category)}
        <h2 style="font-family: var(--font-display); font-size: 26px; font-weight: 800; margin: 36px 0 16px 0; color: var(--ink); border-bottom: 2px solid var(--border-hairline); padding-bottom: 8px; width: 100%;">
          {item.category}
        </h2>
      {/if}
      
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div 
        class="guided-card" 
        class:selected={cartQty > 0} 
        class:disabled={!isAvailable}
        onclick={() => handleCardClick(item)}
      >
        <div class="guided-card-info">
          <div class="guided-card-header">
            <h3 class="guided-card-title">{item.name}</h3>
            <span class="guided-card-price">Nle {item.price.toLocaleString()}</span>
          </div>
          
          {#if item.description}
            <p class="guided-card-desc">{item.description}</p>
          {/if}

          <div class="guided-card-tags">
            {#if item.spicy}
              <span class="tag-badge spicy" style="display: inline-flex; align-items: center; gap: 4px;">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                </svg>
                <span>Spicy</span>
              </span>
            {/if}
            {#if item.nuts}
              <span class="tag-badge nuts" style="display: inline-flex; align-items: center; gap: 4px;">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <path d="M12 3a9 9 0 0 0-9 9c0 5 9 9 9 9s9-4 9-9a9 9 0 0 0-9-9z"/>
                  <path d="M3 12h18"/>
                </svg>
                <span>Nuts</span>
              </span>
            {/if}
            {#if item.vegetarian}
              <span class="tag-badge vegetarian" style="display: inline-flex; align-items: center; gap: 4px;">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
                  <path d="M19 2L9.8 11.2" />
                </svg>
                <span>Veg</span>
              </span>
            {/if}
            {#if item.alcohol}
              <span class="tag-badge spicy" style="display: inline-flex; align-items: center; gap: 4px;">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <path d="M12 2v13" />
                  <path d="M5 2h14c0 4.5-3.5 8-7 8s-7-3.5-7-8z" />
                  <path d="M8 22h8" />
                </svg>
                <span>Alcohol</span>
              </span>
            {/if}
            {#if !isAvailable}
              <span class="tag-badge time-limit" style="display: inline-flex; align-items: center; gap: 4px;">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Unavailable Now</span>
              </span>
            {/if}
          </div>
        </div>

        {#if isAvailable}
          {#if cartQty > 0}
            <div class="guided-qty-control" onclick={e => e.stopPropagation()}>
              <button type="button" class="guided-qty-btn" onclick={e => { e.stopPropagation(); handleDecrease(item); }} aria-label="Decrease quantity">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <span class="guided-qty-val">{cartQty} {cartQty === 1 ? 'Portion' : 'Portions'}</span>
              <button type="button" class="guided-qty-btn" onclick={e => { e.stopPropagation(); handleIncrease(item); }} aria-label="Increase quantity">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          {:else}
            <button type="button" class="add-btn" onclick={e => { e.stopPropagation(); handleCardClick(item); }}>
              <span>Select</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
          {/if}
        {:else}
          <div class="card-warning">
            <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
            <span>Hours Closed</span>
          </div>
        {/if}
      </div>
    {:else}
      <div style="text-align: center; padding: 48px; color: var(--ink-light); font-size: 15px;">
        No items matched search or active tags in this section.
      </div>
    {/each}
  </div>
</div>

<style>
  .full-menu-sections-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .section-select-card {
    background-color: var(--canvas-white);
    border: 2px solid var(--border-hairline);
    border-radius: var(--radius-md);
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  }

  .section-select-card:hover {
    border-color: var(--border-strong) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .section-select-card.active {
    background-color: var(--apple-blue-light) !important;
    border-color: var(--apple-blue) !important;
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.08);
  }

  @media (max-width: 600px) {
    .full-menu-sections-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  }
</style>
