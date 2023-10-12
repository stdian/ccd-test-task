import PropTypes from "prop-types";
import { StyledContainer, StyledText } from "./KeyButton.styled.js";

export const KeyButton = ({ text }) => {
	return (
		<StyledContainer>
			<StyledText>{text}</StyledText>
		</StyledContainer>
	);
};

KeyButton.propTypes = {
	text: PropTypes.string.isRequired,
};
