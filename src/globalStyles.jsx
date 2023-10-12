import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	* {
		font-family: Roboto, sans-serif;
		padding: 0;
		margin: 0;
		-webkit-font-smoothing: antialiased;
		font-family: GT Walsheim Pro;
	  	
		&::-webkit-scrollbar {
			display: none;
		}
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	html, body {
		width: 100%;
		height: 100%;
	}
	
	#root {
		height: 100%;
	}
`;

export default GlobalStyles;
