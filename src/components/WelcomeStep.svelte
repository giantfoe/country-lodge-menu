<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let diningLocation = "";

  function handleGuided() {
    dispatch('startGuided');
  }

  function handleFull() {
    dispatch('startFull');
  }
</script>

<div class="step-container-transition">
  <div class="step-title-block text-center" style="margin-bottom: 40px;">
    <span class="step-number">In-Restaurant Dining</span>
    <h1 class="step-title" style="margin-bottom: 16px;">Country Lodge Restaurant</h1>
    <p class="step-subtitle">Welcome! Browse the menu directly or start a guided order flow.</p>
  </div>

  <div class="welcome-form" style="max-width: 600px; margin: 0 auto;">
    <div class="giant-input-group">
      <label for="table-input">Table Number (Optional)</label>
      <input 
        type="text" 
        id="table-input" 
        bind:value={diningLocation} 
        placeholder="E.g. Table 12 (Optional)"
      >
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">
      <!-- Guided Flow Button -->
      <button 
        type="button" 
        class="wizard-btn-primary" 
        style="height: 60px; justify-content: center; font-size: 16px;"
        on:click={handleGuided}
      >
        <span>Order Now (Guided Flow)</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>

      <!-- Classic Browse Button -->
      <button 
        type="button" 
        class="wizard-btn-secondary" 
        style="height: 60px; justify-content: center; font-size: 16px; border: 2px solid var(--ink);"
        on:click={handleFull}
      >
        <span>See Full Menu</span>
      </button>
    </div>
  </div>
</div>
