export const InfoIcon = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		fill="none"
		{...props}>
		<g clipPath="url(#a)" opacity={0.75}>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="m15 16 5-6-4-4 1 4-2 6ZM5 4l-5 6 4 4-2-4 3-6Zm3 3h4v10l-8 3L8 7Zm0-7h3v2l4-2-3 4-4 1V0Z"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h20v20H0z" />
			</clipPath>
		</defs>
	</svg>
);
