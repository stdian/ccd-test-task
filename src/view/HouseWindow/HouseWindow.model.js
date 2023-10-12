import { HouseWindowInfoTab } from "./HouseWindowInfoTab/HouseWindowInfoTab.jsx";
import { HouseWindowGarageTab } from "./HouseWindowGarageTab/HouseWindowGarageTab.jsx";

export const houseWindowTabList = [
	{
		name: "info",
		text: "Описание",
		component: HouseWindowInfoTab,
	},
	{
		name: "garage",
		text: "Гараж",
		component: HouseWindowGarageTab,
	},
];
