import {Box, Button, Container, Divider, Fab, Grid, Icon, IconButton, Link, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "@fontsource/montserrat"
import "./App.css"
import {useState} from "react";

import ContrastIcon from '@mui/icons-material/Contrast';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

import AboutPhoto from "./static/image/me.png"
import "./static/css/water.css"
import "./static/css/bubbles.css"

//TODO: create a useContext for the themes

function App() {
    const [mode, setMode] = useState('light');

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



    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme/>

            {/* Button toggle light/dark mode */}
            <Box position={"fixed"} bottom={20} right={20} zIndex={1001}>
                <IconButton onClick={() => setMode((current) => (current === 'light' ? 'dark' : 'light'))}>
                    <ContrastIcon/>
                </IconButton>
            </Box>

            {/* Header */}
            <Box component={"header"} height={"100vh"} alignContent={"center"} >
                <Container maxWidth="lg" position={"relative"}>
                    <Typography variant={"h2"} sx={{color: Theme.palette.primary.detail}}>André João</Typography>
                    <Typography variant={"h2"}>Desenvolvimento Web</Typography>

                    <Box position={"absolute"} bottom={0} left={0} right={0}>
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

            {/* Body */}
            <Box component={"section"} position={"relative"} overflow={"hidden"} sx={{backgroundImage: `linear-gradient(180deg,${Theme.palette.primary.main}, ${Theme.palette.primary.dark})`}}>

                <Box>
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


                <Container id={"about-section"} maxWidth={"lg"}>
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

                <Container id={"resume-section"} maxWidth={"lg"}>
                    <Grid position={"relative"} container spacing={5} marginTop={0} minHeight={"500px"} pt={"5rem"}
                          pb={"5rem"} alignItems={"start"} color={"white"}>
                        <Grid item xs={12} sx={{paddingTop: "0 !important"}}>
                            <Typography className={"section-title"} variant={"h3"} textAlign={"center"}>Curriculum</Typography>
                        </Grid>

                        <Grid item xs={12} md={6} className={"resume-block"} sx={{flexShrink: "1 !important"}}>
                            <Typography variant={"h5"}>Experiencia Profissional</Typography>
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
                                <Typography variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}><Link target={"_blank"} rel={"noreferrer noopener"} href={"https://www.apricot.ie/"}>Apricot.ie</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Irlanda</span></Typography>
                                <Typography variant={"subtitle1"} sx={{
                                    fontWeight: "bold",
                                    backgroundColor: `${Theme.palette.primary.translucid}`,
                                    display: "inline",
                                    padding: "3px 9px"
                                }}>18/08/2023 - 02/2024</Typography>
                                <Typography variant={"subtitle1"}>Programador web (Remote, Freelance)</Typography>
                                {/*<Typography variant={"subtitle1"} sx={{fontWeight: "bold"}}></Typography>*/}
                                <Typography variant={"subtitle1"}>Construção de Frontends com base em designs feitos em Figma</Typography>
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
                                <Typography variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}><Link target={"_blank"} rel={"noreferrer noopener"} href={"https://strong-answer.com/"}>Strong Answer</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Algarve/Lagoa</span></Typography>
                                <Typography variant={"subtitle1"} sx={{
                                    fontWeight: "bold",
                                    backgroundColor: `${Theme.palette.primary.translucid}`,
                                    display: "inline",
                                    padding: "3px 9px"
                                }}>05/2019 - 07/2019</Typography>
                                <Typography variant={"subtitle1"}>Programador web (estágio escolar) - Algarve/Lagoa</Typography>
                                {/*<Typography variant={"subtitle1"} sx={{fontWeight: "bold"}}></Typography>*/}
                                <Typography variant={"subtitle1"}>Aprendi a usar a framework MJML para a construção de emails responsivos e trabalhei com HTML, CSS e
                                    Javascript.</Typography>
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
                                <Typography variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}><Link target={"_blank"} rel={"noreferrer noopener"} href={"https://strong-answer.com/"}>Strong Answer</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Algarve/Lagoa</span></Typography>
                                <Typography variant={"subtitle1"} sx={{
                                    fontWeight: "bold",
                                    backgroundColor: `${Theme.palette.primary.translucid}`,
                                    display: "inline",
                                    padding: "3px 9px"
                                }}>05/2018 - 07/2018</Typography>
                                <Typography variant={"subtitle1"}>Programador web (estágio escolar) - Algarve/Lagoa</Typography>
                                {/*<Typography variant={"subtitle1"} sx={{fontWeight: "bold"}}></Typography>*/}
                                <Typography variant={"subtitle1"}>Aprendi a usar linguagens Web como HTML e CSS, e um pouco de Javascript e PHP.</Typography>
                            </Box>

                        </Grid>

                        <Grid item xs={12} md={6} className={"resume-block"} sx={{flexShrink: "1 !important"}}>
                            <Typography variant={"h5"}>Educação e Formação</Typography>
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
                                <Typography variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}><Link target={"_blank"} rel={"noreferrer noopener"} href={"https://www.ismat.pt"}>ISMAT - Instituto Superior Manuel Teixeira Gomes</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Algarve/Portimão</span></Typography>
                                <Typography variant={"subtitle1"} sx={{
                                    fontWeight: "bold",
                                    backgroundColor: `${Theme.palette.primary.translucid}`,
                                    display: "inline",
                                    padding: "3px 9px"
                                }}>2019 - 2022</Typography>
                                <Typography variant={"subtitle1"}>Licenciatura em Engenharia informática</Typography>
                                {/*<Typography variant={"subtitle1"} sx={{fontWeight: "bold"}}>O que aprendi:</Typography>*/}
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
                                <Typography variant={"h6"} sx={{textTransform: "", fontWeight: "bold", fontStyle: "italic"}}><Link target={"_blank"} rel={"noreferrer noopener"} href={"https://www.aesilves.pt"}>Escola Secundária de Silves</Link> <span style={{fontWeight:"normal", fontSize: "16px"}}> - Algarve/Silves</span></Typography>
                                <Typography variant={"subtitle1"} sx={{
                                    fontWeight: "bold",
                                    backgroundColor: `${Theme.palette.primary.translucid}`,
                                    display: "inline",
                                    padding: "3px 9px"
                                }}>2016 - 2019</Typography>
                                <Typography variant={"subtitle1"}>Tecnico de Gestão e Programação de Sistemas Informáticos</Typography>
                                {/*<Typography variant={"subtitle1"} sx={{fontWeight: "bold"}}>O que aprendi:</Typography>*/}
                            </Box>

                        </Grid>

                    </Grid>
                </Container>

                <Container id={"projects-section"} maxWidth={"lg"}>
                    <Grid position={"relative"} container spacing={5} marginTop={0} minHeight={"500px"} pt={"5rem"}
                          pb={"5rem"} alignItems={"start"} color={"white"}>
                        <Grid item xs={12} sx={{paddingTop: "0 !important"}}>
                            <Typography className={"section-title"} variant={"h3"} textAlign={"center"}>Projetos</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Elementum facilisis leo vel fringilla est ullamcorper eget
                            nulla. Cras semper auctor neque vitae tempus quam pellentesque nec. Urna nunc id cursus
                            metus aliquam. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Ac tortor vitae
                            purus faucibus ornare suspendisse sed nisi lacus. Ut enim blandit volutpat maecenas volutpat
                            blandit. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus
                            faucibus. Sagittis vitae et leo duis ut. Neque aliquam vestibulum morbi blandit cursus risus
                            at ultrices. Vel elit scelerisque mauris pellentesque. Leo in vitae turpis massa. Enim nunc
                            faucibus a pellentesque sit amet porttitor eget dolor. Volutpat blandit aliquam etiam erat.
                            Dictum non consectetur a erat nam at lectus urna duis. Arcu odio ut sem nulla pharetra diam
                            sit. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Aliquam sem et tortor
                            consequat id porta nibh venenatis cras. Tellus in hac habitasse platea dictumst vestibulum
                            rhoncus.

                            Nisi est sit amet facilisis magna etiam tempor orci eu. Gravida cum sociis natoque
                            penatibus. Eu non diam phasellus vestibulum lorem sed. Amet nisl purus in mollis nunc sed id
                            semper risus. Blandit turpis cursus in hac. Quam adipiscing vitae proin sagittis. Orci
                            sagittis eu volutpat odio facilisis mauris sit amet massa. At consectetur lorem donec massa
                            sapien faucibus et. Turpis egestas maecenas pharetra convallis. Ut pharetra sit amet aliquam
                            id. Non nisi est sit amet facilisis magna etiam tempor. Fusce ut placerat orci nulla
                            pellentesque dignissim enim. Dui accumsan sit amet nulla. Eu scelerisque felis imperdiet
                            proin fermentum leo vel. In hac habitasse platea dictumst quisque sagittis purus. Morbi
                            tristique senectus et netus et malesuada fames ac turpis. Mauris rhoncus aenean vel elit
                            scelerisque mauris. Tellus molestie nunc non blandit massa enim nec. Dui ut ornare lectus
                            sit amet est.

                            Cras pulvinar mattis nunc sed blandit. Luctus venenatis lectus magna fringilla urna
                            porttitor rhoncus dolor purus. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
                            Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Blandit cursus
                            risus at ultrices mi tempus. Eu scelerisque felis imperdiet proin fermentum. Aliquam etiam
                            erat velit scelerisque in. Lobortis elementum nibh tellus molestie nunc non blandit. Magna
                            eget est lorem ipsum dolor sit amet. Pharetra vel turpis nunc eget lorem dolor sed viverra
                            ipsum. Orci ac auctor augue mauris augue neque gravida in. Purus semper eget duis at tellus
                            at urna. Ipsum dolor sit amet consectetur adipiscing. Fermentum posuere urna nec tincidunt
                            praesent semper feugiat.

                            Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Pellentesque diam
                            volutpat commodo sed egestas egestas fringilla phasellus. At erat pellentesque adipiscing
                            commodo elit. Mattis molestie a iaculis at erat. Viverra tellus in hac habitasse. Dignissim
                            suspendisse in est ante in nibh mauris cursus. Pellentesque elit eget gravida cum sociis
                            natoque penatibus. Pulvinar elementum integer enim neque volutpat ac tincidunt. Augue eget
                            arcu dictum varius duis at consectetur lorem. Posuere ac ut consequat semper viverra nam
                            libero justo laoreet. In fermentum et sollicitudin ac.

                            Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Turpis tincidunt id aliquet risus feugiat
                            in ante metus. Euismod quis viverra nibh cras. Purus sit amet luctus venenatis lectus. Leo a
                            diam sollicitudin tempor id. Lectus sit amet est placerat. Condimentum lacinia quis vel
                            eros. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Ac tortor vitae purus
                            faucibus ornare suspendisse sed nisi lacus. Posuere morbi leo urna molestie. Maecenas
                            ultricies mi eget mauris pharetra et ultrices.
                        </Grid>
                    </Grid>
                </Container>

                {/* Footer */}
                <Box component={"footer"} sx={{}}>
                    <Container maxWidth={"lg"}>
                        <Grid position={"relative"} container spacing={5} marginTop={0} pt={"2rem"} pb={"2rem"}
                              color={"white"} alignItems={"start"} justifyContent={"center"}>
                            {/*<Grid item xs={12} sx={{paddingTop: "0 !important"}}>
                            <Typography className={"section-title"} variant={"h3"} textAlign={"center"}>Contacts</Typography>
                        </Grid>*/}
                            <Grid item xs={"auto"} textAlign={"center"}>
                                <Link sx={{display: "block", "&:hover": {transform: "translateY(-3px)"}}}
                                      target={"_blank"}
                                      rel={"noreferrer noopener"} href={"https://github.com/AndMJ"}><GitHubIcon/></Link>
                            </Grid>
                            <Grid item xs={"auto"} textAlign={"center"}>
                                <Link sx={{display: "block", "&:hover": {transform: "translateY(-3px)"}}}
                                      target={"_blank"}
                                      rel={"noreferrer noopener"}
                                      href={"https://www.linkedin.com/in/andre-joao/"}><LinkedInIcon/></Link>
                            </Grid>
                            <Grid item xs={"auto"} textAlign={"center"}>
                                <Link sx={{display: "block", "&:hover": {transform: "translateY(-3px)"}}}
                                      target={"_blank"}
                                      rel={"noreferrer noopener"}
                                      href={"mailto:andrejoao070@gmail.com"}><SendIcon/></Link>
                            </Grid>
                            <Grid item xs={12} textAlign={"center"}>
                                <Typography variant={"muted"}>
                                    &copy; {new Date().getFullYear()} · Made by <Link
                                    sx={{color: "inherit", "&:hover": {color: "#fff"}}} target={"_blank"}
                                    rel={"noreferrer noopener"} href={"https://github.com/AndMJ"}>André João</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>

        </ThemeProvider>
    )
}

export default App
