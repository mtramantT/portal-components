import React, { useState } from "react";
import styled from "styled-components";

interface Props {
    label?: React.ReactNode;
}

const Link = styled.button`
    background-color: white;
    border: 0;
    &:hover {
        color: blue;
    }
`;

const ModalLink: React.FC<Props> = (props: Props) => {
    const { label } = props;
    const [ isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(true);
    }
    return <Link><u>{label || 'Link'}</u></Link> ;
}

export default ModalLink;