import styled from "styled-components";

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: ${props =>
		props.$free ? "auto auto" : "260px 160px"};
	align-items: end;
	justify-content: space-between;
	margin-top: ${props => (props.$free ? "32px" : "36.5px")};
`;

export const StyledPayButton = styled.button`
	padding: 14px 0;
	border: 0;
	border-radius: 10px;
	background: #1f8034;
	cursor: pointer;

	color: #fff;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

export const StyledEnterButton = styled.button`
	padding: 14px 0;
	border: 0;
	border-radius: 10px;
	background: #1782ff;
	cursor: pointer;

	color: #fff;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
