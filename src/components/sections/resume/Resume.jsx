import {Box, Container, Grid, Link, Typography} from "@mui/material";
import React, {useRef} from "react";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

//TODO:
// fazer com que texto do body do card esteja em list(com os pontos);

const Resume = ({mode, setMode, Theme}) => {

    const Resume = useRef()
    const ResumeSection= useRef();

    useGSAP(
        () => {
            let Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: Resume.current,
                    start: "top bottom-=200px"
                    //markers: true,
                },
            })
            Timeline.from(Resume.current, {
                //yPercent: 1000,
                //ease: "elastic.out(1,0.9)",
                //duration: 2,

                opacity: 0,
                delay: 0.3,
                duration: 0.3,
            }).from(".resume-block",{
                yPercent: 100,
                ease: "elastic.out(1,0.8)",
                delay: 0.2,
                opacity: 0,
                duration: 2,
                stagger: 0.3
            })/*.from(".resume-block-title",{
                opacity: 0,
                delay: 0.3,
                xPercent: -100,
                stagger: 0.1,
                duration: 0.3,
            }).from(".resume-block-subtitle",{
                opacity: 0,
                stagger: 0.2,
            })

            gsap.from(".resume-block-text", {
                scrollTrigger: {
                    trigger: Resume.current,
                    start: "top bottom-=200px"
                },
                delay: 0.3,
                opacity: 0,
            })*/
        },
        {scope: ResumeSection.current}
    );

    return (
        <>
            <Container ref={ResumeSection} id={"resume"} maxWidth={"lg"}>
                <Grid position={"relative"} container spacing={5} marginTop={0} minHeight={"500px"} pt={"5rem"}
                      pb={"5rem"} alignItems={"start"} color={"white"}>
                    <Grid item xs={12} sx={{paddingTop: "0 !important"}}>
                        <Typography ref={Resume} className={"section-title"} variant={"h3"} textAlign={"center"}>Curriculum</Typography>
                    </Grid>

                    <Grid item xs={12} md={6} className={"resume-block"} sx={{flexShrink: "1 !important"}}>
                        <Typography className={"resume-block-title"} variant={"h5"}>Experiencia Profissional</Typography>
                        <Box className={"resume-block-title-ribbon"} borderLeft={"2px solid #0392EA"} pl={"16px"} position={"relative"}
                             sx={{
                                 "&:before": {
                                     display: "block",
                                     'content': '""',
                                     width: "16px",
                                     height: "16px",
                                     border: "2px solid #0392EA",
                                     borderRadius: "20%",
                                     position: "absolute",
                                     top: "8px",
                                     left: "-9px",
                                     backgroundColor: `${Theme.palette.background.default}`
                                 }
                             }}>
                            <Typography className={"resume-block-subtitle"} variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}>
                                <Link underline="hover" target={"_blank"} rel={"noreferrer noopener"} href={"https://www.apricot.ie/"}>Apricot.ie</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Irlanda</span>
                            </Typography>
                            <Typography variant={"subtitle1"} sx={{
                                fontWeight: "bold",
                                backgroundColor: `${Theme.palette.primary.translucid}`,
                                display: "inline",
                                padding: "3px 9px"
                            }}>18/08/2023 - 02/2024</Typography>

                            <Box className={"resume-block-text"}>
                                <Typography variant={"subtitle1"}>Programador web (Remote, Freelance)</Typography>
                                <Typography variant={"subtitle1"}>Construção de Frontends com base em designs feitos em Figma</Typography>
                            </Box>
                        </Box>

                        <Box borderLeft={"2px solid #0392EA"} pl={"16px"} position={"relative"}
                             sx={{
                                 "&:before": {
                                     display: "block",
                                     'content': '""',
                                     width: "16px",
                                     height: "16px",
                                     border: "2px solid #0392EA",
                                     borderRadius: "20%",
                                     position: "absolute",
                                     top: "8px",
                                     left: "-9px",
                                     backgroundColor: `${Theme.palette.background.default}`
                                 }
                             }}>
                            <Typography className={"resume-block-subtitle"} variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}>
                                <Link underline="hover" target={"_blank"} rel={"noreferrer noopener"} href={"https://strong-answer.com/"}>Strong Answer</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Algarve/Lagoa</span>
                            </Typography>
                            <Typography variant={"subtitle1"} sx={{
                                fontWeight: "bold",
                                backgroundColor: `${Theme.palette.primary.translucid}`,
                                display: "inline",
                                padding: "3px 9px"
                            }}>05/2019 - 07/2019</Typography>

                            <Box className={"resume-block-text"}>
                                <Typography variant={"subtitle1"}>Programador web (estágio escolar) - Algarve/Lagoa</Typography>
                                <Typography variant={"subtitle1"}>Aprendi a usar a framework MJML para a construção de emails responsivos e trabalhei com HTML, CSS e Javascript.</Typography>
                            </Box>
                        </Box>

                        <Box borderLeft={"2px solid #0392EA"} pl={"16px"} position={"relative"}
                             sx={{
                                 "&:before": {
                                     display: "block",
                                     'content': '""',
                                     width: "16px",
                                     height: "16px",
                                     border: "2px solid #0392EA",
                                     borderRadius: "20%",
                                     position: "absolute",
                                     top: "8px",
                                     left: "-9px",
                                     backgroundColor: `${Theme.palette.background.default}`
                                 }
                             }}>
                            <Typography className={"resume-block-subtitle"} variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}>
                                <Link underline="hover" target={"_blank"} rel={"noreferrer noopener"} href={"https://strong-answer.com/"}>Strong Answer</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Algarve/Lagoa</span>
                            </Typography>
                            <Typography variant={"subtitle1"} sx={{
                                fontWeight: "bold",
                                backgroundColor: `${Theme.palette.primary.translucid}`,
                                display: "inline",
                                padding: "3px 9px"
                            }}>05/2018 - 07/2018</Typography>

                            <Box className={"resume-block-text"}>
                                <Typography variant={"subtitle1"}>Programador web (estágio escolar) - Algarve/Lagoa</Typography>
                                <Typography variant={"subtitle1"}>Aprendi a usar linguagens Web como HTML e CSS, e um pouco de Javascript e PHP.</Typography>
                            </Box>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6} className={"resume-block"} sx={{flexShrink: "1 !important"}}>
                        <Typography className={"resume-block-title"} variant={"h5"}>Educação e Formação</Typography>
                        <Box borderLeft={"2px solid #0392EA"} pl={"16px"} position={"relative"}
                             sx={{
                                 "&:before": {
                                     display: "block",
                                     'content': '""',
                                     width: "16px",
                                     height: "16px",
                                     border: "2px solid #0392EA",
                                     borderRadius: "20%",
                                     position: "absolute",
                                     top: "8px",
                                     left: "-9px",
                                     backgroundColor: `${Theme.palette.background.default}`
                                 }
                             }}>
                            <Typography className={"resume-block-subtitle"} variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}>
                                <Link underline="hover" target={"_blank"} rel={"noreferrer noopener"} href={"https://www.ismat.pt"}>ISMAT</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Algarve/Portimão</span>
                            </Typography>
                            <Typography variant={"subtitle1"} sx={{
                                fontWeight: "bold",
                                backgroundColor: `${Theme.palette.primary.translucid}`,
                                display: "inline",
                                padding: "3px 9px"
                            }}>2019 - 2022</Typography>

                            <Box className={"resume-block-text"}>
                                <Typography variant={"subtitle1"}>Licenciatura em Engenharia Informática</Typography>
                            </Box>
                        </Box>

                        <Box borderLeft={"2px solid #0392EA"} pl={"16px"} position={"relative"}
                             sx={{
                                 "&:before": {
                                     display: "block",
                                     'content': '""',
                                     width: "16px",
                                     height: "16px",
                                     border: "2px solid #0392EA",
                                     borderRadius: "20%",
                                     position: "absolute",
                                     top: "8px",
                                     left: "-9px",
                                     backgroundColor: `${Theme.palette.background.default}`
                                 }
                             }}>
                            <Typography className={"resume-block-subtitle"} variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}>
                                <Link underline="hover" target={"_blank"} rel={"noreferrer noopener"} href={"https://www.aesilves.pt"}>Escola Secundária de Silves</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Algarve/Silves</span>
                            </Typography>
                            <Typography variant={"subtitle1"} sx={{
                                fontWeight: "bold",
                                backgroundColor: `${Theme.palette.primary.translucid}`,
                                display: "inline",
                                padding: "3px 9px"
                            }}>2016 - 2019</Typography>
                            <Box className={"resume-block-text"}>
                                <Typography variant={"subtitle1"}>Técnico de Gestão e Programação de Sistemas Informáticos</Typography>
                            </Box>
                        </Box>

                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default Resume