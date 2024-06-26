import "@fontsource/montserrat"

import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "./App.css"
import "./static/css/water.css"
import "./static/css/bubbles.css"

const Hero = React.lazy(() => import("./components/sections/hero/Hero.jsx"))
const About = React.lazy(() => import("./components/sections/about/About.jsx"))
const Resume = React.lazy(() => import("./components/sections/resume/Resume.jsx"))
const Projects = React.lazy(() => import("./components/sections/projects/Projects.jsx"))
const Footer = React.lazy(() => import("./components/sections/footer/Footer.jsx"))

function App() {
    const [mode, setMode] = useState('dark');

    const Theme = createTheme({
        palette: {
            mode,
            ...(mode === "light"
                ? { //light mode palette
                    primary: {
                        detail: "#0388da",
                        main: "#0388da",
                        dark: "#00223d",
                        translucid: "rgba(3,146,234,0.4)",
                    },
                    // background: {
                    //     default: "#87CEFA",
                    // }
                }
                : { //dark mode palette
                    primary: {
                        detail: "#0388da",
                        main: "#004b79",
                        dark: "#000c17",
                        translucid: "rgba(3,146,234,0.4)",
                    },
                    // background: {
                    //     default: "#121416",
                    // }
                }
            )
        },
        components: {
            MuiLink: {
                styleOverrides: {
                    root: ({ theme }) =>
                        theme.unstable_sx({
                            textDecoration: "none",
                            color: "#fff",
                            transition: "all .15s ease-in-out",
                            /*"&:hover" : {
                                //color: "#0392EA"
                            }*/
                        }),
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: ({ theme }) =>
                        theme.unstable_sx({
                            color: "#fff",
                        }),
                },
            },
            MuiButtonBase: {
                defaultProps: {
                    disableRipple: true,
                },
            },
        },
        typography: {
            fontFamily: [
                'Montserrat',
                'sans-serif',
            ].join(','),
            "h2": {
                fontWeight: "bold"
            },
            muted: {
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)"
            },
            h3:{
                fontSize: "2.5em",
                textTransform: "uppercase"
            }
        },
    });

    useEffect(() => { //dynamically change page favicon based on Theme mode
        document.querySelector("link[rel~='icon']").href = mode === "light" ? "/iconLight.ico" : "/iconDark.ico";
    },[mode])

    return (
        <>
            <ThemeProvider theme={Theme}>
                <CssBaseline enableColorScheme/>

                <Hero mode={mode} setMode={setMode} Theme={Theme}/>

                {/* Body */}
                <Box component={"section"} position={"relative"} overflow={"hidden"} sx={{backgroundImage: `linear-gradient(180deg,${Theme.palette.primary.main}, ${Theme.palette.primary.dark})`}}>
                    <Box id={"underwater-bubbles"}>
                        <div className="bubble bubble--1"></div>
                        <div className="bubble bubble--2"></div>
                        <div className="bubble bubble--3"></div>
                        <div className="bubble bubble--4"></div>
                        <div className="bubble bubble--5"></div>
                        <div className="bubble bubble--6"></div>
                        <div className="bubble bubble--7"></div>
                        <div className="bubble bubble--8"></div>
                        <div className="bubble bubble--9"></div>
                        <div className="bubble bubble--10"></div>
                        <div className="bubble bubble--11"></div>
                        <div className="bubble bubble--12"></div>
                    </Box>
                    <About mode={mode} setMode={setMode} Theme={Theme}/>
                    <Resume mode={mode} setMode={setMode} Theme={Theme}/>
                    <Projects mode={mode} setMode={setMode} Theme={Theme}/>
                    <Footer />
                </Box>

            </ThemeProvider>
        </>
    )
}

export default App
