import { BlockText, ChallengeContainer } from "../App.style";
import Challenge from "../components/Challenge/Challenge";

const HomePage = () => {
    return (
        <Challenge title={"About React Challenges"}>
            <ChallengeContainer>
                <BlockText>
                    This page is a demonstration of my solutions for the <a href="https://reactchallenges.live/dashboard/router">React Challenges</a>.
                    The code for my solutions can be found on my <a href="https://github.com/nproctor/ReactChallenges">github</a>.
                </BlockText>
            </ChallengeContainer>
        </Challenge>
    )
}

export default HomePage;