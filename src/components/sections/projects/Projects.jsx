import {Box, Container, Grid, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

const Projects = ({mode, setMode, Theme}) => {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        getRepos("AndMJ", 1).then((res) => {
            setRepos(res)
        })

    }, [])

    async function getRepos(username, maxPages){
        const res = await fetch(`https://api.github.com/users/${username}/repos?&sort=pushed&per_page=100&page=${maxPages}`)
        return await res.json()
    }



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
                            {repos &&
                                repos.map((repo, index) => {
                                    return( /*change this so it displays the projects better, see for example: https://2kabhishek.github.io/projects/ */
                                        <Grid item xs={4} className={"project-card"} key={index}>
                                            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} position={"relative"}>
                                                <Box className={"overlay"} position={"absolute"} top={0} bottom={0} left={0} right={0}></Box>
                                                <Typography className={"text"} variant={"h4"} pb={2} position={"absolute"} bottom={0}>{repo.name}</Typography>
                                                <Box component={"img"} width={"100%"} src={"https://placehold.co/400x250"} textAlign={"center"}></Box>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Projects