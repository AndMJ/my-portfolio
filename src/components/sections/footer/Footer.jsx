import {Box, Container, Grid, Link, Typography} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
    return (
        <>
            {/* footer */}
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
        </>
    )
}

export default Footer;