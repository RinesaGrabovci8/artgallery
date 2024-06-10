import React from 'react'
import SectionBreaker from '../Components/SectionBreaker'
import CustomContainer from '../Components/CustomContainer'
import { Grid } from '@mui/material'
import Title from '../Components/Title'

const Section3 = () => {
    return (
        <SectionBreaker>
            <CustomContainer>
                <Grid container>
                    <Grid item>
                        <Title title={"Master of ethereal landscapes, capturing nature's essence in strokes of brilliance"}/>
                    </Grid>
                </Grid>
            </CustomContainer>
        </SectionBreaker>
    )
}

export default Section3