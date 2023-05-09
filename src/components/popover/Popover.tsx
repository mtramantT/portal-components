import React, { useState } from "react";
import styled from "styled-components";

interface Props {
    label?: React.ReactNode;
}

const Container = styled.div``;


const Popover: React.FC<Props> = (props: Props) => {
    return <Container></Container> ;
}

export default Popover;