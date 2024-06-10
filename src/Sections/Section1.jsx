import React from 'react'
import SectionBreaker from '../Components/SectionBreaker'
import CustomContainer from '../Components/CustomContainer'
import { Grid } from '@mui/material'
import BG from '../Assets/bgimg.svg'
import styled from 'styled-components'

const Title = styled.div`
    font-size:80px;
    font-weight:800;
    color:#fff;
`

const Section1 = () => {
    return (
        <SectionBreaker>
            <CustomContainer>
                <Grid container
                    style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                    justifyContent={'center'}
                    alignItems={"center"}
                    borderRadius={'30px'}
                    py={20}>
                    <Grid item>
                        <Title>DIVE INTO CREATIVITY</Title>
                    </Grid>
                </Grid>
            </CustomContainer>
        </SectionBreaker>
    )
}

export default Section1