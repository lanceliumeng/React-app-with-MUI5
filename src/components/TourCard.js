import React from "react";
import { Paper, Grid, Typography, Box, Rating } from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={6}>
          <img src={tour.image} alt={tour.name} className="img"></img>
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 14.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
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
                value={tour.rating}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body2" component="p" marginLeft={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="h3" marginTop={0.3}>
                From ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
