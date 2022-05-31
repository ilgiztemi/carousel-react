import './App.css';
import Slider from './components/slider';
import { Images } from "./components/images";



function App() {
  return (
    <div className="App">
      <Slider slides={Images} />
    </div>
  );
}

export default App;
