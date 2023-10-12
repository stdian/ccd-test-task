import PropTypes from "prop-types";
import {
	StyledContainer,
	StyledText,
	StyledBorder,
} from "./MenuItem.styled.js";

export const MenuItem = ({ text, index, active, setActiveTabHandler }) => {
	const handleClick = index => () => setActiveTabHandler(index);

	return (
		<StyledContainer onClick={handleClick(index)}>
			<StyledText $active={active}>{text}</StyledText>
			<StyledBorder $active={active} />
		</StyledContainer>
	);
};

MenuItem.propTypes = {
	text: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	active: PropTypes.bool,
	setActiveTabHandler: PropTypes.func,
};
