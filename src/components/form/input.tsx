import * as React from 'react';
import styled from 'styled-components';

export interface InputProps extends Partial<PartialProps> {

}

interface PartialProps {
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Container = styled.div``;
const Label = styled.div``;
const Input = styled.input``;

export const input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> = (props: InputProps) => {
    const [focus, setFocus] = React.useState<boolean>(false);
    const [hasValue, setHasValue] = React.useState<boolean>(false)

    const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true);
        props.onFocus && props.onFocus(event);
    },[props.onFocus]);

    const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false);
        props.onBlur && props.onBlur(event);
    }, [props.onBlur]);

    return (
        <Container>
            <Label>
                <Input />
            </Label>
        </Container>
    );
}
