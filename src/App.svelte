<script lang="ts">
  import { DECK, DIFFICULTY_LEVELS } from './utils/gameData';
  import { shuffle } from './utils/shuffleArray';
  import Cards from './components/Cards.svelte';
  import DifficultySelector from './components/DifficultySelector.svelte';
  import ScoreDisplay from './components/ScoreDisplay.svelte';
  import GameoverAlert from './components/GameoverAlert.svelte';
  import { GameStatus } from './types/gameStatus.enum';

  let difficulty = DIFFICULTY_LEVELS[0];
  let score = 0;
  $: cards = getCards(difficulty.numCards);

  let status: GameStatus = GameStatus.PENDING;
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
    status = GameStatus.PENDING;
  };

  const handleClickCard = (cardId: number) => {
    const i = cards.findIndex((c) => c.id === cardId);
    if (!cards[i].clicked) {
      cards[i] = { ...cards[i], clicked: true };
      ++score;
      if (score === cards.length) {
        status = GameStatus.WIN;
        return;
      }
      cards = shuffle(cards);
    } else {
      status = GameStatus.LOSE;
    }
  };
</script>

<main>
  <div class="heading">
    <h1>Memory Card Game</h1>
    <p>Click a card to start the game. The game is over if you click a card more than once!</p>
    <ScoreDisplay {score} />
  </div>
  <DifficultySelector bind:currDifficulty={difficulty} />
  <Cards {cards} on:click={(e) => handleClickCard(e.detail)} />
  <GameoverAlert {status} on:dismiss={() => resetGame()} />
</main>

<style>
  main:before {
    content: '';
    display: block;
    position: fixed;
    background-image: url('./assets/background.jpg');
    background-position: bottom;
    width: 100%;
    z-index: -1;
    opacity: 0.8;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .heading {
    margin: 20px;
  }
</style>
