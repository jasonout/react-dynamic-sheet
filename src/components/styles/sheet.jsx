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
	background-color: #fff;
	box-sizing: content-box;

	.type-menu & {
		background-color: unset;
		border-top: 0;
		box-shadow: none;
		backdrop-filter: none;
		opacity: 0.945;
	}
`;

export const CloseButton = styled.div`
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.25);
	width: 28px;
	height: 28px;
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	text-transform: lowercase;
	color: var(--colors-text, #fff);
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
	padding: 30px 8px calc(30px + env(safe-area-inset-bottom, 0px)) 8px;
	overflow: auto;
	z-index: 5;
	position: relative;
	bottom: 0px;
	min-height: calc(100vh - env(safe-area-inset-top, 0px) * 2);
	max-height: calc(100vh - env(safe-area-inset-top, 0px) * 2);
	padding-bottom: calc(30px + env(safe-area-inset-bottom, 0px)) !important;
	box-sizing: content-box;

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

	& [name="dynamic-sheet-content"] > *:first-child {
		padding-bottom: calc(env(safe-area-inset-bottom) + 8px);
		top: 30px;
		right: 0px;
		left: 0px;
		max-height: calc(100vh - 96px);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow-y: scroll !important;
	}

	.type-menu & {
		min-height: unset;
		padding-bottom: max(env(safe-area-inset-bottom, 0px), 8px) !important;

		& [name="dynamic-sheet-content"] > *:first-child {
			padding-bottom: unset;
		}

		:before {
			display: none;
		}
	}
`;
