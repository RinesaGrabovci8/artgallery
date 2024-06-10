import React from 'react'
import styled from 'styled-components'


const TitleText = styled.div`
    font-size:33px;
    font-weight:800;
    text-align:center;
    width:100%;
`
const Title = ({ title }) => {
    return (
        <TitleText>{title}</TitleText>
    )
}

export default Title