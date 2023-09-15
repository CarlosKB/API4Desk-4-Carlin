import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormRegistration1 from "./fields-registration-1";
import FormRegistration2 from "./fields-registration-2";
import FormRegistration3 from "./fields-registration-3";


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
const steps = ["Tipo de usuário", "Dados da Conta", "Complete as informações"];

export default function StepperComp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = React.useState(false);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = React.useState(true);
  const [btnContent, setBtnContent] = React.useState('Próximo passo')
  const handleNext = () => {
    if (activeStep >= 0  ){ 
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setIsPrevButtonDisabled(false)
    }
    if (activeStep === 1){
      setIsPrevButtonDisabled(false)
      setIsNextButtonDisabled(true)
      setBtnContent('Finalizar')
    }
  };
  const handlePreview = () => {
    
    if (activeStep <= 1){ 
    setIsPrevButtonDisabled(true);
    setIsNextButtonDisabled(false);
    }
    if(activeStep >= 1){
    setActiveStep(() => activeStep - 1);
    setIsNextButtonDisabled(false);
    setBtnContent('Próximo Passo')
    }
   }


  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ width: "160%", mt: 25, ml: -27, color: "primary" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Container>
        {activeStep === 0 ? <FormRegistration1 /> : null}
        {activeStep === 1 ? <FormRegistration2 /> : null}
        {activeStep === 2 ? <FormRegistration3 /> : null}
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <div>
            <Button
                variant="outlined"
                sx={{
                  ml: -5,
                  mt: -10,
                  borderRadius: 20,
                  width: 250,
                  height: 40,
                }}
                className="btn-prev-step"
                onClick={handlePreview}
                disabled={isPrevButtonDisabled}
              >
                Retornar
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ml: 35,
                  mt: -17,
                  borderRadius: 20,
                  width: 250,
                  height: 40,
                }}
                className="btn-next-step"
                onClick={handleNext}
                disabled={isNextButtonDisabled}
              >
                {btnContent}
              </Button>
            </div>
          </Grid>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
