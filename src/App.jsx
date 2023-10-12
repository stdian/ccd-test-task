import styled from "styled-components";
import { useSelector } from "react-redux";

import { HouseWindow } from "./view/HouseWindow";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const App = () => {
	const free = useSelector(store => store.house.free);
	const days = useSelector(store => store.house.days);

	return (
		<Container>
			<HouseWindow free={free} price={20000000} days={days} />
		</Container>
	);
};

export default App;
