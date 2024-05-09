import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";

const Projects = ({mode, setMode, Theme}) => {
    return(
        <>
            <Container id={"project-section"} maxWidth={"lg"}>
                <Grid position={"relative"} container spacing={5} marginTop={0} minHeight={"500px"} pt={"5rem"}
                      pb={"5rem"} alignItems={"start"} color={"white"}>
                    <Grid item xs={12} sx={{paddingTop: "0 !important"}}>
                        <Typography className={"section-title"} variant={"h3"} textAlign={"center"}>Projetos</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Grid container spacing={5}>
                            <Grid item xs={4} className={"project-card"}>
                                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} position={"relative"}>
                                    <Box className={"overlay"} position={"absolute"} top={0} bottom={0} left={0} right={0}></Box>
                                    <Typography className={"text"} variant={"h4"} pb={2} position={"absolute"} bottom={0}>Projeto 1</Typography>
                                    <Box component={"img"} width={"100%"} src={"https://placehold.co/400x250"} textAlign={"center"}></Box>
                                </Box>
                            </Grid>

                            <Grid item xs={4} className={"project-card"}>
                                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} position={"relative"}>
                                    <Box className={"overlay"} position={"absolute"} top={0} bottom={0} left={0} right={0}></Box>
                                    <Typography className={"text"} variant={"h4"} pb={2} position={"absolute"} bottom={0}>Projeto 1</Typography>
                                    <Box component={"img"} width={"100%"} src={"https://placehold.co/400x250"} textAlign={"center"}></Box>
                                </Box>
                            </Grid>

                            <Grid item xs={4} className={"project-card"}>
                                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} position={"relative"}>
                                    <Box className={"overlay"} position={"absolute"} top={0} bottom={0} left={0} right={0}></Box>
                                    <Typography className={"text"} variant={"h4"} pb={2} position={"absolute"} bottom={0}>Projeto 1</Typography>
                                    <Box component={"img"} width={"100%"} src={"https://placehold.co/400x250"} textAlign={"center"}></Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Projects