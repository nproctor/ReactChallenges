import './App.css';
import Countdown from './components/Countdown/Countdown';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ShowHideTitle from './components/ShowHideTitle/ShowHideTitle';
import SubmitFormData from './components/SubmitFormData/SubmitFormData';
import Timer from './components/Timer/Timer';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <ShowHideTitle/>
      <Timer/>
      <ToDoList/>
      <ProgressBar/>
      <SubmitFormData/>
      <Countdown/>
    </div>
  );
}

export default App;
