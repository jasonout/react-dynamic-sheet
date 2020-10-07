import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { ChildrenProps } from "@/constants/common-prop-types";

import Modal from "./Modal";
import BottomSheet from "./BottomSheet";

const DynamicSheet = ({
	children,
	isOpen,
	onClose,
	confirmClose,
	confirmCloseMessage,
	type
}) => {
	const isMobile = window.innerWidth < 450;

	const abort = () => {
		if (confirmClose) {
			const confirm = window.confirm(confirmCloseMessage); // eslint-disable-line
			if (!confirm) {
				return false;
			}
		}

		return onClose();
	};

	// See: https://stackoverflow.com/questions/3888902/detect-browser-or-tab-closing
	const beforeUnload = message => e => {
		(e || window.event).returnValue = message;
		return message;
	};

	useEffect(() => {
		const fn = beforeUnload(confirmCloseMessage);
		if (confirmClose) {
			window.onbeforeunload = fn;
			window.addEventListener("beforeunload", fn, false);
		}

		return () => {
			window.onbeforeunload = null;
			window.removeEventListener("beforeunload", fn, false);
		};
	}, [confirmClose, confirmCloseMessage]);

	if (isMobile) {
		return (
			<BottomSheet isOpen={isOpen} onClose={abort} type={type}>
				{children}
			</BottomSheet>
		);
	}

	return (
		<Modal isOpen={isOpen} onClose={abort} type={type}>
			{children}
		</Modal>
	);
};

DynamicSheet.propTypes = {
	children: ChildrenProps.isRequired,
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	confirmClose: PropTypes.bool,
	confirmCloseMessage: PropTypes.string,
	type: PropTypes.string
};

DynamicSheet.defaultProps = {
	isOpen: false,
	onClose() {},
	confirmClose: false,
	confirmCloseMessage: "Are you sure you would like to abort the checkout?",
	type: "modal"
};

export default DynamicSheet;
