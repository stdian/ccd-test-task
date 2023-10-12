import styled from "styled-components";

export const StyledContainer = styled.div`
	position: relative;
	cursor: pointer;
`;

export const StyledText = styled.p`
	color: #fff;
	font-size: 16px;
	font-style: normal;
	font-weight: ${props => (props.$active ? 700 : 400)};
	line-height: normal;
	opacity: ${props => (props.$active ? 1 : 0.5)};
`;

export const StyledBorder = styled.div`
	position: absolute;
	width: 100%;
	margin-top: 20px;
	${props => (props.$active ? "border-bottom: 2px solid #FFFFFF" : "")}
`;
