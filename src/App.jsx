import { FaStar } from 'react-icons/fa';
import './App.css';
import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getInd) {
    if (getInd !== rating) {
      setRating(getInd);
    }
  }
  function handleMouseOver(getInd) {
    if (getInd !== hover) {
      setHover(getInd);
    }
  }
  function handleMouseLeave(getInd) {
    setHover(0);
  }

  const numberOfStars = 10;
  return (
    <div className='star-rating'>
      {[...Array(numberOfStars)].map((_, ind) => {
        ind += 1;
        return (
          <FaStar
            key={ind}
            onClick={() => handleClick(ind)}
            onMouseEnter={() => handleMouseOver(ind)}
            onMouseLeave={() => handleMouseLeave(ind)}
            size={40}
            className={ind <= (rating || hover) ? 'active' : 'inActive'}
          />
        );
      })}
    </div>
  );
}

export default App;
