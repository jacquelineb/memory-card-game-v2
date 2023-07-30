<script lang="ts">
  import Card from './Card.svelte';
  import type { CardType } from 'src/types/card.type';
  export let cards: CardType[] = [];
</script>

<div class="cards">
  {#each cards as card}
    <Card {card} />
  {/each}
</div>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1600px;
    margin: 20px auto;
    gap: 1vw;
  }
</style>
