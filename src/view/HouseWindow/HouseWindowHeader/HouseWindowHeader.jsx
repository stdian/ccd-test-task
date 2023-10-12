import PropTypes from "prop-types";
import { CloseButton, KeyButton, MenuItem } from "@/components/index.js";
import { HouseIcon, SearchIcon, RubleIcon } from "@/assets/icons/index.js";
import {
	StyledTopContainer,
	StyledTopItem,
	StyledHouseNumber,
	StyledSellHouse,
	StyledAboutContainer,
	StyledAboutBG,
	StyledAboutTopContainer,
	StyledAboutInfo,
	StyledViewHouseText,
	StyledMenuWrapper,
	StyledMenuContainer,
	StyledMenuItems,
} from "./HouseWindowHeader.styled.js";

export const HouseWindowHeader = ({
	tabs,
	activeTab,
	setActiveTabHandler,
	free,
	price,
}) => {
	return (
		<>
			<StyledTopContainer>
				<StyledTopItem>
					<HouseIcon />
					<StyledHouseNumber>Дом #12</StyledHouseNumber>
				</StyledTopItem>
				<StyledTopItem>
					<StyledSellHouse>Продажа дома</StyledSellHouse>
					<CloseButton />
				</StyledTopItem>
			</StyledTopContainer>
			x
			<StyledAboutContainer>
				<StyledAboutBG />
				<StyledAboutTopContainer>
					<StyledAboutInfo
						style={!free ? { visibility: "hidden" } : {}}>
						<SearchIcon />
						<StyledViewHouseText>Осмотреть дом</StyledViewHouseText>
					</StyledAboutInfo>
					<StyledAboutInfo>
						<StyledViewHouseText>
							{price.toLocaleString()}
						</StyledViewHouseText>
						<RubleIcon />
					</StyledAboutInfo>
				</StyledAboutTopContainer>
				<StyledMenuWrapper>
					<StyledMenuContainer>
						<KeyButton text="Q" />
						<StyledMenuItems>
							{tabs.map(tab => (
								<MenuItem
									text={tab.text}
									active={activeTab === tab.name}
									index={tabs.indexOf(tab)}
									key={tab.name}
									setActiveTabHandler={setActiveTabHandler}
								/>
							))}
						</StyledMenuItems>
						<KeyButton text="E" />
					</StyledMenuContainer>
				</StyledMenuWrapper>
			</StyledAboutContainer>
		</>
	);
};

HouseWindowHeader.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
	activeTab: PropTypes.string.isRequired,
	setActiveTabHandler: PropTypes.func.isRequired,
	free: PropTypes.bool.isRequired,
	price: PropTypes.number.isRequired,
};
