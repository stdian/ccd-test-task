import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { houseWindowTabList } from "../HouseWindow.model.js";
import { HouseWindowHeader } from "../HouseWindowHeader/HouseWindowHeader.jsx";
import { StyledContainer, StyledTabContainer } from "./HouseWindow.styled.js";

export const HouseWindow = ({ free, price, days }) => {
	const [activeTab, setActiveTab] = useState(0);

	const ActiveTab = houseWindowTabList[activeTab];

	const keyDownHandler = event => {
		switch (event.code) {
			case "KeyE":
				if (activeTab < houseWindowTabList.length - 1) {
					setActiveTab(prevState => prevState + 1);
				}
				break;
			case "KeyQ":
				if (activeTab > 0) {
					setActiveTab(prevState => prevState - 1);
				}
				break;
			default:
				return;
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", keyDownHandler);

		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	});

	return (
		<StyledContainer>
			<HouseWindowHeader
				tabs={houseWindowTabList}
				activeTab={ActiveTab.name}
				setActiveTabHandler={setActiveTab}
				free={free}
				price={price}
				days={days}
			/>
			<StyledTabContainer>
				<ActiveTab.component free={free} price={price} days={days} />
			</StyledTabContainer>
		</StyledContainer>
	);
};

HouseWindow.propTypes = {
	free: PropTypes.bool.isRequired,
	price: PropTypes.number.isRequired,
	days: PropTypes.number.isRequired,
};
