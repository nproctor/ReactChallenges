import {useState, useRef, MutableRefObject} from 'react';

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
            <h3>React Challenge #2 - Timer</h3>
            <h1>Timer</h1>
            <p>{Math.floor(seconds/60)} mins {seconds%60} seconds</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={() => setSeconds(0)}>Reset</button>
        </div>
    )
}

export default Timer;