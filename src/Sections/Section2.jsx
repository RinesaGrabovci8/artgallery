import React from 'react'
import SectionBreaker from '../Components/SectionBreaker'
import CustomContainer from '../Components/CustomContainer'
import { Grid } from '@mui/material'
import Title from '../Components/Title'
import Desc from '../Components/Desc'
import { ReactComponent as Pics } from '../Assets/grouppics.svg'

const Section2 = () => {
    return (
        <SectionBreaker>
            <CustomContainer>
                <Grid container rowGap={6}>
                    <Grid item xs={12}>
                        <Title title={'A unique journey through the world of art where you can enjoy a variety of artistic works and discover new creative horizons.'} />
                    </Grid>
                    <Grid item xs>
                        <Grid container alignItems={'center'} justifyContent={'center'}  columnGap={3}>
                            <Grid item xs={"auto"}>
                                    <Desc desc={"Enter the realm of art where the mundane transcends into the extraordinary and the ordinary becomes a canvas for boundless imagination. Our gallery is a sanctuary where colors dance, shapes speak, and emotions flow freely. Each stroke of the brush, each chisel mark, is a testament to the human spirit's infinite capacity to create, to express, and to provoke thought. From the whispers of classical elegance to the bold declarations of contemporary visionaries."} />                            </Grid>
                            <Grid item xs={"auto"} >
                                <Pics />
                            </Grid>
                            <Grid item xs={"auto"} >
                                <Desc desc={"Enter the realm of art where the mundane transcends into the extraordinary and the ordinary becomes a canvas for boundless imagination. Our gallery is a sanctuary where colors dance, shapes speak, and emotions flow freely. Each stroke of the brush, each chisel mark, is a testament to the human spirit's infinite capacity to create, to express, and to provoke thought. From the whispers of classical elegance to the bold declarations of contemporary visionaries."} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </CustomContainer>
        </SectionBreaker>
    )
}

export default Section2