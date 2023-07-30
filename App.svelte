<script lang="ts">
  import { DECK, DIFFICULTY_LEVELS } from './utils/gameData';
  import { shuffle } from './utils/shuffleArray';
  import Cards from './components/Cards.svelte';
  import DifficultySelector from './components/DifficultySelector.svelte';

  let difficulty = DIFFICULTY_LEVELS[1];
  $: cards = shuffle(DECK).slice(0, difficulty.numCards);
</script>

<main>
  <div class="heading">
    <h1>Memory Card Game</h1>
    <p>Click a card to start the game. The game is over if you click a card more than once!</p>
  </div>
  <DifficultySelector bind:currDifficulty={difficulty} />
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
