import PropTypes from "prop-types";
import {
	StyledCircle,
	StyledContainer,
	StyledLine,
} from "./DecorativeLine.styled.js";

export const DecorativeLine = ({ className }) => {
	return (
		<StyledContainer className={className}>
			<StyledLine />
			<StyledCircle />
			<StyledLine />
		</StyledContainer>
	);
};

DecorativeLine.propTypes = {
	className: PropTypes.string,
};
