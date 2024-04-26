import {Box, Button, Container, Fab, Grid, Icon, IconButton, Typography, useMediaQuery} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "@fontsource/montserrat"
import "./App.css"
import {useState} from "react";

import ContrastIcon from '@mui/icons-material/Contrast';

//TODO: create a useContext for the themes

function App() {
    const [mode, setMode] = useState('dark');

    const Theme = createTheme({
        palette: {
            mode,
        },
        typography: {
            fontFamily: [
                'Montserrat',
                'sans-serif',
            ].join(','),
        },
    });

    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />

            {/* Button toggle light/dark mode */}
            <Box position={"fixed"} bottom={10} right={10}>
                <IconButton onClick={() => setMode((current) => (current === 'light' ? 'dark' : 'light'))}>
                    <ContrastIcon></ContrastIcon>
                </IconButton>
            </Box>

            <Container maxWidth="lg" component={"main"} alignContent={"center"}>
                <Box height={"100vh"} alignContent={"center"}>
                    <Typography variant={"h2"}>Hi, my name is <span style={{fontWeight: "bold", color: "#0392EA"}}>André João</span></Typography>
                    <Typography variant={"h2"}>I'm a Web Developer <span style={{fontSize: 14}}>or try to.</span></Typography>
                </Box>
            </Container>

            {/*<Container component={"section"}>
                <Box height={"100vh"} display={"flex"}>
                    <Box alignContent={"center"} height={"100%"} style={{rotate: "-90deg"}}>
                        <Typography variant={"h3"} >Resume</Typography>
                    </Box>
                    <Box alignContent={"center"}>

                        <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Box>
                </Box>
            </Container>*/}

            <Grid container spacing={2} height={"100vh"} mt={0}>
                <Grid xs={2} alignContent={"start"} p={5}>
                    <Typography variant={"h3"} style={{writingMode: "vertical-lr"}} position={"sticky"} top={30}>About</Typography>
                </Grid>
                <Grid xs={10} alignContent={"start"} p={5}>
                    <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} height={"100vh"} mt={0}>
                <Grid xs={2} alignContent={"start"} p={5}>
                    <Typography variant={"h3"} style={{writingMode: "vertical-lr"}} position={"sticky"} top={30}>Resume</Typography>
                </Grid>
                <Grid xs={10} alignContent={"start"} p={5}>
                    <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} height={"100vh"} mt={0}>
                <Grid xs={2} alignContent={"start"} p={5}>
                    <Typography variant={"h3"} style={{writingMode: "vertical-lr"}} position={"sticky"} top={30}>Projects</Typography>
                </Grid>
                <Grid xs={10} alignContent={"start"} p={5}>
                    <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Grid>
            </Grid>

        </ThemeProvider>
    )
}

export default App
