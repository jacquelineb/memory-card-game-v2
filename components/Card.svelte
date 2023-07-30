<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  import type { CardType } from '../types/card.type';

  export let card: CardType;
</script>

<div on:click={(e) => dispatch('click')}>
  <img src={card.imgSrc} alt={card.name} />
  <p class="card-name">{card.name}</p>
</div>

<style>
  div {
    width: 30%;
    max-width: 200px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
  }

  img {
    width: 100%;
    display: block;
    aspect-ratio: 1;
  }

  p {
    background-color: #b01e1e;
    margin: 0;
    padding: 6px;
  }
</style>
