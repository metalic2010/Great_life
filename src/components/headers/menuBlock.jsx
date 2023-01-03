import React from 'react';
import { useDispatch } from 'react-redux';
import { handleClick } from '../../utils/handleClick';
import { setStateMenu } from '../../store/menuSlice';
import MyJumpButton from '../UI/Button/MyJumpButton';
import styled from 'styled-components';


const MyMenuBlock = styled.div`
    width: 70px;
    min-width: 70px;
    padding-right: 5px;
    height: 88px;
    left: 0px;
    top: 0px;
    background: rgba(255, 255, 255, 0.5);
`


const MenuBlock = () => {
    const menuDispatch = useDispatch();
    const setMenuActive = () => menuDispatch(setStateMenu());

    return (
        <MyMenuBlock>
            <MyJumpButton
                className="fa fa-bars"
                border_radius="0px"
                onClick={() => setMenuActive().payload}
            />
        </MyMenuBlock>
    );
}

export default MenuBlock;