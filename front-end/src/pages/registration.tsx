import React from 'react';
import  StepperComp  from '../components/registration/StepperComp';
import BottomNav from '../components/reusable/BottomNav';

function Registration() {
  return (
    <div className="App">
      <BottomNav />
      <StepperComp/>
    </div>
  );
}

export default Registration;