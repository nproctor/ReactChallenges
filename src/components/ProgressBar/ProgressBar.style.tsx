import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    background-color: gray;
    width: 300px;
    border-radius: 30px;
    overflow: hidden;
    height: 30px;
`
export const ProgressBarProgress = styled.div<{$percent: number}>`
    background: linear-gradient(90deg, pink 0%, orange 100%);
    width: ${props => props.$percent ? `${props.$percent}%` : 0};
    height: 100%;
    transition: 0.5s width;
    border-radius: inherit;
`

ProgressBarProgress.defaultProps = {
    $percent: 0
}

export const ProgressBarTextContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    min-width: 40px;
`