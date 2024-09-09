import { FaStar } from 'react-icons/fa';
import './App.css';
import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getInd) {
    setRating(getInd);
  }
  function handleMouseOver(getInd) {
    setHover(getInd);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  const numberOfStars = 10;
  return (
    <div className='starRating'>
      {[...Array(numberOfStars)].map((_, ind) => {
        ind += 1;
        return (
          <FaStar
            key={ind}
            onClick={() => handleClick(ind)}
            onMouseEnter={() => handleMouseOver(ind)}
            onMouseLeave={handleMouseLeave}
            size={40}
            className={ind <= (hover || rating) ? 'active' : 'inActive'}
          />
        );
      })}
    </div>
  );
}

export default App;
