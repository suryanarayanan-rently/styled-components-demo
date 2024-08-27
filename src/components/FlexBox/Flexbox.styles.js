import styled from 'styled-components';

export const StyledFlexBox = styled.div`
	display: flex;
	flex-direction: ${({direction}) => direction};
	gap: ${({gap}) => gap};
`
