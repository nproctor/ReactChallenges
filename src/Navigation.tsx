import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HooksPage from './pages/HooksPage';
import NotFoundPage from './pages/NotFoundPage';
import { StyledNavLink, StyledNav } from './Navigation.style';
import CustomHooksPage from './pages/CustomHooksPage';
import GamesPage from './pages/GamesPage';
const Navigation = () => {
    return (
        <BrowserRouter>
            <StyledNav>
                <StyledNavLink to=""> Home </StyledNavLink>
                <StyledNavLink to="hooks"> Hooks Challenges </StyledNavLink>
                <StyledNavLink to="customhooks"> Custom Hooks Challenges </StyledNavLink>
                <StyledNavLink to="games"> Mini Game Challenges </StyledNavLink>
            </StyledNav>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/hooks" element={<HooksPage/>} />
                <Route path="/customhooks" element={<CustomHooksPage/>} />
                <Route path="/games" element={<GamesPage/>} />
                <Route path="/*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation;