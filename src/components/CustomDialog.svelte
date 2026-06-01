<script>
  import { createEventDispatcher, onMount } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let item = null;
  export let show = false;

  let dialogEl;
  let qty = 1;
  let selectedChoices = {}; // E.g., { "Choose Your Sauce": "Mushroom Sauce" }
  let selectedAddons = [];  // E.g., [{ name: "Add Grilled Chicken", price: 70 }]
  let notes = "";

  // Reactive state management when item changes or modal opens
  $: if (item && show) {
    qty = 1;
    selectedChoices = {};
    selectedAddons = [];
    notes = "";

    // Set default choices for select type options
    if (item.options) {
      item.options.forEach(opt => {
        if (opt.type === 'select' && opt.choices && opt.choices.length > 0) {
          selectedChoices[opt.name] = opt.choices[0];
        }
      });
    }
  }

  // Manage native dialog visibility reactively
  $: if (dialogEl) {
    if (show && !dialogEl.open) {
      dialogEl.showModal();
    } else if (!show && dialogEl.open) {
      dialogEl.close();
    }
  }

  // Compute total price of the item + selected options
  $: singleItemPrice = (() => {
    if (!item) return 0;
    let base = item.price;
    // Add checked checkbox options
    selectedAddons.forEach(addon => {
      base += addon.price;
    });
    return base;
  })();

  $: totalPrice = singleItemPrice * qty;

  function handleClose() {
    dispatch('close');
  }

  function handleAdd() {
    dispatch('add', {
      item,
      qty,
      customDetails: {
        choices: Object.keys(selectedChoices).length > 0 ? selectedChoices : null,
        extraAddons: selectedAddons.length > 0 ? selectedAddons : null,
        notes: notes.trim() ? notes : null
      },
      price: singleItemPrice
    });
  }

  function toggleAddon(addon) {
    const idx = selectedAddons.findIndex(x => x.name === addon.name);
    if (idx >= 0) {
      selectedAddons = selectedAddons.filter((_, i) => i !== idx);
    } else {
      selectedAddons = [...selectedAddons, addon];
    }
  }

  function selectChoice(optionName, choiceVal) {
    selectedChoices[optionName] = choiceVal;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialogEl} class="apple-dialog" closedby="any" on:close={handleClose} on:click={(e) => { if(e.target === dialogEl) handleClose(); }}>
  {#if item}
    <div class="dialog-content">
      <header class="dialog-header">
        <div class="dialog-header-details">
          <h2 class="dialog-title">{item.name}</h2>
          <span class="dialog-price">Nle {item.price.toLocaleString()}</span>
        </div>
        <button class="dialog-close-x" on:click={handleClose}>&times;</button>
      </header>
      
      <div class="dialog-body">
        {#if item.description}
          <p class="dialog-description">{item.description}</p>
        {/if}

        <div class="customization-options-container">
          {#if item.options}
            {#each item.options as opt}
              {#if opt.type === 'select'}
                <!-- Select Choice Option Dropdown -->
                <div class="customization-section">
                  <span class="section-label">{opt.name}</span>
                  <div class="options-grid">
                    {#each opt.choices as choice}
                      <label 
                        class="option-checkbox-row" 
                        class:selected={selectedChoices[opt.name] === choice}
                        on:click={() => selectChoice(opt.name, choice)}
                      >
                        <div class="option-label-group">
                          <input 
                            type="radio" 
                            name={opt.name} 
                            value={choice} 
                            checked={selectedChoices[opt.name] === choice}
                            style="margin-right: 8px;"
                          >
                          <span>{choice}</span>
                        </div>
                      </label>
                    {/each}
                  </div>
                </div>
              {:else}
                <!-- Flat add-on (represented directly as item.options) -->
                <div class="customization-section">
                  <span class="section-label">Options / Add-ons</span>
                  <div class="options-grid">
                    <label 
                      class="option-checkbox-row" 
                      class:selected={selectedAddons.some(x => x.name === opt.name)}
                      on:click|preventDefault={() => toggleAddon(opt)}
                    >
                      <div class="option-label-group">
                        <input 
                          type="checkbox" 
                          checked={selectedAddons.some(x => x.name === opt.name)}
                          style="margin-right: 8px;"
                        >
                        <span>{opt.name}</span>
                      </div>
                      <span class="option-price-label">+Nle {opt.price}</span>
                    </label>
                  </div>
                </div>
              {/if}
            {/each}
          {/if}
        </div>

        <div class="input-group">
          <label for="modal-notes">Special Instructions</label>
          <textarea id="modal-notes" bind:value={notes} placeholder="E.g., No onions, extra sauce, well done..." rows="2"></textarea>
        </div>
      </div>

      <footer class="dialog-footer">
        <div class="quantity-control-wrapper">
          <button class="qty-btn" on:click={() => { if (qty > 1) qty--; }} aria-label="Decrease quantity">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <span class="qty-display">{qty} {qty === 1 ? 'Portion' : 'Portions'}</span>
          <button class="qty-btn" on:click={() => qty++} aria-label="Increase quantity">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
        
        <button class="add-to-cart-submit" on:click={handleAdd}>
          <span>Add {qty} {qty === 1 ? 'Portion' : 'Portions'}</span>
          <span>Nle {totalPrice.toLocaleString()}</span>
        </button>
      </footer>
    </div>
  {/if}
</dialog>
