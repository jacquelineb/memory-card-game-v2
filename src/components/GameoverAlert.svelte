<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  import { fade } from 'svelte/transition';
  import { GameStatus } from '../types/gameStatus.enum';
  import win from '../assets/win.gif';
  import lose from '../assets/lose.gif';

  export let status: GameStatus;
</script>

{#if status !== GameStatus.PENDING}
  <div class="container">
    <div out:fade={{ duration: 100 }} class="alert">
      <span>You {status}!</span>
      {#if status === GameStatus.LOSE}
        <img src={lose} alt="lose" />
      {:else}
        <img src={win} alt="win" />
      {/if}
      <button on:click={() => dispatch('dismiss')}>Restart</button>
    </div>
  </div>
{/if}

<style>
  .container {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .alert {
    background-color: #b01e1e;
    width: 90vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 16px 0;
  }

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.5em;
    letter-spacing: 0.1em;
    text-decoration: underline;
    text-underline-offset: 0.2em;
    text-decoration-thickness: 0.1em;
  }

  img {
    width: 100%;
    height: 130px;
    object-fit: contain;
    object-position: bottom;
    margin-top: -4px;
    margin-bottom: 12px;
    color: transparent;
  }
</style>
