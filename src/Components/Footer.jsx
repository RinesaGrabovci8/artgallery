import React from 'react'
import SectionBreaker from './SectionBreaker'
import CustomContainer from './CustomContainer'
import { Grid } from '@mui/material'
import { ReactComponent as Logo } from '../Assets/logo.svg'
import { ReactComponent as Ig } from '../Assets/ig.svg'
import { ReactComponent as Fb } from '../Assets/fb.svg'
import { ReactComponent as Tw } from '../Assets/tw.svg'
import styled from 'styled-components'


const Links = styled.div`
    font-size:14px;
    width:100%;
`

const Input = styled.input`
    padding:10px;
    border-radius:20px;
    background-color:#000;
    color:#fff;
    text-indent:5px;
    width:100%;
    max-width:358px;
    font-weight:500;
    font-size:10px;

    &::placeholder {
        color: #fff; 
    }
`

const Footer = () => {
    return (
        <SectionBreaker>
            <Grid container flexDirection={'column'} backgroundColor={'#fff'} justifyContent={'center'} py={5}>
                <CustomContainer>
                    <Grid item>
                        <Logo />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container width={'100%'} justifyContent={'space-around'} pt={3}>
                            <Grid item >
                                <Grid container rowGap={1} flexDirection={'column'} textAlign={'left'}>
                                    <Grid item>
                                        <Links>Home</Links>
                                    </Grid>
                                    <Grid item>
                                        <Links>collection</Links>
                                    </Grid>
                                    <Grid item>
                                        <Links>shop</Links>
                                    </Grid>
                                    <Grid item >
                                        <Links>About</Links>
                                    </Grid>
                                    <Grid item>
                                        <Links>log in</Links>
                                    </Grid>
                                    <Grid item>
                                        <Links>sign up</Links>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid container rowGap={3} flexDirection={'column'} textAlign={'left'}>
                                    <Grid item >
                                        <Links>Get a newsletter</Links>
                                        <Input placeholder='ENTER EMAIL...' />
                                    </Grid>

                                    <Grid item >
                                        <Links>Follow us</Links>
                                        <Grid container pt={1} columnGap={2}>
                                            <Grid item>
                                                <Ig />
                                            </Grid>
                                            <Grid item>
                                                <Fb />
                                            </Grid>
                                            <Grid item>
                                                <Tw />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CustomContainer>


            </Grid>
        </SectionBreaker>
    )
}

export default Footer