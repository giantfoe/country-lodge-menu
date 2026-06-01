<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let show = false;
  export let total = 0;
  export let diningOption = "";
  export let diningLocation = "";

  let dialogEl;
  let paymentInitiated = false;

  // Dynamic link to the pay.flotme.ai URL
  $: payDescription = `Country Lodge - ${diningOption.toUpperCase()} (${diningLocation ? 'Table ' + diningLocation : 'No Table'})`;
  $: flotPaymentUrl = `https://pay.flotme.ai/pay?amount=${total}&merchant=country_lodge_hotel&desc=${encodeURIComponent(payDescription)}`;

  $: if (dialogEl) {
    if (show && !dialogEl.open) {
      dialogEl.showModal();
      paymentInitiated = false;
    } else if (!show && dialogEl.open) {
      dialogEl.close();
    }
  }

  function handleClose() {
    dispatch('close');
  }

  function handlePaymentInitiated() {
    paymentInitiated = true;
  }

  function handleDone() {
    dispatch('paymentSuccess');
    handleClose();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialogEl} class="apple-dialog flot-payment-dialog" closedby="any" on:close={handleClose} on:click={(e) => { if(e.target === dialogEl) handleClose(); }}>
  <div class="dialog-content">
    <header class="dialog-header text-center">
      <div class="flot-brand">
        <span class="flot-logo-f">f</span>
        <span class="flot-name">flot pay</span>
      </div>
      <button class="dialog-close-x" on:click={handleClose}>&times;</button>
    </header>
    
    <div class="dialog-body">
      {#if paymentInitiated}
        <!-- Follow-up Screen when payment is initiated in new tab -->
        <div class="text-center" style="padding: 30px 10px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <div style="background-color: var(--apple-blue-light); color: var(--apple-blue); width: 64px; height: 64px; border-radius: var(--radius-pill); display: flex; align-items: center; justify-content: center;">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
          
          <h2 style="font-size: 20px; font-weight: 800; color: var(--ink); letter-spacing: -0.5px;">Checkout Window Opened</h2>
          
          <p style="font-size: 14px; line-height: 1.5; color: var(--ink-muted); margin-top: 4px;">
            We have launched **Flot Pay** in a secure browser tab to process your **Nle {total.toLocaleString()}** order.
          </p>

          {#if diningLocation}
            <div style="font-size: 12px; font-weight: 700; color: var(--ink); background-color: var(--canvas-gray); padding: 8px 16px; border-radius: var(--radius-pill);">
              Table: {diningLocation}
            </div>
          {/if}

          <div style="width: 100%; display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
            <button type="button" class="pay-submit-btn" style="background-color: var(--apple-blue); color: var(--ink-contrast); border: none; cursor: pointer;" on:click={handleDone}>
              Done & Clear Order
            </button>
            
            <a href={flotPaymentUrl} target="_blank" class="flot-external-link" style="font-size: 13px; font-weight: 700; color: var(--apple-blue); text-decoration: underline;">
              Didn't open? Click here to retry &rarr;
            </a>

            <button type="button" style="font-size: 13px; color: var(--ink-light); margin-top: 8px; text-decoration: underline; border: none; background: none; cursor: pointer;" on:click={handleClose}>
              Go back / Adjust Cart
            </button>
          </div>
        </div>
      {:else}
        <!-- Initial Payment Redirect Page -->
        <p class="merchant-name text-center">Paying <strong>The Country Lodge Hotel</strong></p>
        <div class="flot-amount-display text-center">Nle {total.toLocaleString()}</div>
        
        <div style="font-size: 12.5px; color: var(--ink-muted); margin-bottom: 20px;" class="text-center">
          Dining Option: <strong style="color: var(--ink);">{diningOption.toUpperCase()}</strong>
        </div>

        <div class="flot-form">
          <div class="input-group" style="margin-bottom: 24px;">
            <label for="flot-table-input">Confirm Table Number (Optional)</label>
            <input 
              type="text" 
              id="flot-table-input" 
              bind:value={diningLocation} 
              placeholder="E.g. Table 12 (Optional)"
              style="height: 52px; font-weight: 700; font-size: 16px;"
            >
          </div>
          
          <a href={flotPaymentUrl} target="_blank" class="pay-submit-btn" on:click={handlePaymentInitiated} style="text-decoration: none;">
            <span>Pay with Flot Pay</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="flex-shrink: 0;">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
          </a>

          <div style="text-align: center; margin-top: 16px;">
            <button type="button" style="font-size: 13px; color: var(--ink-muted); text-decoration: underline; border: none; background: none; cursor: pointer;" on:click={handleClose}>
              Cancel & Continue Browsing
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</dialog>
