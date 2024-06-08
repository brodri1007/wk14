import logo from './logo.svg';
import './App.css';
import Movies from './Movies';


const starsArr = [1, 2, 3, 4, 5];
const [rating, setRating] = useState(0);


function App() {
  return (
    <div className="App">    
     <Movies />
    </div>
  );
}

export default App;
