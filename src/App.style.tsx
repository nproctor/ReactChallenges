import styled from "styled-components"

export const AppContainer = styled.div`
    color: var(--color-on-surface);
    display: block;
    margin: 0;
    padding: 10px;
`

export const ChallengeContainer = styled.div`
    margin-bottom: 10px;
`

export const ChallengeTitle = styled.div`
    display: block;
    padding: 5px;
    font-weight: 500;
    margin: 0;
`

export const ChallengeContentContainer = styled.div`
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    box-shadow: 0px 0px 10px -5px;
    border-radius: 10px;
    padding: 10px;
`

export const StyledButton = styled.button`
    margin: 2px;
    padding: 3px;
    background-color: var(--color-button);
    border: 2px outset var(--color-button);
    border-radius: 3px; 

    &:hover {
        background-color: var(--color-button-hover);
    }

    &:active {
        background-color: var(--color-button-active);
}
`

export const BlockText = styled.p`
    margin: 5px 0 5px 0;
`