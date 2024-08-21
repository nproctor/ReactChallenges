import { BlockText, ChallengeContainer } from "../App.style";
import Challenge from "../components/Challenge/Challenge";
import TicTacToe from "../components/TicTacToe/TicTacToe";

const GamesPage = () => {
    return (
        <div>
            <Challenge title={"Challenge #1 - Tic Tac Toe"}>
            <ChallengeContainer>
                <TicTacToe size={3}/>
            </ChallengeContainer>
        </Challenge>
        </div>
    )
}

export default GamesPage;