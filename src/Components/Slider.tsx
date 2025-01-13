import { useState } from 'react';
import RolexWhite from '../assets/Rolex.jpeg';
import RolexBlack from '../assets/RolexBlack.jpeg';
import Tudor from '../assets/Tudor.jpeg';

function Slider() {
  // Typ Watch
  type Watch = {
    brand: string;
    type: string;
    name: string;
    price: number;
    colour: string;
    image: string;
  };

  // Obiekty zegarków
  const watches: Watch[] = [
    {
      brand: 'Rolex',
      type: 'Explorer',
      name: 'White Rolex Arono',
      price: 60000,
      colour: 'white',
      image: RolexWhite,
    },
    {
      brand: 'Rolex',
      type: 'Diver',
      name: 'Rolex Diver',
      price: 70000,
      colour: 'black',
      image: RolexBlack,
    },
    {
      brand: 'Tudor',
      type: 'Diver',
      name: 'Tudor Dark Blue',
      price: 10000,
      colour: 'darkblue',
      image: Tudor,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Funkcja do przechodzenia na kolejny slajd
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % watches.length);
  };

  // Funkcja do przechodzenia na poprzedni slajd
  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + watches.length) % watches.length);
  };

  const currentWatch = watches[currentIndex];

  return (
    <>
      <h2>Slider Zegarków</h2>

      {/* Obraz */}
      <img
        src={currentWatch.image}
        alt={currentWatch.name}
        style={{ width: '600px', height: '600px', borderRadius: '10px' }}
      />

      {/* Informacje o zegarku */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3>{currentWatch.name}</h3>
        <p><strong>Marka:</strong> {currentWatch.brand}</p>
        <p><strong>Typ:</strong> {currentWatch.type}</p>
        <p><strong>Kolor:</strong> {currentWatch.colour}</p>
        <p><strong>Cena:</strong> {currentWatch.price} PLN</p>
      </div>

      {/* Nawigacja */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={prev}>← Poprzedni</button>
        <button onClick={next}>Następny →</button>
      </div>
    </>
  );
}

export default Slider;
