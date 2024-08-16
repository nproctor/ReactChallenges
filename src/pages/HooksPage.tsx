import Challenge from "../components/Challenge/Challenge";
import Countdown from "../components/Countdown/Countdown";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ShowHideTitle from "../components/ShowHideTitle/ShowHideTitle";
import SubmitFormData from "../components/SubmitFormData/SubmitFormData";
import Timer from "../components/Timer/Timer";
import ToDoList from "../components/ToDoList/ToDoList";
import usePageBottom from "../hooks/usePageBottom";

const HooksPage = () => {
    const {isPageBottom} = usePageBottom();
    return (
        <div>
            <Challenge title={"React Challenge #1 - Show/Hide Title"}>
                <ShowHideTitle />
            </Challenge>
            <Challenge title={"React Challenge #2 - Timer"}>
                <Timer />
            </Challenge>
            <Challenge title={"React Challenge #3 - ToDo List"}>
                <ToDoList />
            </Challenge>
            <Challenge title={"React Challenge #4 - ProgressBar"}>
                <ProgressBar />
            </Challenge>
            <Challenge title={"React Challenge #5 - SubmitFormData"}>
                <SubmitFormData />
            </Challenge>
            <Challenge title={"React Challenge #6 - Countdown Button"}>
                <Countdown />
            </Challenge>
        </div>
    );
}

export default HooksPage;