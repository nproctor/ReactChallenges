import {useState, useEffect, useRef} from 'react';

const Countdown = () => {
    const [clicks, setClicks] = useState<number>(0);
    const [time, setTime] = useState<number>(10);
    const interval = useRef<NodeJS.Timeout | null>(null);

    useEffect( () => {
        if (time <= 0 && interval.current){
            clearInterval(interval.current);
            interval.current = null;
        }
    }, [time])

    useEffect( () => {
        return () => {if (interval.current) clearInterval(interval.current)};
    }, []);

    const onClick = () => {
        if (!interval.current && clicks == 0){
            interval.current = setInterval(() => setTime(time => time - 1), 1000);
        }
        if (interval.current){
            setClicks(clicks => clicks + 1);
        }
    }

    return (
        <div className="challenge">
            <span className="title"> React Challenge #6 - Countdown Timer </span>
            <div className="challenge-content">
                <p>Click as many times are you can before the timer stops! </p>

                <button className="countdown-button" onClick={onClick} >
                    {interval.current? 
                        <div>
                            <p>Clicks: </p> 
                            <h2>{clicks}</h2>
                    
                        </div>
                        :
                        <div>
                            <h2>Click to start!</h2>
                            <br></br>
                        </div>}
                    <p>Seconds Remaining:</p>
                    <h3>{time}</h3>
                </button>
            </div>
        </div>
    )
}

export default Countdown;