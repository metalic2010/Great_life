import React from 'react';
import { useDispatch } from 'react-redux';
import { setStateModal } from '../../store/modalSlice';
import MyJumpButton from '../UI/Button/MyJumpButton';
import MySearchInput from '../UI/Input/MySearchInput';
import styled from 'styled-components'


const MyHeaderRightBlock = styled.div`
    width: 100%;
    height: 100%;
    max-height: 80px;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
`

const HeaderRightBlock = () => {
    const modalDispatch = useDispatch();
    const setModalActive = () => modalDispatch(setStateModal());

    return (
        <MyHeaderRightBlock>
            <MySearchInput 
                border="1px solid #2E1E1E"
                font_size="15px"
                height="5px"
                placeholder="Введите свой запрос..."
            />
            <MyJumpButton
                border="1px solid #2E1E1E"
                font_size="15px"
                height="5px"
                onClick={() => setModalActive()}
            >
                О нас
            </MyJumpButton>
        </MyHeaderRightBlock>
    );
}

export default HeaderRightBlock;