import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { buy, pay } from "@/store/store.js";
import { BuyButton, Price } from "@/components/index.js";
import {
	StyledContainer,
	StyledEnterButton,
	StyledPayButton,
} from "./HouseWindowBottom.styled.js";

export const HouseWindowBottom = ({ free, price }) => {
	const dispatch = useDispatch();

	return (
		<StyledContainer $free={free}>
			{free ? (
				<>
					<Price price={price} />
					<BuyButton onClick={() => dispatch(buy())} />
				</>
			) : (
				<>
					<StyledPayButton onClick={() => dispatch(pay())}>
						Оплатить обслуживание
					</StyledPayButton>
					<StyledEnterButton>Войти в дом</StyledEnterButton>
				</>
			)}
		</StyledContainer>
	);
};

HouseWindowBottom.propTypes = {
	free: PropTypes.bool.isRequired,
	price: PropTypes.number.isRequired,
};
