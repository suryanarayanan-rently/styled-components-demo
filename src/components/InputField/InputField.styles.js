import styled from 'styled-components';

export const StyledInputField =styled.input`
border: 1px solid black;
background-color: #F8F8F8;
padding: 0.5rem;
border-radius: 4px;
margin: 0.5rem;
display: block;
color: ${({ theme }) => theme.text};
outline:0;
&:focus {
	border: 1px solid blue;
	outline:0
}
`
