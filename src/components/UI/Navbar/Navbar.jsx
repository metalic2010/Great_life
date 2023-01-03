import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
    position: absolute;
    top: 0px;
    min-height: 100vh;
    width: 100%;
    z-index: 1;
    display: ${({ active }) => active};
`

const NavbarBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1000px;
    height: 100vh;
`
const NavbarWorkBlock = styled.nav`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 100px 20px 0px 10px;
    max-width: 280px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 5px 10px rgba(151, 150, 150, 0.25);
`

const MyLink = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    margin: 10px;
    font-size: 20px;
    color: #2E1E1E;
    font-weight: bold;
`

const MyNavbar = ({ items, visible, setVisible }) => {
    return (
        <Navbar
            active={(visible) ? 'block' : 'none'}
            onClick={() => setVisible().payload}
        >
            <NavbarBlock>
                <NavbarWorkBlock onClick={(e) => e.stopPropagation()}>
                    {
                        items.map((item) => (
                            <MyLink
                                key={item.Id}
                                to={item.Link}
                            >
                                {item.Name}
                            </MyLink>
                        ))
                    }
                </NavbarWorkBlock>
            </NavbarBlock>
        </Navbar>
    )
}

export default MyNavbar;