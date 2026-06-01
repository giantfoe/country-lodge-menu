<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let steps = [];
  export let activeStep = 0;

  function handleStepClick(index) {
    dispatch('jump', { index });
  }
</script>

<div class="step-nav-wrapper">
  {#each steps as step, index}
    <button 
      type="button" 
      class="step-indicator" 
      class:active={activeStep === index}
      class:completed={activeStep > index}
      on:click={() => handleStepClick(index)}
      title={step.name}
    >
      <span class="step-dot-label">{step.name}</span>
    </button>
  {/each}
</div>
