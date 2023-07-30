<script lang="ts">
  import { DECK } from './utils/gameData';
  import { shuffle } from './utils/shuffleArray';
  import Cards from './components/Cards.svelte';

  // TODO: Add difficulty selector
  // TODO: get n cards based on difficulty
  let cards = shuffle(DECK).slice(0, 21);
</script>

<main>
  <div class="heading">
    <h1>Memory Card Game</h1>
    <p>Click a card to start the game. The game is over if you click a card more than once!</p>
  </div>
  <Cards {cards} />
</main>

<style>
  main {
    padding: 20px 0;
  }
  .heading {
    margin: 20px;
  }
</style>
