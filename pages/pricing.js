import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import VerticalLinearStepper from "../components/stepper";
import ResponsiveAppBar from "../components/main-header";
import { Container } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const steps = [
  {
    label: "PLATINUM TIER - INR 200/month",
    description: `Get all you get in Gold tier plus
      Free access to whole server.
      Get to use all the cool custom bot commands in any channels.
      FREE entry to all PAID events of server.
      Get an yearly customized gift`,
  },
  {
    label: "GOLD TIER - INR 150/month",
    description: `Get all you get in Gold tier plus
        Free access to whole server.
        Get to use all the cool custom bot commands in any channels.
        FREE entry to all PAID events of server.
        Get an yearly customized gift`,
  },
  {
    label: "SILVER PLAN : INR 100/month",
    description: `Get to choose 2 Categories from the server.
      Get customized Role and Badge.
      Get 10% off on all PAID EVENTS of the server.`,
  },
];

export function Body() {
  return (
    <div className="container">
      <Container>
        <h2>Pricing of Subs</h2>
        <VerticalLinearStepper steps={steps} />
      </Container>
    </div>
  );
}

export default function Pricing() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Body />
    </ThemeProvider>
  );
}
