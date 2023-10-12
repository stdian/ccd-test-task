import PropTypes from "prop-types";
import { WalletIcon } from "@/assets/icons";
import {
	StyledBuyButtonContainer,
	StyledBuyButtonText,
} from "./BuyButton.styled.js";

export const BuyButton = ({ onClick }) => {
	return (
		<StyledBuyButtonContainer onClick={onClick}>
			<WalletIcon />
			<StyledBuyButtonText>Купить</StyledBuyButtonText>
		</StyledBuyButtonContainer>
	);
};

BuyButton.propTypes = {
	onClick: PropTypes.func,
};
