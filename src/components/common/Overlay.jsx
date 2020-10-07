import React from "react";
import { motion } from "framer-motion";
import { ChildrenProps } from "@/constants/common-prop-types";
import { Overlay as StyledOverlay } from "@/components/styles/common";
import PropTypes from "prop-types";

const MotionOverlay = motion.custom(StyledOverlay);

const Overlay = React.forwardRef(({ children, type, ...props }, ref) => {
	return (
		<MotionOverlay
			ref={ref}
			variants={{
				hidden: {
					backgroundColor: "rgba(0, 0, 0, 0)",
					pointerEvents: "none"
				},
				visible: {
					backgroundColor:
						type === "menu" ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.8)",
					pointerEvents: "auto"
				}
			}}
			initial="hidden"
			animate="visible"
			exit="hidden"
			transition={{ duration: 0.25 }}
			{...props}
		>
			{children}
		</MotionOverlay>
	);
});

Overlay.propTypes = {
	children: ChildrenProps.isRequired,
	type: PropTypes.string
};

Overlay.defaultProps = {
	type: "modal"
};

export default Overlay;
