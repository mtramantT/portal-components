import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { PartialProps } from './PartialProps';

interface Props extends Partial<PartialProps> {
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
    position: relative;
    margin: 10px;
    width: 100%;
`;

const Label = styled.label<{isDisplayed: boolean}>`
    ${({isDisplayed}) => isDisplayed && 'display: none;'}
    position: absolute;
    left: 13px;
    top: 6px;
    font-size: 16px;
    cursor: text;
`;

const Input = styled.input<{isDisplayed: boolean, themeColor?: string}>`
    ${({isDisplayed, themeColor }) => isDisplayed && `outline: 1px solid ${themeColor || 'blue'};`}
    height: 30px;
    font-size: 16px;
    padding: 10px;
    border-radius: 1% / 50%;
    width: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-left: 5px;
`;

const SearchBar: React.FC<Props> = (props: Props) => {
    const {label, onChange, themeColor} = props;
    const [value, setValue] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange && onChange(event);
    }

    return (
        <Container>
            <Label htmlFor='search-bar' isDisplayed={isFocused || value.trim() !== ''}>
                {label || "Search"}
                <Icon icon={faMagnifyingGlass} />
            </Label>
            <Input 
                name="search-bar"
                type="search"
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleChange}
                isDisplayed={isFocused || value.trim() !== ''}
                themeColor={themeColor}
            />
        </Container>
    );
}

export default SearchBar;
