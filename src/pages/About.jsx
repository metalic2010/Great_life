import React from 'react';
import styled from 'styled-components';

const MyLink = styled.a `
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
`

const MyImg = styled.img `
    margin: 5px;
`

const AboutBlock = styled.div `
    max-width: 400px;
`

const About = () => {
    return (
        <AboutBlock>
            <h1>О нас</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
            <div>
                <MyLink href="https://vk.com/horosheeryadom" target="_blank">
                    <MyImg src='./images/About/vk_icon.svg' alt="pic_vk" />
                    @horosheeryadom
                </MyLink>
            </div>
        </AboutBlock>
    );
};

export default About;