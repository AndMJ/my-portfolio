import {Box, Container, IconButton, Typography} from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";
import React, {useRef} from "react";

import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Hero = ({mode, setMode, Theme}) => {

    const heroText1 = useRef()
    const heroText2 = useRef()
    const waves = useRef()

    useGSAP(
        () => {
            let textTimeline = gsap.timeline()
            let wavesTimeline = gsap.timeline()

            textTimeline.from([heroText1.current, heroText2.current], {
                yPercent: 1000,
                ease: "elastic.out(1,0.9)",
                duration: 2,
                delay: 0.6,
                stagger: 0.3
            })

            wavesTimeline.from(waves.current, {
                yPercent: 100,
                ease: "power4.out",
                duration: 2,
                delay: 0.35
            })
        },
        {}
    );

    return (
        <>
            {/* Button toggle light/dark mode */}
            <Box position={"fixed"} bottom={20} right={20} zIndex={1001}>
                <IconButton onClick={() => setMode((current) => (current === 'light' ? 'dark' : 'light'))}>
                    <ContrastIcon/>
                </IconButton>
            </Box>

            {/* Header */}
            <Box component={"header"} height={"100vh"} alignContent={"center"} >
                <Container maxWidth="lg" position={"relative"}>
                    <Typography ref={heroText1} variant={"h2"} sx={{color: Theme.palette.primary.detail}}>André João</Typography>
                    <Typography ref={heroText2} variant={"h2"}>Desenvolvimento Web</Typography>

                    <Box position={"absolute"} bottom={0} left={0} right={0} ref={waves}>
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave"
                                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x="48" y="0" fill={Theme.palette.primary.main}
                                     opacity={0.2}/>
                                <use xlinkHref="#gentle-wave" x="48" y="3" fill={Theme.palette.primary.main}
                                     opacity={0.7}/>
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill={Theme.palette.primary.main}
                                     opacity={0.5}/>
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill={Theme.palette.primary.main}
                                     opacity={1}/>
                            </g>
                        </svg>
                    </Box>
                </Container>

            </Box>
        </>
    )
}

export default Hero