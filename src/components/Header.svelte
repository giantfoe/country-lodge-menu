<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let simulatedTime = "13:00";
  export let cartCount = 0;

  function handleTimeChange(e) {
    const value = e.target.value;
    dispatch('timeChange', { time: value });
  }

  function toggleCart() {
    dispatch('toggleCart');
  }

  $: formattedTime = (() => {
    const [hoursStr, minutesStr] = simulatedTime.split(':');
    const hours = parseInt(hoursStr, 10);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours.toString().padStart(2, '0')}:${minutesStr} ${ampm}`;
  })();
</script>

<header class="global-header">
  <div class="header-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
      class="brand" 
      on:click={() => dispatch('goHome')} 
      style="cursor: pointer; user-select: none; transition: opacity 0.15s ease; display: flex; flex-direction: row; align-items: center; gap: 8px;"
      on:mouseenter={(e) => e.currentTarget.style.opacity = "0.7"}
      on:mouseleave={(e) => e.currentTarget.style.opacity = "1"}
      title="Return to Home"
    >
      <img src="/logo.png" alt="Country Lodge Hotel Logo" style="height: 38px; width: auto; object-fit: contain; display: block;" />
      <span class="service-subtitle" style="font-size: 8px; font-weight: 700; letter-spacing: 2px; color: var(--ink-muted); margin-top: 0; padding-left: 8px; border-left: 1px solid var(--border-strong);">FOOD SERVICE</span>
    </div>
    
    <!-- Time Toggle widget (Native select overlays a custom digital clock widget) -->
    <div class="time-control-panel" title="Click to change simulated time">
      <select id="header-time-select" class="time-dropdown-overlay" value={simulatedTime} on:change={handleTimeChange} aria-label="Change simulated time">
        <option value="08:00">Breakfast (08:00 AM)</option>
        <option value="13:00">Lunch (01:00 PM)</option>
        <option value="19:00">Dinner (07:00 PM)</option>
        <option value="23:00">Late Night (11:00 PM)</option>
      </select>
      
      <div class="digital-clock-widget">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--apple-blue); flex-shrink: 0;">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span class="digital-clock-time">{formattedTime.split(' ')[0]}</span>
        <span class="digital-clock-ampm">{formattedTime.split(' ')[1]}</span>
      </div>
    </div>

    <!-- Review Order Button with count -->
    <button class="review-order-btn" on:click={toggleCart} aria-label="Review current selections">
      <svg class="cart-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" style="display: none; flex-shrink: 0;">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      <span class="review-btn-text">Review Order</span>
      {#if cartCount > 0}
        <span class="review-count-badge">{cartCount}</span>
      {/if}
    </button>
  </div>
</header>
