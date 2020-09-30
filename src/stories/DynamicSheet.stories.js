import React, { useState } from "react";
import BottomSheet from "../components/BottomSheet";

const App = () => {
	const [open, setOpen] = useState("");

	return (
		<>
			<button type="button" onClick={() => setOpen("small")}>
				Open Small Sheet
			</button>
			<BottomSheet isOpen={open === "small"} onClose={() => setOpen("")}>
				<div style={{ padding: "20px 20px 200px" }}>Hello World</div>
			</BottomSheet>
			<hr />
			<button type="button" onClick={() => setOpen("large")}>
				Open Large Sheet
			</button>
			<BottomSheet
				isOpen={open === "large"}
				onClose={() => setOpen("")}
				isModal
			>
				<div style={{ padding: "20px 20px 500px" }}>Swipe up and down</div>
			</BottomSheet>
		</>
	);
};

export default {
	title: "Example/BottomSheet",
	component: App
};

const Template = args => <App {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	user: {}
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
