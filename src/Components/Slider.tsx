import { useState } from 'react'
import RolexWhite from '../assets/Rolex.jpeg'
import RolexBlack from '../assets/RolexBlack.jpeg'
import Tudor from '../assets/Tudor.jpeg'


function Slider() {

const images = [
    RolexWhite,
    RolexBlack,
    Tudor
]

type Watch = {
  brand: string;
  type: string;
  name: string;
  price: number;
  colour: string;
  image: string;
}

const watchRolexWhite: Watch = {
  brand: 'Rolex',
  type: 'Explorer',
  name: 'White Rolex Arono',
  price: 60000,
  colour: 'white',
  image: RolexWhite
}

const watchRolexBlack: Watch = {
  brand: 'Rolex',
  type: 'Diver',
  name: 'Rolex Diver',
  price: 70000,
  colour: 'black',
  image: RolexBlack
}

const watchTudorBlue: Watch = {
  brand: 'Tudor',
  type: 'Diver',
  name: 'Tudor Dark Blue',
  price: 10000,
  colour: 'darkblue',
  image: Tudor
}

const [image, setImage ] = useState(0);

const next = () => {
    setImage((prevImage) => (prevImage + 1 + images.length) % images.length) 
    console.log(image)
}

const prev = () => {
    setImage((prevImage) => (prevImage - 1 + images.length) % images.length)
    console.log(image)
}

    return (
        <>
        <h2>Slider ze Zdjęciami</h2>
      
      {/* Obraz */}
      <img
        src={images[image]}
        alt={`Slide ${image + 1}`}
        style={{ width: '600px', height: '600px', borderRadius: '10px' }}
      />
      
      {/* Nawigacja */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={prev} >← Poprzedni</button>
        <button onClick={next} >Następny →</button>
      </div>
        </>
    )
}

export default Slider