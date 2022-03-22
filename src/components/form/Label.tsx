import React from 'react';

interface Props {
    value: string;
    child: React.ReactNode;
}
const Label: React.FC<Props> = (props: Props) => {
    return <label>{props.value}{props.child}</label>
}
