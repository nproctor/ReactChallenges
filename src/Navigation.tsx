import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HooksPage from './pages/HooksPage';
import RouterPage from './pages/RouterPage';
import { StyledNavLink, StyledNav } from './Navigation.style';
const Navigation = () => {
    return (
        <BrowserRouter>
            <StyledNav>
                <StyledNavLink to=""> Home </StyledNavLink>
                <StyledNavLink to="hooks"> Hooks Challenges </StyledNavLink>
                <StyledNavLink to="router"> Router Challenges </StyledNavLink>
            </StyledNav>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/hooks" element={<HooksPage/>} />
                <Route path="/router" element={<RouterPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation;