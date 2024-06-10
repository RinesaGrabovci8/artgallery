import React from 'react'
import CustomContainer from './CustomContainer'
import { Grid } from '@mui/material'
import { ReactComponent as Logo } from '../Assets/logo.svg'
import styled from 'styled-components'

const Links = styled.div`
    font-size:14px;
`

const Navbar = () => {
    return (
        <Grid container  position={'fixed'} top={0} left={0} py={2} width={"100%"} justifyContent="center" backgroundColor={"#fff"}>
            <CustomContainer>
                <Grid container  columnGap={15} alignItems={'center'}  >
                    <Grid item>
                        <Links>Home</Links>
                    </Grid>
                    <Grid item >
                        <Links>Collection</Links>
                    </Grid>
                    <Grid item>
                        <Links>shop</Links>
                    </Grid>
                    <Grid item>
                        <Logo/>
                    </Grid>
                    <Grid item >
                        <Links>About us</Links>
                    </Grid>
                    <Grid item>
                        <Links>Log in</Links>
                    </Grid>
                    <Grid item>
                        <Links>Sign up</Links>
                    </Grid>
                </Grid>
            </CustomContainer>
        </Grid>

    )
}

export default Navbar