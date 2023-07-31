import type { CardType } from '../types/card.type';
import type { DifficultyType } from '../types/difficulty.type';

function createDeck(): CardType[] {
  // https://github.com/vitejs/vite/discussions/12191
  const gallery = Object.values(
    import.meta.glob('../assets/cards/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })
  );

  const deck = gallery.map((imagePath, id) => {
    const card = {
      id,
      name: imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('.')),
      imgSrc: imagePath,
    };
    return card;
  });

  return deck;
}

const DIFFICULTY_LEVELS: DifficultyType[] = [
  { name: 'easy', numCards: 6 },
  { name: 'normal', numCards: 9 },
  { name: 'hard', numCards: 18 },
  { name: 'challenging', numCards: 21 },
];

const DECK: CardType[] = createDeck();

export { DECK, DIFFICULTY_LEVELS };
