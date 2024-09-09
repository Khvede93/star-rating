import { FaStar } from 'react-icons/fa';
import './App.css';
import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getI) {
    if (getI !== rating) {
      setRating(getI + 1);
    }
  }
  function handleMouseOver() {}
  function handleMouseLeave() {}

  console.log(rating);

  const numberOfStars = 10;
  return (
    <div className='star-rating'>
      {[...Array(numberOfStars)].map((_, i) => (
        <FaStar
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          size={40}
        />
      ))}
    </div>
  );
}

export default App;
