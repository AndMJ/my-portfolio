import {Box, Button, Container, Grid, Link, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

const Projects = ({mode, setMode, Theme}) => {

    // for programming language icons
    const devicons = {
        Batchfile: "devicon-powershell-plain",
        Git: "devicon-git-plain",
        Github: "devicon-github-plain",
        Chrome: "devicon-chrome-plain",
        Assembly: "devicon-labview-plain colored",
        'C#': "devicon-csharp-plain colored",
        'C++': "devicon-cplusplus-plain colored",
        C: "devicon-c-plain colored",
        Clojure: "devicon-clojure-plain colored",
        CoffeeScript: "devicon-coffeescript-plain colored",
        Crystal: "devicon-crystal-plain colored",
        CSS: "devicon-css3-plain colored",
        Dart: "devicon-dart-plain colored",
        Dockerfile: "devicon-docker-plain colored",
        Elixir: "devicon-elixir-plain colored",
        Elm: "devicon-elm-plain colored",
        Erlang: "devicon-erlang-plain colored",
        'F#': "devicon-fsharp-plain colored",
        Go: "devicon-go-plain colored",
        Groovy: "devicon-groovy-plain colored",
        HTML: "devicon-html5-plain colored",
        Haskell: "devicon-haskell-plain colored",
        Java: "devicon-java-plain colored",
        JavaScript: "devicon-javascript-plain colored",
        Julia: "devicon-julia-plain colored",
        'Jupyter Notebook': "devicon-jupyter-plain colored",
        Kotlin: "devicon-kotlin-plain colored",
        Latex: "devicon-latex-plain colored",
        Lua: "devicon-lua-plain-wordmark colored",
        Matlab: "devicon-matlab-plain colored",
        Nim: "devicon-nixos-plain colored",
        Nix: "devicon-nixos-plain colored",
        ObjectiveC: "devicon-objectivec-plain colored",
        OCaml: "devicon-ocaml-plain colored",
        Perl: "devicon-perl-plain colored",
        PHP: "devicon-php-plain colored",
        PLSQL: "devicon-sqlite-plain colored",
        Processing: "devicon-processing-plain colored",
        Python: "devicon-python-plain colored",
        R: "devicon-r-plain colored",
        Ruby: "devicon-ruby-plain colored",
        Rust: "devicon-rust-plain colored",
        Sass: "devicon-sass-original colored",
        Scala: "devicon-scala-plain colored",
        Shell: "devicon-bash-plain colored",
        Solidity: "devicon-solidity-plain colored",
        Stylus: "devicon-stylus-plain colored",
        Svelte: "devicon-svelte-plain colored",
        Swift: "devicon-swift-plain colored",
        Terraform: "devicon-terraform-plain colored",
        TypeScript: "devicon-typescript-plain colored",
        'Vim Script': "devicon-vim-plain colored",
        Vue: "devicon-vuejs-plain colored",
    };

    const [repos, setRepos] = useState([])

    useEffect(() => {
        getRepos("AndMJ", 1).then((res) => {
            if(!res?.message){ //if "res" is not an error message, populates "repos" array
                res.map((repo) => {
                    if(repo.id === 565216827) { //ptm_frontend
                        repo.language = "PHP"//manually set "ptm_frontend" language, it comes "null" for some reason
                    }
                })
                setRepos(res)
            }

        })

    }, [])


    async function getRepos(username, maxPages){
        try{
            const res = await fetch(`https://api.github.com/users/${username}/repos?&sort=pushed&per_page=100&page=${maxPages}`)
            return await res.json()
        } catch (e) {
            return await e
        }
    }

    //console.log(repos)
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
                            {repos.length > 0 ?
                                repos.map((repo, index) => {
                                    if (repo.id === 669324152){ //ignore this repo: github-readme-stats https://github.com/AndMJ/github-readme-stats
                                        return
                                    }
                                    return( /*change this so it displays the projects better, see for example: https://2kabhishek.github.io/projects/ */
                                        <Grid item xs={12} sm={6} md={4} className={"project-card"} key={index}>
                                            <Box className={"overlay"} height={"100%"} borderRadius={2} bgcolor={"rgba(0,34,61,0.25)"} p={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} position={"relative"} textAlign={"center"}>
                                                <Typography className={"text"} variant={"h5"} pb={2}>{repo.name}</Typography>
                                                <Typography className={"text"} variant={"body1"} pb={2}>{repo.description}</Typography>
                                                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                                                    <i className={devicons[repo.language]}></i>
                                                    <Typography className={"text"} variant={"body2"} sx={{fontSize: "12px"}} pl={1} pb={2}>{repo.language}</Typography>
                                                </Box>

                                                <Box>
                                                    <Button variant="contained" href={repo.html_url} rel={"noreferrer noopener"} target={"_blank"} sx={{color: "white"}}>Ver Projeto</Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    )
                                })
                                :
                                <Grid item xs={12} className={"project-card"} textAlign={"center"}>
                                    <Typography className={"text"} variant={"body1"} pb={2}>Erro ao carregar projetos.</Typography>
                                    <Box>
                                        <Button variant="contained" href={"https://github.com/AndMJ?tab=repositories"} rel={"noreferrer noopener"} sx={{color: "white"}}>Abrir repositório no Github</Button>
                                    </Box>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Projects