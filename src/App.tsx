import './App.css';
import ProgressBar from './ProgressBar';
import ShowHideTitle from './ShowHideTitle';
import Timer from './Timer';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <ShowHideTitle/>
      <Timer/>
      <ToDoList/>
      <ProgressBar/>
    </div>
  );
}

export default App;
