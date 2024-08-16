
import {useState} from 'react';
import { ChallengeContainer, ChallengeContentContainer, ChallengeTitle, StyledButton } from '../../App.style';


const ShowHideTitle = () => {
    const [hidden, setHidden] = useState(false);
    return (
        <div>
            <h1 hidden={hidden}>Title</h1>
            <StyledButton onClick={() => setHidden(hidden => !hidden)}>Toggle Title</StyledButton>
        </div>
    )
};

export default ShowHideTitle;