import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0px 0px 10px -2px #ffffff;
    background: #33333333 ;
    border-radius: 5px;
    padding: 10px;
    margin: 0px 5px 5px 5px;
    flex: 1 1;
    color: white;
    text-align: center;

    &:hover {
        background-color: #ffffff33;
    }

    &:active {
        background-color: #ffffff55;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
`;