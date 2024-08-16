import { useEffect } from "react";
import { BlockText, ChallengeContainer, StyledButton } from "../App.style";
import Challenge from "../components/Challenge/Challenge";
import useFetch from "../hooks/useFetch";
import usePageBottom from "../hooks/usePageBottom";
import useWindowDimensions from "../hooks/useWindowDimensions";

const CustomHooksPage = () => {
    const {isPageBottom} = usePageBottom();
    const {width, height} = useWindowDimensions();
    const {data, refreshData} = useFetch();

    useEffect( () => {
        refreshData();
    }, []);
    
    return (
        <div>
            <Challenge title={"React Challenge #1 - usePageBottom"}>
                <ChallengeContainer>
                    <BlockText>Are we at the bottom of the page? {isPageBottom? "YES" : "NO"}</BlockText>
                </ChallengeContainer>
            </Challenge>
            <Challenge title={"React Challenge #2 - useWindowDimensions"}>
                <ChallengeContainer>
                    <BlockText> Page Dimensions </BlockText>
                    <BlockText> Width: {width} px</BlockText>
                    <BlockText> Height: {height} px</BlockText>
                </ChallengeContainer>
            </Challenge>
            <Challenge title={"React Challenge #3 - useFetch"}>
                <ChallengeContainer>
                    <BlockText> Kanye West </BlockText>
                    <blockquote> " {data} "</blockquote>
                    <StyledButton onClick={refreshData}> Refresh </StyledButton>
                </ChallengeContainer>
            </Challenge>
        </div>
    );
}

export default CustomHooksPage;