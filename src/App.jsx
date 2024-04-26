import {Box, Button, Container, Fab, Grid, Icon, IconButton, Typography, useMediaQuery} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "@fontsource/montserrat"
import "./App.css"
import {useState} from "react";

import ContrastIcon from '@mui/icons-material/Contrast';

import "./static/css/water.css"

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
        outlineDark: {
            outline: "1px solid white",
            outlineOffset: "-16px",
        },
        outlineLight: {
            outline: "1px solid #121212",
            outlineOffset: "-16px",
        }
    });



    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />

            <Box sx={mode === 'light' ? Theme.outlineLight : Theme.outlineDark}
                 zIndex={9998}
                 position={"fixed"} top={0} bottom={0} right={0} left={0}
                 overflow={"hidden"}
                 border={16}
                 borderColor={mode === 'light' ? "white" : "#121212"}
            />

            <Box sx={{margin: "16px"}}>

                {/* Button toggle light/dark mode */}
                <Box position={"fixed"} bottom={20} right={20} zIndex={9999}>
                    <IconButton onClick={() => setMode((current) => (current === 'light' ? 'dark' : 'light'))}>
                        <ContrastIcon/>
                    </IconButton>
                </Box>

                <Container maxWidth="lg" component={"main"} alignContent={"center"} position={"relative"}>
                    <Box height={"100vh"} alignContent={"center"}>
                        <Typography variant={"h2"}>Hi, my name is <span style={{fontWeight: "bold", color: "#0392EA"}}>André João</span></Typography>
                        <Typography variant={"h2"}>I'm a Web Developer <span style={{fontSize: 14}}>or try to.</span></Typography>
                    </Box>
                    <Box position={"absolute"} bottom={0} left={0} right={0}>
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
                                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
                            </g>
                        </svg>
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

                <Grid container mt={0} sx={{backgroundColor: "#435722",clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)"}}>
                    <Grid xs={2} alignContent={"start"} p={5}>
                        <Typography variant={"h3"} style={{writingMode: "vertical-lr"}} position={"sticky"} top={30}>About</Typography>
                    </Grid>
                    <Grid xs={10} alignContent={"start"} p={5}>
                        <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Grid>
                </Grid>

                <Grid container mt={0}>
                    <Grid xs={2} alignContent={"start"} p={5}>
                        <Typography variant={"h3"} style={{writingMode: "vertical-lr"}} position={"sticky"} top={30}>Resume</Typography>
                    </Grid>
                    <Grid xs={10} alignContent={"start"} p={5}>
                        <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Grid>
                </Grid>

                <Grid container mt={0}>
                    <Grid xs={2} alignContent={"start"} p={5}>
                        <Typography variant={"h3"} style={{writingMode: "vertical-lr"}} position={"sticky"} top={30}>Projects</Typography>
                    </Grid>
                    <Grid xs={10} alignContent={"start"} p={5}>
                        <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default App
