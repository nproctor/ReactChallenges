import {useState, ChangeEvent} from 'react';
import './ProgressBar.style.css';

const ProgressBar = () => {
    const [width, setWidth] = useState<number>(0);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        if (val >= 0 && val <= 100){
            setWidth(val);
        }
    }
    return (
        <div className='challenge'>
            <span className="title">React Challenge #4 - Progress Bar</span>
            <div className='challenge-content'>
                <p>Progress Bar</p>
                <div className="progress-bar-base">
                    <div className="progress-bar-progress" style={{width: `${width}%`}}>
                        <div>{width}%</div>
                    </div>
                </div>
                <span>Input Percentage: 
                    <input onChange={onChange} type="number"/>%
                </span>
            </div>
        </div>
    )
}

export default ProgressBar;