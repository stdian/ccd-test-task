import { configureStore, createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
	name: "house",
	initialState: {
		free: true,
		days: 0,
	},
	reducers: {
		buy: state => {
			state.free = false;
			state.days = 1;
		},
		pay: state => {
			if (state.days < 31) state.days += 1;
		},
	},
});

export const { buy, pay } = houseSlice.actions;

const store = configureStore({
	reducer: {
		house: houseSlice.reducer,
	},
});

export default store;
