import {Box, Button, Container, Divider, Fab, Grid, Icon, IconButton, Typography, useMediaQuery} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "@fontsource/montserrat"
import "./App.css"
import {useState} from "react";

import ContrastIcon from '@mui/icons-material/Contrast';

import "./static/css/water.css"

//TODO: create a useContext for the themes

function App() {
    const [mode, setMode] = useState('light');

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
        // outlineDark: {
        //     outline: "1px solid white",
        //     outlineOffset: "-16px",
        // },
        // outlineLight: {
        //     outline: "1px solid #121212",
        //     outlineOffset: "-16px",
        // }
    });



    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />

            {/* Page Border */}
            {/*<Box sx={mode === 'light' ? Theme.outlineLight : Theme.outlineDark}
                 zIndex={1000}
                 position={"fixed"} top={0} bottom={0} right={0} left={0}
                 overflow={"hidden"}
                 border={16}
                 borderColor={mode === 'light' ? "white" : "#121212"}
            />*/}

            {/* Button toggle light/dark mode */}
            <Box position={"fixed"} bottom={20} right={20} zIndex={1001}>
                <IconButton onClick={() => setMode((current) => (current === 'light' ? 'dark' : 'light'))}>
                    <ContrastIcon/>
                </IconButton>
            </Box>

            <Box component={"section"} height={"100vh"} alignContent={"center"}>
                <Container maxWidth="lg" position={"relative"}>

                    <Typography variant={"h2"}>Hi, my name is <span style={{fontWeight: "bold", color: "#0392EA"}}>André João</span></Typography>
                    <Typography variant={"h2"}>I'm a Web Developer </Typography> {/*<span
                        style={{fontSize: 14}}>or try to.</span>*/}

                    {/*<Box position={"absolute"} bottom={0} left={0} right={0}>
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28"
                             preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave"
                                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.1"/>
                                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.3)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.5)"/>
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,1)"/>
                            </g>
                        </svg>
                    </Box>*/}
                </Container>
            </Box>

            <Box component={"section"} sx={{backgroundColor: "#f1f1f1", clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 90%)"}}>
                <Container id={"about-section"} maxWidth={"lg"}>
                    <Grid position={"relative"} spacing={5} container minHeight={"500px"} pt={"5rem"} pb={"10rem"} alignItems={"start"}>
                        <Grid item xs={12}>
                            <Typography className={"section-title"} variant={"h3"} textAlign={"center"}>About</Typography>
                        </Grid>
                        {/*<Divider orientation="vertical" flexItem />*/}
                        <Grid item xs={12} md={6}>
                            <Box component={"img"} src={"https://placehold.co/300x400"}
                                 sx={{
                                     width: "100%",
                                     /*maxHeight: { xs: 233, md: 167 },
                                     maxWidth: { xs: 350, md: 350 },*/
                                 }}>
                            </Box>
                        </Grid>
                        <Grid position={"relative"} item xs={12} md={6}>
                            <Typography p={5} bgcolor={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/*<Container component={"section"}>
                <Grid container mt={0} p={5} height={"100vh"}>
                    <Grid xs={2} alignContent={"start"}>
                        <Typography variant={"h3"} style={{writingMode: "vertical-lr"}} position={"sticky"} top={30}>Resume</Typography>
                    </Grid>
                    <Grid xs={10} alignContent={"start"}>
                        <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Grid>
                </Grid>
            </Container>

            <Container component={"section"}>
                <Grid container mt={0} p={5} height={"100vh"}>
                    <Grid xs={2} alignContent={"start"}>
                        <Typography variant={"h3"} style={{writingMode: "vertical-lr"}} position={"sticky"} top={30}>Projects</Typography>
                    </Grid>
                    <Grid xs={10} alignContent={"start"}>
                        <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Grid>
                </Grid>
            </Container>*/}
            {/*<Box id={"PageWrapper"} sx={{margin: "16px"}}>
            </Box>*/}

            <Box component={"section"} sx={{backgroundColor: "#f1f1f1", clipPath: "polygon(100% 0, 0% 10%, 0 100%, 100% 100%)"}}>
                <Container id={"about-section"} maxWidth={"lg"}>
                    <Grid position={"relative"} spacing={5} container minHeight={"500px"} pt={"10rem"} pb={"5rem"} alignItems={"start"}>
                        <Grid item xs={12}>
                            <Typography className={"section-title"} variant={"h3"} textAlign={"center"}>Footer</Typography>
                        </Grid>
                        {/*<Divider orientation="vertical" flexItem />*/}
                        <Grid item xs={12} md={4}>
                            link
                        </Grid>
                        <Grid item xs={12} md={4}>
                            link
                        </Grid>
                        <Grid item xs={12} md={4}>
                            link
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default App
