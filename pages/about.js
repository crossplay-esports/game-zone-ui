import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "../components/main-header";
import Media from "../components/card-media";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const cards = [
  {
    title: "Cricket",
    url: "https://player.vimeo.com/video/705169359?h=29d145f61b",
    mainContent: "What can be better than a game of CRICKET with your mates?",
    content: (
      <div>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/705169359?h=29d145f61b"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    ),
  },
  {
    title: "Pro Clubs",
    url: "https://player.vimeo.com/video/705170414?h=bbf7b1beae",
    mainContent:
      "Create your pro, Get picked by a manager in auction and get to compete in IVL(Indian Virtual League) and a cup competition with TOTWs and other rewards. ",
    content: (
      <div>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/705170414?h=bbf7b1beae"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    ),
  },
];

export function Body() {
  return (
    <div style={{ margin: "40px" }}>
      <Container>
        <Grid container spacing={5}>
          {cards.map((card) => {
            return (
              <Grid item>
                <Media
                  title={card.title}
                  url={card.url}
                  mainContent={card.mainContent}
                  content={card.content}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default function About() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Body />
    </ThemeProvider>
  );
}
