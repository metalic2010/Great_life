import React from 'react';
import styled from 'styled-components'

let h = "50px";

const MyFooters = styled.footer`
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: ${h};
    background: #242424;
    border-radius: 25px 25px 0px 0px;
    box-shadow: 0px 0px 10px 5px rgba(151, 150, 150, 0.25);
`

const MyFootersWorkBlockSite = styled.div`
    margin: 0 auto;
    height: ${h};
    width: 100vw;
    max-width: 1000px;
    display: flex;
    align-items: center;
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-size: 18px;
`

function FooterBlock() {
    return (
        <MyFooters>
            <MyFootersWorkBlockSite>
                Copyright 2023 © меню для сообщества “Отличная жизнь”
            </MyFootersWorkBlockSite>
        </MyFooters>
    );
}

export default FooterBlock;