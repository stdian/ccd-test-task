import { RubleBigIcon } from "@/assets/icons";
import PropTypes from "prop-types";
import {
	StyledPriceBottomContainer,
	StyledPriceContainer,
	StyledPriceHeading,
	StyledPriceText,
} from "./Price.styled.js";

export const Price = ({ price }) => {
	return (
		<StyledPriceContainer>
			<StyledPriceHeading>Стоимость</StyledPriceHeading>
			<StyledPriceBottomContainer>
				<StyledPriceText>{price.toLocaleString()}</StyledPriceText>
				<RubleBigIcon />
			</StyledPriceBottomContainer>
		</StyledPriceContainer>
	);
};

Price.propTypes = {
	price: PropTypes.number,
};
