import styled from "styled-components";

export const StyledButton = styled.button.attrs({
	type: "button"
})`
border: 0;
outline: 0;
background-color: ${( {color, theme} ) => color != '' ? theme[color] : theme.primary };
color: ${({theme}) => theme.text};
padding: 0.5rem;
min-width: 100px;
margin: 0.5rem;
border-radius: 4px;
`
