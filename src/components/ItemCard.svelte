<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let item;
  export let simulatedTime = "13:00";
  export let inCartQty = 0;

  // Check if item is available based on simulated current time
  $: isAvailable = (() => {
    const [hoursStr] = simulatedTime.split(':');
    const hours = parseInt(hoursStr, 10);

    if (item.menu === 'coffeeshop') {
      // Coffee shop menu is open from 6am to 11am
      return hours >= 6 && hours < 11;
    }
    if (item.category === 'African Corner') {
      // African corner is open from 11am to 6pm (18:00)
      return hours >= 11 && hours < 18;
    }
    return true;
  })();

  $: timeWarningText = (() => {
    if (item.menu === 'coffeeshop') return "Available 6am - 11am";
    if (item.category === 'African Corner') return "Available 11am - 6pm";
    return "";
  })();

  function handleAdd() {
    if (!isAvailable) return;
    dispatch('add', { item });
  }

  function handleIncrease() {
    if (!isAvailable) return;
    dispatch('increase', { item });
  }

  function handleDecrease() {
    dispatch('decrease', { item });
  }
</script>

<div class="item-card" class:disabled={!isAvailable}>
  <div class="card-top">
    <div class="item-header">
      <h3 class="item-title">{item.name}</h3>
      <span class="item-price">Nle {item.price.toLocaleString()}</span>
    </div>
    
    {#if item.description}
      <p class="item-desc">{item.description}</p>
    {/if}

    <div class="item-tags">
      {#if item.spicy}
        <span class="tag-badge spicy">🌶️ Spicy</span>
      {/if}
      {#if item.nuts}
        <span class="tag-badge nuts">🥜 Nuts</span>
      {/if}
      {#if item.vegetarian}
        <span class="tag-badge vegetarian">🌱 Veg</span>
      {/if}
      {#if item.alcohol}
        <span class="tag-badge spicy">🍷 Alcohol</span>
      {/if}
      {#if !isAvailable && timeWarningText}
        <span class="tag-badge time-limit">🕒 {timeWarningText}</span>
      {/if}
    </div>
  </div>

  <div class="card-bottom">
    {#if !isAvailable}
      <div class="card-warning">
        <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        <span>Closed</span>
      </div>
    {:else}
      <div></div> <!-- visual spacer -->
    {/if}

    {#if isAvailable}
      {#if inCartQty > 0}
        <div class="card-qty-control">
          <button class="circle-qty-btn" on:click={handleDecrease} aria-label="Decrease quantity">-</button>
          <span class="qty-val">{inCartQty}</span>
          <button class="circle-qty-btn" on:click={handleIncrease} aria-label="Increase quantity">+</button>
        </div>
      {:else}
        <button class="add-btn" on:click={handleAdd}>
          <span>Add</span>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </button>
      {/if}
    {/if}
  </div>
</div>
