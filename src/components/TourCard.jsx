import { AccessTime } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 11
          }
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 6
          }
        }
      ]
    }
  }
});

const TourCard = ({ tour }) => {
  const { name, rating, duration, numberOfReviews, price, image } = tour;
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Link to="/1">
          <Paper elevation={3}>
            <img className="img" src={image} alt="travel" />
            <Box paddingX={2}>
              <Typography noWrap variant="subtitle1">
                {name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <AccessTime outlined sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {duration} hours
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
                marginTop={1}
              >
                <Rating
                  name="read-only"
                  value={rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={1}>
                  4.5
                </Typography>
                <Typography variant="body3" component="p" marginLeft={1}>
                  ({numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h3" marginTop={0}>
                  From ${price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Link>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
