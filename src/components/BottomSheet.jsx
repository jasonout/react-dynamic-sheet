import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FixedBottom } from "react-fixed-bottom";
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";
import { componentWillAppendToBody } from "react-append-to-body";

import { ChildrenProps } from "@/constants/common-prop-types";
import Base from "@/components/common/Base";
import Overlay from "@/components/common/Overlay";

import { Container, Body, Background } from "./styles/sheet";

const MotionContainer = motion.custom(Container);

const SnapPoints = {
	Mini: { y: 80, name: "mini" },
	Mid: { y: 0.5, name: "mid" },
	Full: { y: -8, name: "full" }
};

const SnapPointCollections = {
	DefaultSheet: [SnapPoints.Mini, SnapPoints.Mid, SnapPoints.Full]
};

const MIN_OFFSET = 44;

const convertSnapPoint = (y, { bodyRect, visibleHeight, windowHeight }) => {
	if (y <= 1 && y >= 0) {
		return bodyRect.height - windowHeight * y;
	}

	if (y < 24) {
		return visibleHeight + MIN_OFFSET + Math.abs(y);
	}

	return bodyRect.height - MIN_OFFSET - y;
};

const makeSnapPoints = (
	snapPointDefinitions,
	{ bodyRect, visibleHeight, windowHeight }
) => {
	const points = snapPointDefinitions.map(pt => ({
		...pt,
		yPixel: convertSnapPoint(pt.y, { bodyRect, visibleHeight, windowHeight })
	}));

	return {
		getModeStateFromPixel: y => {
			return points.reduce(
				(acc, p) => {
					const diff = Math.abs(p.yPixel - y);

					if (diff < acc.closest) {
						acc.closest = diff;
						acc.closestSnap = p.name;
					}

					if (p.yPixel >= y) {
						acc.activeSnap = p.name;
					}

					return acc;
				},
				{ activeSnap: null, closest: 999999, closestSnap: null }
			);
		},
		toVariants: () => {
			return points.reduce(
				(acc, point) =>
					Object.assign(acc, { [point.name]: { y: point.yPixel } }),
				{}
			);
		}
	};
};

// Variants and sheet behaviour will change based on the size of the body relative to the viewport
const Sheet = ({
	children,
	type,
	onClose,
	snapPoints = SnapPointCollections.DefaultSheet,
	onClick,
	isModal,
	...props
}) => {
	const [isExpandable, setExpandable] = useState(false);
	// const [isExpanded, setExpanded] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [size, setSize] = useState(null);
	const controls = useAnimation();
	const bodyRef = useRef();

	let variants = {
		hidden: {
			y: "200%"
		}
	};

	let dragConstraints = {
		top: MIN_OFFSET - 8
	};

	let snapPointsManager = null;

	if (isExpandable) {
		const bodyRect = bodyRef.current.getBoundingClientRect();

		const visibleHeight = bodyRect.height - window.innerHeight;
		snapPointsManager = makeSnapPoints(snapPoints, {
			bodyRect,
			visibleHeight,
			windowHeight: window.innerHeight
		});

		variants = {
			...variants,
			// Convert to a pixel value for smooth transition
			hidden: {
				y: bodyRect.height * 2
			},
			...snapPointsManager.toVariants()
		};

		dragConstraints = {
			top: visibleHeight + MIN_OFFSET
		};

		/*
		console.log("woot:", dragConstraints);
		console.log(bodyRect.height, window.innerHeight);
		*/
	}

	const preventDefaultClick = (clickHandler = () => {}) => e => {
		// Prevent click from triggering Overlay click.
		e.preventDefault();
		e.stopPropagation();

		return clickHandler(e);
	};

	const onDrag = throttle(
		(event, info) => {
			const mode = snapPointsManager.getModeStateFromPixel(info.point.y);
			if (mode.closestSnap !== size) {
				setSize(mode.closestSnap);
			}
		},
		300,
		{
			trailing: false
		}
	);

	const onDragEnd = debounce(
		(event, info) => {
			// Requires much less to expand than to close.
			/* const shouldClose =
				(info.velocity.y > 20 && info.point.y > 0) ||
				(info.velocity.y >= 0 && info.point.y > 45);
			const shouldExpand = info.velocity.y <= 0; */

			const modeState = snapPointsManager.getModeStateFromPixel(
				info.point.y + info.velocity.y * 0.75
			);

			setSize(modeState.closestSnap);
			controls.start(modeState.closestSnap);
			/*
			if (isExpanded) {
				let x = 1;
				if (setExpanded) {
					x = 2;
				}

				x++;
			}
			*/

			// console.log(info);
			/*
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
			*/
		},
		250,
		{ leading: true, trailing: false }
	);

	useEffect(() => {
		if (mounted) {
			const bodyRect = bodyRef.current.getBoundingClientRect();

			// Is expandable if body in sheet is greater than half the viewport height.
			const isExp = bodyRect.height > window.innerHeight / 2;

			// console.log("useEffect => ", isExp, bodyRect.height, window.innerHeight);
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

	const overlayOnClick = {};

	if (type === "menu") {
		overlayOnClick.onClick = onClose;
	}

	return (
		<Base>
			<Overlay
				sx={{
					overflow: "hidden !important"
				}}
				className={`type-${type}`}
				type={type}
				{...overlayOnClick}
			>
				<FixedBottom>
					<MotionContainer
						sx={{
							color: "text",
							bg: "white"
						}}
						drag="y"
						dragElastic={0.005}
						onDrag={onDrag}
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
						<Body
							ref={bodyRef}
							className={`sz-${size}`}
							$isExpandable={isExpandable}
						>
							<slot name="dynamic-sheet-content">{children}</slot>
						</Body>
					</MotionContainer>
				</FixedBottom>
			</Overlay>
		</Base>
	);
};

const BottomSheet = ({ isOpen, ...props }) => (
	<AnimatePresence exitBeforeEnter>
		{isOpen && <Sheet {...props} />}
	</AnimatePresence>
);

Sheet.propTypes = {
	children: ChildrenProps.isRequired,
	onClose: PropTypes.func.isRequired,
	onClick: PropTypes.func,
	isModal: PropTypes.bool,
	type: PropTypes.string,
	snapPoints: PropTypes.arrayOf(PropTypes.object)
};

Sheet.defaultProps = {
	onClick() {},
	isModal: false,
	type: "modal",
	snapPoints: SnapPointCollections.DefaultSheet
};

BottomSheet.propTypes = {
	isOpen: PropTypes.bool
};

BottomSheet.defaultProps = {
	isOpen: false
};

export default componentWillAppendToBody(BottomSheet);
