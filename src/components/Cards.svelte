<script lang="ts">
  import Card from './Card.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  import type { CardType } from '../types/card.type';
  export let cards: (CardType & { clicked: boolean })[] = [];
</script>

<div class="cards">
  {#each cards as card (card.id)}
    <Card {card} on:click={() => dispatch('click', card.id)} />
  {/each}
</div>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1600px;
    margin: 20px auto;
    gap: 8px;
  }

  @media (min-width: 576px) {
    .cards {
      gap: 12px;
    }
  }

  @media (min-width: 768px) {
    .cards {
      gap: 16px;
    }
  }

  @media (min-width: 992px) {
    .cards {
      gap: 20px;
    }
  }
</style>
