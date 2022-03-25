import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Typography
} from "@mui/material";
import Accordions from "../components/Accordion";
import QuiltedImageList from "../components/ImageList";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Box paddingBottom={6}>
        <Typography variant="h4" component="h4" marginY={5}>
          Immerse into the Falls
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <img
            style={{ width: "50%", height: 350 }}
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="vegas"
          />
          <QuiltedImageList />
        </Box>
        <Box marginBottom={4}>
          <Typography variant="h5" component="h5" marginY={2}>
            About this ticket
          </Typography>
          <Typography variant="body2" component="h4" marginY={2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
        <Box marginBottom={6}>
          <Typography variant="h5" component="h5" marginY={2}>
            Frequestly ask question
          </Typography>
          <Accordions />
        </Box>
      </Box>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "blue"
        }}
        elevation={3}
      >
        <Box>
          <BottomNavigation sx={{ display: "flex", alignItems: "center" }}>
            <BasicModal />
          </BottomNavigation>
        </Box>
      </Paper>
    </Container>
  );
};

export default Tour;
