import React from "react";
import PropTypes from "prop-types";
import root from "react-shadow/styled-components";
import { createGlobalStyle } from "styled-components";
import modernNormalize from "modern-normalize"; // Imports as string as per rollup config

const GlobalStyle = createGlobalStyle`
	${modernNormalize}
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

const Encapsulate = ({ style, children, ...rest }) => {
	return (
		<root.div
			style={{
				display: "block",
				overflow: "scroll",
				WebkitOverflowScrolling: "touch",
				border: 0,
				...style
			}}
			{...rest}
		>
			<GlobalStyle />
			{children}
		</root.div>
	);
};

Encapsulate.propTypes = {
	style: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};

Encapsulate.defaultProps = {
	style: {}
};

export default Encapsulate;
