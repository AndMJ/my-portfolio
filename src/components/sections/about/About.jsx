import {Box, Chip, Container, Grid, Link, Typography} from "@mui/material";
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
                                <Typography color={"white"} variant={"h6"} sx={{fontStyle: "italic"}}>Licenciatura em Engenharia Informática</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"}>
                                    Tenho um curso profissional em imformática, onde abordei algumas áreas e linguagens como <Chip label="C" variant="filled" size="small"/>, <Chip label="C#" variant="filled" size="small"/> e <Chip label="SQL" variant="filled" size="small"/>. Também utilizei as linguagens Web <Chip label="HTML" variant="filled" size="small"/>, <Chip label="Javascript" variant="filled" size="small"/> e <Chip label="CSS" variant="filled" size="small"/>, e ainda <Chip label="PHP" variant="filled" size="small"/>.
                                </Typography>
                                <Typography color={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"} mt={1}>
                                    Depois segui para uma Licenciatura em Engenharia Informática onde aprofundei as várias áreas. Abordei linguagens como <Chip label="C" variant="filled" size="small"/>, <Chip label="Python" variant="filled" size="small"/>, <Chip label="Java" variant="filled" size="small"/>, <Chip label="SQL" variant="filled" size="small"/>, e frameworks/libraries como <Chip label="Flask" variant="filled" size="small"/>, <Chip label="JQuery" variant="filled" size="small"/> e <Chip label="Tree.js" variant="filled" size="small"/>.
                                </Typography>
                                <Typography color={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"} mt={1}>
                                    Para além dos estudos, tenho vindo a aprender outras tecnologias de programação Web, como: <Chip label="React.js" variant="filled" size="small"/>, <Chip label="Node Express" variant="filled" size="small"/>, <Chip label="Java Spring Boot" variant="filled" size="small"/>, <Chip label="AppWrite" variant="filled" size="small"/>, <Chip label="SQL" variant="filled" size="small"/>, <Chip label="React Material UI" variant="filled" size="small"/>, <Chip label="Bootstrap" variant="filled" size="small"/>.
                                </Typography>
                                <Typography color={"white"} className={"section-body"} variant={"body1"} textAlign={"justify"} mt={1}>
                                    Nestes projetos que tenho feito, tento sempre implementar uma estrutura <Chip label="MVC" variant="filled" size="small"/> (Model View Controller).
                                </Typography>

                                <Grid container mt={2} spacing={1}>
                                    <Grid item xs={"auto"}>
                                        <Chip label="JetBrains Webstorm" variant="filled" size="small"/>
                                    </Grid>
                                    <Grid item xs={"auto"}>
                                        <Chip label="Postman" variant="filled" size="small"/>
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