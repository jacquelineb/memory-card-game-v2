<script lang="ts">
  import type { CardType } from 'src/types/card.type';
  export let card: CardType;
</script>

<div>
  <img src={card.imgSrc} alt={card.name} />
  <p class="card-name">{card.name}</p>
</div>

<style>
  div {
    width: 30%;
    max-width: 200px;
    text-transform: capitalize;
    font-weight: 600;
  }

  img {
    width: 100%;
    display: block;
    aspect-ratio: 1;
  }

  p {
    background-color: #b01e1e;
    margin: 0;
    padding: 8px;
  }
</style>
