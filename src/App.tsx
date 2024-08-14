import './App.css';
import ProgressBar from './ProgressBar';
import ShowHideTitle from './ShowHideTitle';
import SubmitFormData from './SubmitFormData';
import Timer from './Timer';
import ToDoList from './ToDoList';

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
