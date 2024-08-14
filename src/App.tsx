import './App.css';
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
    </div>
  );
}

export default App;
