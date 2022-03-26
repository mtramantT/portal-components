import * as React from 'react';
import styled from 'styled-components';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement>, Partial<PartialProps> {
    id: string;
}

interface PartialProps {
    label: string;
    required: boolean;
}

const Label = styled.label<{ focus: boolean, hasValue: boolean}>`
    position: absolute;
    transition: 230;
    margin-bottom: 3px;
    bottom: ${({ hasValue }) => hasValue ? '20px' : '0px'};
    font-size: ${({ hasValue }) => hasValue ? '14px' : '16px'};
    color: ${({focus}) => focus ? 'blue' : 'black'};
`;

const Container = styled.div<{}>`
    display: inline-block;
    position: relative;
    margin: 15px;
    width: 95%;
`;

const Input = styled.input`
    border-width: 0 0 1px 0;
    font-size: 16px;
    width: 100%;
    &:focus {
        outline: 1px solid blue;
    }
`;

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
    },[props])

    const handleFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true);
        props.onFocus && props.onFocus(event);
    },[props]);

    const handleBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false);
        props.onBlur && props.onBlur(event);
    }, [props]);

    return (
        <Container className={'input-wrapper-' + props.id }>
            { props.label && <Label htmlFor={props.id} focus={focus} hasValue={hasValue}>{props.label}</Label>}
            <Input 
                id={props.id}
                name={props.id}
                className={props.className || props.id}
                onFocus={handleFocus}
                onBlur={handleBlur} 
                onChange={handleChange}/>
        </Container>
    );
}
