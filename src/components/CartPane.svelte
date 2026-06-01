<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let cart = [];
  export let subtotal = 0;
  export let total = 0;

  $: vatAmount = subtotal * 0.15;

  function handleIncrease(key) {
    dispatch('increase', { key });
  }

  function handleDecrease(key) {
    dispatch('decrease', { key });
  }

  function handleRemove(key) {
    dispatch('remove', { key });
  }

  function closeReview() {
    dispatch('close');
  }

  function triggerCheckout() {
    dispatch('checkout');
  }
</script>

<div class="edit-order-container">
  <header class="edit-header">
    <h2 class="edit-title">Review Your Order</h2>
    <button type="button" class="edit-close-btn" on:click={closeReview} aria-label="Close review">&times;</button>
  </header>

  <div class="edit-body">
    {#if cart.length === 0}
      <div class="empty-cart-message" style="padding: 60px 0;">
        <svg viewBox="0 0 24 24" width="64" height="64" class="empty-cart-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
        </svg>
        <p style="font-size: 18px; margin-top: 12px;">Your order is currently empty</p>
        <span style="font-size: 14px;">Browse the menu steps and select items to add.</span>
      </div>
    {:else}
      {#each cart as cartItem (cartItem.key)}
        <div class="cart-item-row" style="padding: 16px 0; font-size: 16px;">
          <div class="cart-item-info">
            <span class="cart-item-name" style="font-size: 18px;">{cartItem.name}</span>
            {#if cartItem.customDetails}
              <div class="cart-item-meta" style="font-size: 13px; margin-top: 6px;">
                {#if cartItem.customDetails.choices}
                  {#each Object.entries(cartItem.customDetails.choices) as [optionName, optionVal]}
                    <div>• {optionName}: {optionVal}</div>
                  {/each}
                {/if}
                {#if cartItem.customDetails.extraAddons && cartItem.customDetails.extraAddons.length > 0}
                  <div>• Add-ons: {cartItem.customDetails.extraAddons.map(x => `${x.name} (+Nle ${x.price})`).join(', ')}</div>
                {/if}
                {#if cartItem.customDetails.notes}
                  <div style="font-style: italic; color: var(--apple-blue);">• Notes: "{cartItem.customDetails.notes}"</div>
                {/if}
              </div>
            {/if}
          </div>

          <div class="cart-item-price-col">
            <span class="cart-item-price" style="font-size: 18px; margin-bottom: 8px;">Nle {(cartItem.price * cartItem.qty).toLocaleString()}</span>
            
            <div class="guided-qty-control">
              <button type="button" class="guided-qty-btn" on:click={() => handleDecrease(cartItem.key)} aria-label="Decrease quantity">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <span class="guided-qty-val">{cartItem.qty} {cartItem.qty === 1 ? 'Portion' : 'Portions'}</span>
              <button type="button" class="guided-qty-btn" on:click={() => handleIncrease(cartItem.key)} aria-label="Increase quantity">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
            
            <button type="button" style="font-size: 12px; color: var(--ink-light); margin-top: 8px; text-decoration: underline;" on:click={() => handleRemove(cartItem.key)}>
              Remove Item
            </button>
          </div>
        </div>
      {/each}
    {/if}
  </div>

  {#if cart.length > 0}
    <div class="edit-totals-section">
      <div class="edit-row">
        <span>Subtotal</span>
        <span>Nle {subtotal.toLocaleString()}</span>
      </div>
      <div class="edit-row" style="font-size: 14px;">
        <span>VAT (15% inclusive)</span>
        <span>Nle {vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>
      <div class="edit-row total">
        <span>Total</span>
        <span>Nle {total.toLocaleString()}</span>
      </div>

      <div style="display: flex; gap: 16px; margin-top: 16px;">
        <button type="button" class="wizard-btn-secondary" style="flex: 1; height: 56px;" on:click={closeReview}>
          Resume Ordering
        </button>
        <button type="button" class="wizard-btn-primary" style="flex: 1.5; height: 56px; justify-content: center;" on:click={triggerCheckout}>
          <span>Proceed to Checkout</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  {:else}
    <button type="button" class="wizard-btn-primary" style="width: 100%; height: 56px; justify-content: center;" on:click={closeReview}>
      Back to Menu
    </button>
  {/if}
</div>
