import styled from "styled-components";
import { DecorativeLine } from "@/components";

export const Heading = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;
	margin-top: -20px;
`;

export const HeadingText = styled.div`
	color: #fff;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	opacity: 0.75;
`;

export const CharacteristicsContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	width: 100%;
	margin-top: 20px;
`;

export const CharacteristicsRow = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	justify-content: space-between;
`;

export const CharacteristicName = styled.p`
	color: #fff;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	opacity: 0.25;
`;

export const CharacteristicValue = styled.p`
	color: rgba(255, 255, 255, 0.5);
	font-size: 16px;
	font-style: normal;
	line-height: normal;
	font-weight: 400;
`;

export const BoldText = styled.span`
	color: #ffffff;
	font-weight: 700;
`;

export const GreenText = styled(BoldText)`
	color: #28b446;
	font-weight: 700;
`;

export const RedText = styled(BoldText)`
	color: #ff3e3e;
	font-weight: 700;
`;

export const DecorativeLineStyled = styled(DecorativeLine)`
	margin-top: 20px;
`;
