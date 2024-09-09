import { FaStar } from 'react-icons/fa';
import './App.css';

function App() {
  function handleClick() {}
  function handleMouseOver() {}
  function handleMouseLeave() {}

  const numberOfStars = 10;
  return (
    <div className='star-rating'>
      {[...Array(numberOfStars)].map((_, i) => (
        <FaStar
          key={i}
          onClick={handleClick}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          size={40}
        />
      ))}
    </div>
  );
}

export default App;
