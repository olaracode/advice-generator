import React from "react";
import { Card, CardContent, Typography, Grid, Divider } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";

const AdviceCard = ({ advice }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#313a49",
        margin: "auto",
        width: {
          xs: 1,
          sm: 1 / 2,
          lg: 1 / 3,
        },
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "center",
            fontFamily: "Manrope",
            width: "100%",
            color: "#52ffa8",
          }}
        >
          ADVICE #{advice.id}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontFamily: "Manrope",
            width: "100%",
            color: "#fafafa",
            marginY: 2,
          }}
        >
          {advice.advice}
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY: 4,
          }}
        >
          <Grid item xs={5}>
            <Divider sx={{ background: "white" }} />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <PauseIcon />
          </Grid>
          <Grid item xs={5}>
            <Divider sx={{ background: "white" }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AdviceCard;
