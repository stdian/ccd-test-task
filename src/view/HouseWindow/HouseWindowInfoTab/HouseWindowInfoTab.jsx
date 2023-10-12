import PropTypes from "prop-types";
import { InfoIcon } from "@/assets/icons";
import { HouseWindowBottom } from "../HouseWindowBottom/HouseWindowBottom.jsx";
import {
	Heading,
	HeadingText,
	CharacteristicsContainer,
	CharacteristicsRow,
	CharacteristicName,
	CharacteristicValue,
	GreenText,
	BoldText,
	DecorativeLineStyled,
	RedText,
} from "./HouseWindowInfoTab.styled.js";

export const HouseWindowInfoTab = ({ free, price, days }) => {
	return (
		<>
			<Heading>
				<InfoIcon />
				<HeadingText>Описание</HeadingText>
			</Heading>
			<CharacteristicsContainer>
				<CharacteristicsRow>
					<CharacteristicName>Владелец</CharacteristicName>
					<CharacteristicValue>
						{free ? (
							<GreenText>Дом в продаже</GreenText>
						) : (
							<BoldText>iMineev</BoldText>
						)}
					</CharacteristicValue>
				</CharacteristicsRow>
				<CharacteristicsRow>
					<CharacteristicName>Класс дома</CharacteristicName>
					<CharacteristicValue>
						<BoldText>Высокий</BoldText>
					</CharacteristicValue>
				</CharacteristicsRow>
				<CharacteristicsRow>
					<CharacteristicName>Гаражные места</CharacteristicName>
					<CharacteristicValue>
						<BoldText>12</BoldText>
						{" мест."}
					</CharacteristicValue>
				</CharacteristicsRow>
				<CharacteristicsRow>
					<CharacteristicName>
						Стоимость обслуживания
					</CharacteristicName>
					<CharacteristicValue>
						<BoldText>3 720</BoldText>
						{"  ₽/д."}
					</CharacteristicValue>
				</CharacteristicsRow>
				<CharacteristicsRow>
					<CharacteristicName>Оплачено дней</CharacteristicName>
					{free ? (
						<CharacteristicValue>{"-"}</CharacteristicValue>
					) : (
						<CharacteristicValue>
							{days <= 5 ? (
								<RedText>{days}</RedText>
							) : (
								<BoldText>{days}</BoldText>
							)}
							{" / 31 д."}
						</CharacteristicValue>
					)}
				</CharacteristicsRow>
			</CharacteristicsContainer>
			<DecorativeLineStyled />
			<HouseWindowBottom price={price} free={free} />
		</>
	);
};

HouseWindowInfoTab.propTypes = {
	free: PropTypes.bool.isRequired,
	price: PropTypes.number.isRequired,
	days: PropTypes.number.isRequired,
};
