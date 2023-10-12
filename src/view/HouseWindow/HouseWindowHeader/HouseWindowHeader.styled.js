import styled from "styled-components";
import BG from "../../../assets/images/bg.png";

export const StyledTopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
`;

export const StyledTopItem = styled.div`
	display: flex;
	align-items: center;
	column-gap: 20px;
`;

export const StyledHouseNumber = styled.p`
	color: #fff;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

export const StyledSellHouse = styled.p`
	padding: 6px 10px;
	border-radius: 10px;
	background: #1f8034;

	color: #fff;
	font-family: GT Walsheim Pro;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

export const StyledAboutContainer = styled.div`
	position: relative;
	margin-top: 30px;
	padding: 20px 0;
`;

export const StyledAboutBG = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100% - 70px);
	background-image: url(${BG});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

export const StyledAboutTopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
`;

export const StyledAboutInfo = styled.div`
	display: flex;
	align-items: center;
	column-gap: 6px;
	padding: 7px 10px;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(5px);
`;

export const StyledViewHouseText = styled.p`
	color: #fff;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

export const StyledMenuWrapper = styled.div`
	margin-top: 100px;
	padding: 20px 30px 50px;
	background: rgba(16, 19, 24, 0.5);
	backdrop-filter: blur(5px);
`;

export const StyledMenuContainer = styled.div`
	position: relative;
	display: grid;
	align-items: start;
	grid-template-columns: 20px auto 20px;
	column-gap: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StyledMenuItems = styled.div`
	display: flex;
	column-gap: 30px;
`;
