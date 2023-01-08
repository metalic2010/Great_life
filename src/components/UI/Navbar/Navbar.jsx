import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
    position: absolute;
    top: 0px;
    min-height: 100vh;
    height: ${({height}) => `${height}px` || '100vh'};
    width: 100%;
    z-index: 1;
    display: block;
    transition: all .4s;
`

const NavbarBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1000px;
    height: 100%;
`
const NavbarWorkBlock = styled.nav`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 100px 20px 0px 10px;
    max-width: 280px;
    height: 100%;
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

const MySubLink = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    margin: 10px 10px 10px 20px;
    font-size: 15px;
    color: #2E1E1E;
    font-weight: bold;
`

const MySubMenu = styled.div`
    display: block;
    transition: all .4s;
`

/**
 * 
 * @param {*} items - список меню
 * @param {*} subItems - вложенный список 
 * @param {*} visible - параметр для показа меню
 * @param {*} setVisible - функция для показа меню (смены состояния)
 * @returns возвращает jsx элемент для отрисовки на странице
 * @description navbar имеет всего 2 уровня и передаётся через 2 props
 */
const MyNavbar = ({ items, subItems, visible, setVisible }) => {
    const [subVisible, setSubVisible] = useState(false);
    const [height, setHeight] = useState(0);

    const SetVisibleMenu = (e, SubItem) => {
        if (SubItem) { setSubVisible(!subVisible) }
        if (!SubItem) { e.startPropagation() }
    }

    useEffect( () => { setHeight(document.documentElement.scrollHeight - 150) }, []);

    return (
        <Navbar
            height={height}
            onClick={() => setVisible()}
        >
            <NavbarBlock>
                <NavbarWorkBlock onClick={(e) => e.stopPropagation()}>
                    {
                        items.map((item) => (
                            <Fragment key={item.Id + 1}>
                                {
                                    (item.SubItem)
                                        ? <MyLink
                                            key={item.Id}
                                            onClick={(e) => SetVisibleMenu(e, item.SubItem)}
                                        >
                                            {item.Name}
                                        </MyLink>
                                        : <MyLink
                                            key={item.Id}
                                            to={item.Link}
                                            onClick={(e) => SetVisibleMenu(e, item.SubItem)}
                                        >
                                            {item.Name}
                                        </MyLink>
                                }
                                {
                                    item.SubItem && subVisible && <MySubMenu key={item.Id + 1}>
                                        {
                                            subItems
                                                .filter((subItem) => subItem.ParentId = item.Id)
                                                .map((subItem) => (
                                                    <MySubLink
                                                        key={subItem.Id}
                                                        to={subItem.Link}
                                                        onClick={(e) => SetVisibleMenu(e, !item.SubItem)}
                                                    >
                                                        {subItem.Name}
                                                    </MySubLink>
                                                ))
                                        }
                                    </MySubMenu>
                                }
                            </Fragment>
                        ))
                    }
                </NavbarWorkBlock>
            </NavbarBlock>
        </Navbar>
    )
}

export default MyNavbar;