import Countdown from "../components/Countdown/Countdown";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ShowHideTitle from "../components/ShowHideTitle/ShowHideTitle";
import SubmitFormData from "../components/SubmitFormData/SubmitFormData";
import Timer from "../components/Timer/Timer";
import ToDoList from "../components/ToDoList/ToDoList";

const HooksPage = () => {
    return (
        <div>
            <ShowHideTitle />
            <Timer />
            <ToDoList />
            <ProgressBar />
            <SubmitFormData />
            <Countdown />
        </div>
    );
}

export default HooksPage;