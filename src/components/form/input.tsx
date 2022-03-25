import * as React from 'react';
import styled from 'styled-components';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement>, Partial<PartialProps> {
    id: string;
}

interface PartialProps {
    label: string;
    required: boolean;
}

const Container = styled.div``;
const Label = styled.label``;
const Input = styled.input``;

export const input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> = (props: InputProps) => {
    const [value, setValue] = React.useState<string>('');
    const [focus, setFocus] = React.useState<boolean>(false);
    const [hasValue, setHasValue] = React.useState<boolean>(false);

    React.useEffect(() => {
        setHasValue(focus || value.length > 0)
    }, [value, focus])

    React.useEffect(() => {
        if (focus === false && value.trim() === '') {
            setValue(value.trim());
            setHasValue(false);
        }
    },[focus])

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        props.onChange && props.onChange(event);
    },[])

    const handleFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true);
        props.onFocus && props.onFocus(event);
    },[props.onFocus]);

    const handleBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false);
        props.onBlur && props.onBlur(event);
    }, [props.onBlur]);

    return (
        <Container>
            { props.label && <Label htmlFor={props.id}>{props.label}</Label>}
            <Input 
                id={props.id}
                name={props.id}
                onFocus={handleFocus}
                onBlur={handleBlur} 
                onChange={handleChange}/>
        </Container>
    );
}
