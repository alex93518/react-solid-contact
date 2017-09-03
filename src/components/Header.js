import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    /* Layout */
	height: 4rem;
	background: ${oc.teal[6]};
    border-bottom: 1px solid ${oc.teal[8]};
    /* Font setting */
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    /* Align */
    display: flex;
    align-items: center; /* 세로 정렬 */
    justify-content: center; /* 가로 정렬 */
`;

const Header = () => (
    <Wrapper>
        CONTACT
    </Wrapper>
);

export default Header;