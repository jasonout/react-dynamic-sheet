import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FixedBottom } from "react-fixed-bottom";
import debounce from "lodash.debounce";
import { componentWillAppendToBody } from "react-append-to-body";

import { ChildrenProps } from "@/constants/common-prop-types";
import Base from "@/components/common/Base";
// import Overlay from "@/components/common/Overlay";

import { Container, Body, Background } from "./styles/sheet";

const MotionContainer = motion.custom(Container);

// Variants and sheet behaviour will change based on the size of the body relative to the viewport
const Sheet = ({ children, onClose, onClick, isModal, ...props }) => {
	const [isExpandable, setExpandable] = useState(false);
	const [isExpanded, setExpanded] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [size, setSize] = useState(null);
	const controls = useAnimation();
	const bodyRef = useRef();

	let variants = {
		hidden: {
			y: "100%"
		},
		visible: {
			y: 0
		},
		small: {
			y: "80%"
		}
	};

	let dragConstraints = {
		top: 0
	};

	if (isExpandable) {
		const bodyRect = bodyRef.current.getBoundingClientRect();

		variants = {
			...variants,
			visible: {
				y: bodyRect.height - window.innerHeight / 2
			},
			expand: {
				y: bodyRect.height - (window.innerHeight - 50)
			},
			small: {
				y: bodyRect.height - 80
			}
		};

		dragConstraints = {
			top: bodyRect.height - window.innerHeight
		};
	}

	const preventDefaultClick = (clickHandler = () => {}) => e => {
		// Prevent click from triggering Overlay click.
		e.preventDefault();
		e.stopPropagation();

		return clickHandler(e);
	};

	const onDragEnd = debounce(
		(event, info) => {
			// Requires much less to expand than to close.
			const shouldClose =
				(info.velocity.y > 20 && info.point.y > 0) ||
				(info.velocity.y >= 0 && info.point.y > 45);
			const shouldExpand = info.velocity.y <= 0;

			if (shouldExpand && isExpandable) {
				controls.start("expand");
				setSize("expand");
				setExpanded(true);
			} else {
				if (
					shouldClose &&
					// Should be able to close from expanded position if big drag
					(isExpanded ? info.velocity.y >= 20 && info.point.y > 100 : true)
				) {
					if (!isModal) {
						controls.start("hidden");
						setSize("hidden");
						onClose();
					} else {
						controls.start("small");
						setSize("small");
					}
				} else if (shouldClose) {
					controls.start("small");
					setSize("small");
				} else {
					controls.start("visible");
					setSize("visible");
				}
				setExpanded(false);
			}
		},
		250,
		{ leading: true, trailing: false }
	);

	useEffect(() => {
		if (mounted) {
			const bodyRect = bodyRef.current.getBoundingClientRect();

			// Is expandable if body in sheet is greater than half the viewport height.
			const isExp = bodyRect.height > window.innerHeight / 2;
			setExpandable(isExp);
			if (isExp) {
				// Use function as variants change need a rerender
				controls.start(() => ({
					y: bodyRect.height - window.innerHeight / 2
				}));
				setSize("visible");
			}
		} else {
			setMounted(true);
		}
	}, [controls, mounted]);

	return (
		<Base>
			<FixedBottom>
				<MotionContainer
					sx={{
						color: "text",
						bg: "white"
					}}
					drag="y"
					onDragEnd={onDragEnd}
					dragConstraints={dragConstraints}
					dragPropagation
					variants={variants}
					initial="hidden"
					animate={controls}
					exit="hidden"
					transition={{ type: "tween", ease: "easeInOut" }}
					onClick={preventDefaultClick(onClick)}
					{...props}
				>
					<Background onClick={preventDefaultClick()} />
					<Body ref={bodyRef} className={`sz-${size}`}>
						<slot name="dynamic-sheet-content">{children}</slot>
					</Body>
				</MotionContainer>
			</FixedBottom>
		</Base>
	);
};

const BottomSheet = ({ isOpen, ...props }) => (
	<AnimatePresence>{isOpen && <Sheet {...props} />}</AnimatePresence>
);

Sheet.propTypes = {
	children: ChildrenProps.isRequired,
	onClose: PropTypes.func.isRequired,
	onClick: PropTypes.func,
	isModal: PropTypes.bool
};

Sheet.defaultProps = {
	onClick() {},
	isModal: false
};

BottomSheet.propTypes = {
	isOpen: PropTypes.bool
};

BottomSheet.defaultProps = {
	isOpen: false
};

export default componentWillAppendToBody(BottomSheet);
