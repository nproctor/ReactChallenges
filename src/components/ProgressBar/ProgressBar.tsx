import {useState, ChangeEvent} from 'react';
import { ChallengeContainer, ChallengeContentContainer, ChallengeTitle } from '../../App.style';
import { ProgressBarContainer, ProgressBarProgress, ProgressBarTextContainer } from './ProgressBar.style';

const ProgressBar = () => {
    const [width, setWidth] = useState<number>(0);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        if (val >= 0 && val <= 100){
            setWidth(val);
        }
    }
    return (
        <div>
            <ProgressBarContainer>
                <ProgressBarProgress $percent={width}>
                    <ProgressBarTextContainer>{width}%</ProgressBarTextContainer>
                </ProgressBarProgress>
            </ProgressBarContainer>
            <span>Input Percentage: 
                <input onChange={onChange} type="number"/>%
            </span>
        </div>
    )
}

export default ProgressBar;