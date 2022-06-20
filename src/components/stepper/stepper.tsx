/**
 * Form Stepper
 * Takes a number of "steps" with a "canProcceed" func 
 * Bottom button layout should resemble something like: [prev, next, submit/complete]
 * More buttons: Undo, Undo All, Undo Page
 */
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

interface StepperProps {
    steps: any[];
    onSubmit: () => void;
}


export const Stepper = (props: StepperProps) => {
    const [currentStep, setCurrentStep] = React.useState(0);
    // const [completedSteps, setCompletedSteps] = React.useState<{[id: number]: boolean}>({})

    return (
        <Container>

        </Container>
    );
}

export const Step = (props: {}) => {
    return null;
}
