import {Box, Chip, Container, Grid, Link, Typography} from "@mui/material";
import AboutPhoto from "../../../static/image/me.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import React, {useRef} from "react";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = ({mode, setMode, Theme}) => {

    const About = useRef()
    const AboutSection = useRef()
    const sectionImage= useRef();
    const sectionLinks= useRef();
    const sectionParagraph= useRef();
    const sectionSubtitle= useRef();

    useGSAP(
        () => {
            let Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: About.current,
                    //markers: true,
                },
            })
            Timeline.from(About.current, {
                //yPercent: 1000,
                //ease: "elastic.out(1,0.9)",
                //duration: 2,

                opacity: 0,
                delay: 0.3,
                duration: 0.3,
            }).from(".icon-link",{
                opacity: 0,
                xPercent: -100,
                stagger: 0.1,
                duration: 0.3,
            }).from([sectionSubtitle.current, sectionParagraph.current],{
                opacity: 0,
                stagger: 0.3
            }).from(".section-footer-chips",{
                opacity: 0,
                stagger: 0.1,
                duration: 0.3
            })

            gsap.from(sectionImage.current, {
                scrollTrigger: About.current,
                yPercent: 100,
                ease: "elastic.out(1,0.4)",
                delay: 0.3,
                opacity: 0,
                duration: 3,
            })
        },
        {scope: AboutSection.current}
    );

    return(
        <>
            <Container ref={AboutSection} id={"about"} maxWidth={"lg"}>
                <Grid position={"relative"} container spacing={5} marginTop={0} minHeight={"500px"} pt={"5rem"}
                      pb={"5rem"} alignItems={"center"}>
                    <Grid item xs={12} sx={{paddingTop: "0 !important"}}>
                        <Typography ref={About} className={"section-title"} variant={"h3"} textAlign={"center"} color={"white"}>Sobre</Typography>
                    </Grid>

                    <Grid item xs={12} md={4} textAlign={"center"}>
                        <Box ref={sectionImage} component={"img"} src={AboutPhoto} borderRadius={"50%"}
                             sx={{
                                 width: "264px",
                                 /*maxHeight: { xs: 233, md: 167 },
                                 maxWidth: { xs: 350, md: 350 },*/
                             }}>
                        </Box>
                    </Grid>

                    <Grid position={"relative"} item xs={12} md={8}>
                        <Grid container spacing={3} ref={sectionLinks}>
                            <Grid item xs={"auto"}>
                                <Box className={"icon-link"}>
                                    <Link display={"flex"} alignItems={"center"} target={"_blank"} rel={"noreferrer noopener"} href={"https://github.com/AndMJ"}>
                                        <Box className={"icon"} sx={{display: "inline-block"}}><GitHubIcon /></Box>
                                        <Typography pl={2} display={"inline-block"}>AndMJ</Typography>
                                    </Link>
                                </Box>
                            </Grid>

                            <Grid item xs={"auto"}>
                                <Box className={"icon-link"}>
                                    <Link display={"flex"} alignItems={"center"} target={"_blank"} rel={"noreferrer noopener"} href={"https://www.linkedin.com/in/andre-joao/"}>
                                        <Box className={"icon"} sx={{display: "inline-block"}}><LinkedInIcon/></Box>
                                        <Typography pl={2} display={"inline-block"}>andre-joao</Typography>
                                    </Link>
                                </Box>
                            </Grid>

                            <Grid item xs={"auto"}>
                                <Box className={"icon-link"}>
                                    <Link display={"flex"} alignItems={"center"} target={"_blank"} rel={"noreferrer noopener"} href={"mailto:andrejoao070@gmail.com"}>
                                        <Box className={"icon"} sx={{display: "inline-block"}}><SendIcon/></Box>
                                        <Typography pl={2} display={"inline-block"}>andrejoao070@gmail.com</Typography>
                                    </Link>
                                </Box>
                            </Grid>

                            <Grid item xs={"auto"}>
                                <Typography ref={sectionSubtitle} color={"white"} variant={"h6"} sx={{fontStyle: "italic"}}>Licenciatura em Engenharia Informática</Typography>
                            </Grid>

                            <Grid item xs={12} ref={sectionParagraph}>
                                <Typography color={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"}>
                                    Tenho um curso profissional em informática, onde abordei algumas áreas e linguagens como <Chip component={"span"} label="C" variant="filled" size="small"/>, <Chip component={"span"} label="C#" variant="filled" size="small"/> e <Chip component={"span"} label="SQL" variant="filled" size="small"/>. Também utilizei as linguagens Web <Chip component={"span"} label="HTML" variant="filled" size="small"/>, <Chip component={"span"} label="Javascript" variant="filled" size="small"/> e <Chip component={"span"} label="CSS" variant="filled" size="small"/>, e ainda <Chip component={"span"} label="PHP" variant="filled" size="small"/>.
                                </Typography>
                                <Typography color={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"} mt={1}>
                                    Depois segui para uma Licenciatura em Engenharia Informática onde aprofundei as várias áreas. Abordei linguagens como <Chip component={"span"} label="C" variant="filled" size="small"/>, <Chip component={"span"} label="Python" variant="filled" size="small"/>, <Chip component={"span"} label="Java" variant="filled" size="small"/>, <Chip component={"span"} label="SQL" variant="filled" size="small"/>, e frameworks/libraries como <Chip component={"span"} label="Flask" variant="filled" size="small"/>, <Chip component={"span"} label="JQuery" variant="filled" size="small"/> e <Chip component={"span"} label="Tree.js" variant="filled" size="small"/>.
                                </Typography>
                                <Typography color={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"} mt={1}>
                                    Para além dos estudos, tenho vindo a aprender outras tecnologias de programação Web, como: <Chip component={"span"} label="React.js" variant="filled" size="small"/>, <Chip component={"span"} label="Node Express" variant="filled" size="small"/>, <Chip component={"span"} label="Java Spring Boot" variant="filled" size="small"/>, <Chip component={"span"} label="AppWrite" variant="filled" size="small"/>, <Chip component={"span"} label="SQL" variant="filled" size="small"/>, <Chip component={"span"} label="React Material UI" variant="filled" size="small"/>, <Chip component={"span"} label="Bootstrap" variant="filled" size="small"/>.
                                </Typography>
                                <Typography color={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"} mt={1}>
                                    Nestes projetos que tenho feito, tento sempre implementar uma estrutura <Chip component={"span"} label="MVC" variant="filled" size="small"/> (Model View Controller).
                                </Typography>

                                <Grid container mt={2} spacing={1}>
                                    <Grid item xs={"auto"}>
                                        <Chip className={"section-footer-chips"} component={"span"} label="JetBrains Webstorm" variant="filled" size="small"/>
                                    </Grid>
                                    <Grid item xs={"auto"}>
                                        <Chip className={"section-footer-chips"} component={"span"} label="Postman" variant="filled" size="small"/>
                                    </Grid>
                                    <Grid item xs={"auto"}>
                                        <Chip className={"section-footer-chips"} component={"span"} label="Git" variant="filled" size="small"/>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default About;