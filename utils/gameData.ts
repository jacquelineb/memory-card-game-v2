import type { CardType } from '../types/card.type';

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

const DECK: CardType[] = createDeck();

export { DECK };
