<script lang="ts">
  import { DECK, DIFFICULTY_LEVELS } from './utils/gameData';
  import { shuffle } from './utils/shuffleArray';
  import Cards from './components/Cards.svelte';
  import DifficultySelector from './components/DifficultySelector.svelte';

  let difficulty = DIFFICULTY_LEVELS[0];
  let score = 0;
  $: cards = getCards(difficulty.numCards);

  const getCards = (numCards: number) => {
    return shuffle(DECK)
      .slice(0, numCards)
      .map((card) => {
        return { ...card, clicked: false };
      });
  };

  const resetGame = () => {
    cards = getCards(difficulty.numCards);
    score = 0;
  };

  const handleClickCard = (cardId: number) => {
    const i = cards.findIndex((c) => c.id === cardId);
    if (!cards[i].clicked) {
      cards[i] = { ...cards[i], clicked: true };
      ++score;
      if (score === cards.length) {
        alert('YOU WON');
        return;
      }
      cards = shuffle(cards);
    } else {
      alert(`You Lost.\nSCORE: ${score}`);
      resetGame();
    }
  };
</script>

<main>
  <div class="heading">
    <h1>Memory Card Game</h1>
    <p>Click a card to start the game. The game is over if you click a card more than once!</p>
  </div>
  <DifficultySelector bind:currDifficulty={difficulty} />
  <Cards {cards} on:click={(e) => handleClickCard(e.detail)} />
</main>

<style>
  main {
    padding: 20px 0;
  }
  .heading {
    margin: 20px;
  }
</style>
