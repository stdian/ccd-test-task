import styled from "styled-components";

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 6px 1fr;
	column-gap: 17px;
`;

export const StyledLine = styled.div`
	width: 100%;
	height: 1px;
	background-color: #ffffff;
	opacity: 0.1;
`;

export const StyledCircle = styled.div`
	width: 100%;
	height: auto;
	aspect-ratio: 1 /1;
	border-radius: 50%;
	background-color: #ffffff;
	opacity: 0.1;
`;
