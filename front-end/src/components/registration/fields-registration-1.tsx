import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";

import img1 from "./static/cooperativa-branco.png";
import img2 from "./static/cooperativa-verde.png";
import img3 from "./static/estabelecimento-branco.png";
import img4 from "./static/estabelecimento-verde.png";

const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export default function FormRegistration1() {
  const [isSelected, setIsSelected] = React.useState(false);
  const [isSelected2, setIsSelected2] = React.useState(false);
  const handleCardClick = () => {
    setIsSelected(!isSelected);
    setIsSelected2(false)
  };
  const handleCardClick2 = () => {
    setIsSelected2(!isSelected2);
    setIsSelected(false)
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#ffffff",
              ml: -20,
              height: "50vh",
              width: "110vh",
              mt: 5,
              borderRadius: 3,
            }}
          >
            <Typography sx={{ ml: 33, mb: 4, mt: 3 }}>
              Selecione qual grupo você pertence:
            </Typography>

            <Grid container spacing={1} sx={{ ml: 50, mt: 5 }}>
              <Card
                sx={{
                  ml: -30,
                  height: 202,
                  boxShadow: 5,
                  borderRadius: 5,
                  "-webkit-transition": "-webkit-transform .5s ease",
                  transition: " transform .5s ease",
                  "&:hover": {
                    "-webkit-transform": "scale(1.1)",
                    transform: "scale(1.1)",
                    cursor: "pointer",
                  },
                }}
              >
                <CardMedia>
                  <img
                    className={isSelected ? "active" : ""}
                    onClick={handleCardClick}
                    src={isSelected ? img2 : img1}
                    alt="img"
                    width="200px"
                  />
                </CardMedia>
              </Card>
              <Card
                sx={{
                  ml: 10,
                  height: 202,
                  boxShadow: 4,
                  width: 197,
                  borderRadius: 5,
                  "-webkit-transition": "-webkit-transform .5s ease",
                  transition: " transform .5s ease",
                  "&:hover": {
                    "-webkit-transform": "scale(1.1)",
                    transform: "scale(1.1)",
                    cursor: "pointer",
                  },
                }}
              >
                <CardMedia>
                  <img className={isSelected2 ? "active" : ""}
                    onClick={handleCardClick2}
                    src={isSelected2 ? img4 : img3} alt="img" width="200px" />
                </CardMedia>
              </Card>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
