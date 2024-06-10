import React from 'react'
import SectionBreaker from '../Components/SectionBreaker'
import CustomContainer from '../Components/CustomContainer'
import { Grid } from '@mui/material'
import Title from '../Components/Title'
import { ReactComponent as Pic1 } from '../Assets/gallery1.svg'
import { ReactComponent as Pic2 } from '../Assets/gallery2.svg'
import { ReactComponent as Pic3 } from '../Assets/gallery3.svg'
import { ReactComponent as Pic4 } from '../Assets/gallery4.svg'

const Section4 = () => {
    return (
        <SectionBreaker>
            <CustomContainer>
                <Grid container rowGap={6}>
                    <Grid item xs={12}>
                        <Title title={"Discover a sanctuary of creativity where art breathes life into every corner, inviting you to explore, to wonder, and to be inspired."} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent={"center"} columnGap={3} >
                            <Grid item>
                                <Pic1 />
                            </Grid>
                            <Grid item>
                                <Pic2 />
                            </Grid>
                            <Grid item>
                                <Pic3 />
                            </Grid>
                            <Grid item>
                                <Pic4 />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CustomContainer>
        </SectionBreaker>
    )
}

export default Section4