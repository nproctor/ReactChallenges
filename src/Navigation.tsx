import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HooksPage from './pages/HooksPage';
import NotFoundPage from './pages/NotFoundPage';
import { StyledNavLink, StyledNav } from './Navigation.style';
import CustomHooksPage from './pages/CustomHooksPage';
const Navigation = () => {
    return (
        <BrowserRouter>
            <StyledNav>
                <StyledNavLink to=""> Home </StyledNavLink>
                <StyledNavLink to="hooks"> Hooks Challenges </StyledNavLink>
                <StyledNavLink to="customhooks"> Custom Hooks Challenges </StyledNavLink>
            </StyledNav>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/hooks" element={<HooksPage/>} />
                <Route path="/customhooks" element={<CustomHooksPage/>} />
                <Route path="/*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation;