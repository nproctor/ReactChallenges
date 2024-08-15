
import {useState} from 'react';
import { ChallengeContainer, ChallengeContentContainer, ChallengeTitle, StyledButton } from '../../App.style';


const ShowHideTitle = () => {
    const [hidden, setHidden] = useState(false);
    return (
        <ChallengeContainer>
        <ChallengeTitle>React Challenge #1 - Show/Hide Title</ChallengeTitle>
            <ChallengeContentContainer>
                <h1 hidden={hidden}>Title</h1>
                <StyledButton onClick={() => setHidden(hidden => !hidden)}>Toggle Title</StyledButton>
            </ChallengeContentContainer>
        </ChallengeContainer>)
}

export default ShowHideTitle;