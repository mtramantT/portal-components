import * as React from 'react';

interface InputProps {
    
}

const input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> = (props: InputProps) => {
    return <input/>;
}