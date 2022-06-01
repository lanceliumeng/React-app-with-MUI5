import React from "react";
import { Paper, Grid, Typography, Box, Rating } from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={6}>
        <img
          src="https://images.unsplash.com/photo-1618032593076-64793c24427d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          alt=""
          className="img"
        ></img>
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Bay of Fire
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 14.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            {/* <Rating
              sx={{ color: "#ff6d75" }}
              name="read-only"
              value={4.5}
              precision={0.5}
              readOnly
              icon={<FavoriteIcon />}
              emptyIcon={<FavoriteBorderIcon />}
              size="small"
            /> */}

            <Rating
              name="read-only"
              value={4.5}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              (655 reviews)
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h3" marginTop={0.3}>
              From $600
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
