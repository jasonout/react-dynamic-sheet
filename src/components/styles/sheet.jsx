import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	border-radius: 9px 9px 0 0;
	box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
		0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
	border-top: solid 1px rgba(108, 108, 108, 0.25);
	backdrop-filter: blur(20px);
	opacity: 0.85;
	position: relative;
	left: 0;
	right: 0;
	background-color: #000;
`;

export const Background = styled.div`
	position: absolute;
	left: -100px;
	right: -100px;
	top: 100px;
	bottom: -999999px;
	border-radius: inherit;
	background: inherit;
`;

export const Body = styled.div`
	position: relative;
	padding: 30px 20px 20px;
	overflow: auto;
	z-index: 5;
	position: relative;
	bottom: 0px;
	min-height: 100vh;

	&:before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 8px;
		height: 6px;
		width: 32px;
		background-color: #888;
		opacity: 0.5;
		border-radius: 100px;
		margin: 0 auto;
		z-index: 100;
		border: none;
		outline: 0;
	}
`;
