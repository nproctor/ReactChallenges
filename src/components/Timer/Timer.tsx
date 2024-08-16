import {useState, useRef, MutableRefObject} from 'react';
import { ChallengeContainer, ChallengeContentContainer, ChallengeTitle, StyledButton } from '../../App.style';

const Timer = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const interval = useRef<NodeJS.Timer | NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (interval.current)
            return;
        interval.current = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
    }

    const stopTimer = () => {
        if (interval.current){
            clearInterval(interval.current);
        interval.current = null;
        }
    }

    return (
        <div>
            <h1>Timer</h1>
            <p>{Math.floor(seconds/60)} mins {seconds%60} seconds</p>
            <StyledButton onClick={startTimer}>Start</StyledButton>
            <StyledButton onClick={stopTimer}>Stop</StyledButton>
            <StyledButton onClick={() => setSeconds(0)}>Reset</StyledButton>
        </div>
    )
}

export default Timer;