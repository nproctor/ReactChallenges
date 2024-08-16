import { ChallengeContainer, ChallengeContentContainer, ChallengeTitle } from "../../App.style";

const Challenge = (props: {title: string, children?: React.ReactNode}) => {
    return (
        <ChallengeContainer>
            <ChallengeTitle> {props.title}</ChallengeTitle>
            <ChallengeContentContainer>
                {props.children}
            </ChallengeContentContainer>
        </ChallengeContainer>
    )
}

export default Challenge;