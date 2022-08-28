import './App.css';
import { Planner } from './Planner';
import image from './LongList.jpg';
import imageTwo from './Checklist.jpg';

function App() {
  return (
    <div className="App">
      <div className = "container">
        <img src ={ image } width = "200px" alt = "PlannerList"/>
      </div>
      <div className = "container">
        <h1>My plans for today</h1>
      </div>
      <Planner/>
      <div className = "container">
        <img src ={ imageTwo} width = "200px" alt = "CheckedList"/>
      </div>
      <h6 className="info">Images from https://www.freepik.com/author/flaticon</h6>
    </div>
  );
}

export default App;
