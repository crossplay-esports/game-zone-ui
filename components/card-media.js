import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

export default function Media(props) {
  const { title, subTitle, url, mainContent, content } = props;
  return (
    <div>
      <Card sx={{ maxWidth: 450 }}>
        <CardHeader title={title} subheader={subTitle} />
        <CardContent>
          {content}
          <Typography variant="body2" color="text.secondary">
            {mainContent}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
