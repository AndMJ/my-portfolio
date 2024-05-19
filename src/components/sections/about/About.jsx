import {Box, Container, Grid, Link, Typography} from "@mui/material";
import AboutPhoto from "../../../static/image/me.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const About = ({mode, setMode, Theme}) => {
    return(
        <>
            <Container id={"about"} maxWidth={"lg"}>
                <Grid position={"relative"} container spacing={5} marginTop={0} minHeight={"500px"} pt={"5rem"}
                      pb={"5rem"} alignItems={"center"}>
                    <Grid item xs={12} sx={{paddingTop: "0 !important"}}>
                        <Typography className={"section-title"} variant={"h3"} textAlign={"center"} color={"white"}>Sobre</Typography>
                    </Grid>

                    <Grid item xs={12} md={4} textAlign={"center"}>
                        <Box component={"img"} src={AboutPhoto} borderRadius={"50%"}
                             sx={{
                                 width: "264px",
                                 /*maxHeight: { xs: 233, md: 167 },
                                 maxWidth: { xs: 350, md: 350 },*/
                             }}>
                        </Box>
                    </Grid>

                    <Grid position={"relative"} item xs={12} md={8}>
                        <Grid container spacing={3}>
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
                                <Typography color={"white"} variant={"h6"} sx={{fontStyle: "italic"}}>Licenciatura em Engenharia informática</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"}>
                                    Para além do que abordei nos estudos, HTML, CSS, Javascript, PHP, etc, tenho
                                    vindo a aprender outras tecnologias de programação web, como:
                                    React.js, Node Express, Java Spring Boot, AppWrite; Para
                                    Frontend: Framework Bootstrap, React Material UI;
                                    <br/>
                                    <br/>
                                    <span style={{fontSize: "14px"}}> MVC (Model View Controller) | JetBrains Webstorm | Postman | Git </span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default About;