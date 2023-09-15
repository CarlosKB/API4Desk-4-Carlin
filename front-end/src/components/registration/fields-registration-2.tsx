import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

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
export default function FormRegistration2() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: "#ffffff",ml:-20,height: "50vh", width:'110vh', mt:5, borderRadius:3 }}>
          <Grid container spacing={1}>
            <Typography sx={{ ml: 37, mb: 4, mt:3 }}>
              Preencha os campos abaixo:
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  ml:10,
                  width: "35ch",
                  flexGrow: 2,
                  color: "primary",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <Grid container spacing={4}>
                  <Grid item xs={4}  >
                    <TextField
                      required
                      id="outlined-required"
                      label="Esse é o 2"
                    />
                  </Grid>
                  <Grid item  sx={{ml:8}}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Número de telefone"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField required id="outlined-required" label="Senha" />
                  </Grid>
                  <Grid item sx={{ml:8}}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Confirmar senha"
                    />
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
