import {Box, Button, Container, IconButton, Typography, useMediaQuery} from "@mui/material";
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
            <CssBaseline />

            <Container maxWidth="lg" component={"section"} alignContent={"center"}>
                <Box display={"flex"} position={"absolute"} top={0} right={0}>
                    <IconButton onClick={() => setMode((current) => (current === 'light' ? 'dark' : 'light'))}>
                        <ContrastIcon></ContrastIcon>
                    </IconButton>
                </Box>
                <Box height={"100vh"} alignContent={"center"}>
                    <Typography variant={"h2"}>Hi, my name is <span style={{fontWeight: "bold"}}>André João</span></Typography>
                    <Typography variant={"h2"}>I'm a Web Developer <span style={{fontSize: 14}}>or try to.</span></Typography>
                </Box>
            </Container>

            <Container component={"section"}>
                <Box height={"100vh"} alignContent={"center"}>
                    <Typography variant={"h3"} >Resume</Typography>
                    <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Box>
            </Container>

        </ThemeProvider>
    )
}

export default App
