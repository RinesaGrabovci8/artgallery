import React from 'react'
import styled from 'styled-components'

const DescText = styled.div`
    font-size:20px;
    text-align:center;
    width:100%;
    max-width:250px;
`

const Desc = ({desc}) => {
  return (
    <DescText>{desc}</DescText>
  )
}

export default Desc