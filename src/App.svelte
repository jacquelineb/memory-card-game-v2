<script lang="ts">
  import { DECK, DIFFICULTY_LEVELS } from './utils/gameData';
  import { shuffle } from './utils/shuffleArray';
  import { localStore } from './utils/localStore';
  import type { DifficultyType } from './types/difficulty.type';
  import Cards from './components/Cards.svelte';
  import DifficultySelector from './components/DifficultySelector.svelte';
  import ScoreDisplay from './components/ScoreDisplay.svelte';
  import GameoverAlert from './components/GameoverAlert.svelte';
  import { GameStatus } from './types/gameStatus.enum';

  let difficulty = localStore<DifficultyType>('difficulty', DIFFICULTY_LEVELS[1]);
  let score = 0;
  let cards = getCards($difficulty.numCards);
  let gameStatus: GameStatus = GameStatus.PENDING;

  function getCards(numCards: number) {
    return shuffle(DECK)
      .slice(0, numCards)
      .map((card) => {
        return { ...card, clicked: false };
      });
  }

  const resetGame = () => {
    cards = getCards($difficulty.numCards);
    score = 0;
    gameStatus = GameStatus.PENDING;
  };

  const handleClickCard = (cardId: number) => {
    const i = cards.findIndex((c) => c.id === cardId);
    if (!cards[i].clicked) {
      cards[i] = { ...cards[i], clicked: true };
      ++score;
      if (score === cards.length) {
        gameStatus = GameStatus.WIN;
        return;
      }
      cards = shuffle(cards);
    } else {
      gameStatus = GameStatus.LOSE;
    }
  };

  const handleDifficultyChange = (newDifficulty: DifficultyType) => {
    $difficulty = newDifficulty;
    resetGame();
  };
</script>

<main>
  <div class="heading">
    <h1>Memory Card Game</h1>
    <p>Click a card to start the game. The game is over if you click a card more than once!</p>
    <ScoreDisplay {score} />
  </div>
  <DifficultySelector
    currDifficulty={$difficulty}
    on:change={(e) => {
      handleDifficultyChange(e.detail);
    }}
  />
  <Cards {cards} on:click={(e) => handleClickCard(e.detail)} />
  <GameoverAlert
    {gameStatus}
    scoreStatus={`${score} / ${$difficulty.numCards}`}
    on:dismiss={() => resetGame()}
  />
</main>

<style>
  .heading {
    padding: 20px;
  }
</style>
