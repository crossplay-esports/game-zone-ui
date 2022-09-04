import React from "react";
import Image from "next/image";
import HomeCard from "./home-card";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

export function Banner() {
  return (
    <div>
      <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
        <div
          style={{
            width: "100%",
            minWidth: "100%",
            height: "100%",
            position: "relative",
            minHeight: "360px",
            marginLeft: "3px",
          }}
        >
          <Image
            alt="banner"
            src="/mobile-banner.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <div
          style={{
            width: "100%",
            minWidth: "100%",
            height: "100%",
            position: "relative",
            minHeight: "320px",
            marginTop: "-5px",
          }}
        >
          <Image
            alt="banner"
            src="/x-box-banner.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Box>
    </div>
  );
}

const cards = [
  {
    title: "Pro clubs",
    subTitle: "Fight it out in the Indian Virtual League",
    url: "/pro_clubs.jpg",
    mainContent:
      "Sign for existing teams and take part in exclusive IVL and IVC paid competitions with your team mates to win the trophy. Perform well and see your value go up in our exciting virtual auctions",
    expandedContent: "",
  },
  {
    title: "Online Career Manager",
    subTitle: "Be the next Pep or Klopp",
    url: "/career_manager.jpg",
    mainContent:
      "Get a real team in FIFA,  buy and sell players with virtual money and use your tactics to lead your team to glory. Keep an eye out for exciting auctions and giveaways. With a nominal entry fee, be ready for the ultimate footballing experience",
    expandedContent: "",
  },
  {
    title: "Football buffs",
    subTitle: "In the Game",
    url: "/football.jpg",
    mainContent:
      "Football Corner: We are a matured football group with classic banters on match days. Discussion on real life games , polls for an engaging community",
    expandedContent: "",
  },
  {
    title: "Open World Gaming",
    subTitle: "Open World Gaming",
    url: "/open_world.jpg",
    mainContent:
      "Find new friends from the server and pair up to enjoy the open world games together.",
    expandedContent: "",
  },
  {
    title: "Fantasy Football",
    subTitle: "Fantasy Football",
    url: "/fantasy.jpg",
    mainContent:
      "Build your squad on FPL every season and compete with other Discord friends to be on the leaderboard. NO BETTING. ",
    expandedContent: "",
  },
  {
    title: "About Us",
    url: "/about.jpg",
    mainContent:
      "People who love Football , has to love FIFA. A lot of players play  Fifa, but the real fun is when you get to play with your friends, compete in Leagues and Tournaments to fight for the silverware. Thats what we do, provide the platform for these events. ",
    expandedContent:
      "In near future we will be conducting CRICKET 22 and COD tournaments and also with more support on mobo games. Enter with minimal entry fees and get to win exciting prizes for winning slots. Strict measures taken to prevent cheating. To check out where all this FUN happens click on the button below. Will take you to the Game Zone where we would be waiting to welcome you!",
  },
];

export default function LandingPage() {
  return (
    <div>
      <Banner />
      <div
        className="container"
        style={{
          marginTop: "60px",
          marginBottom: "40px",
        }}
      >
        <Grid
          container
          spacing={10}
          alignItems="flex-start"
          justifyContent="center"
        >
          {cards.map((card) => {
            return (
              <Grid item>
                <HomeCard
                  title={card.title}
                  subTitle={card.subTitle}
                  url={card.url}
                  mainContent={card.mainContent}
                  expandedContent={card.expandedContent}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
