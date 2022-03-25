import { Box, Container, Grid, Typography } from "@mui/material";
import TourCard from "../components/TourCard";
import "../styles.css";
import cities from "../data.json";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  return (
    <>
      <Container maxWidth="md" paddingBottom={5}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={2}>
              {city.tours.map((tour) => (
                <TourCard tour={tour} key={tour.id} />
              ))}
            </Grid>
          </>
        ))}
        <Box paddingY={4}></Box>
      </Container>
    </>
  );
};

export default Home;
