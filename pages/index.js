import Head from "next/head";
import ResponsiveAppBar from "../components/main-header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LandingPage from "../components/landing-page";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;

export function Home() {
  return (
    <div>
      <Head>
        <title>Gamer's Genie</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=optional"
          rel="stylesheet"
        />
      </Head>
      <ResponsiveAppBar />
      <LandingPage />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Montserrat, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
