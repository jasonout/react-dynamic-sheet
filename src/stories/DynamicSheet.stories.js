import React, { useState } from "react";
import styled from "styled-components";
import BottomSheet from "../components/BottomSheet";

const Test = styled.div`
	.cat-img {
		transition: * 250ms ease-in-out;
		height: 30px;
		width: 30px;
	}

	.sz-mid & .cat-img {
		border-radius: 50%;
		width: 24px;
		height: 24px;
		transition: * 250ms ease-in-out;
	}

	.sz-full & .cat-img {
		border-radius: 5px;
		width: 48px;
		height: 48px;
		transition: * 250ms ease-in-out;
	}
`;

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
			<BottomSheet isOpen={open === "large"} onClose={() => setOpen("")}>
				<div style={{ padding: "20px 20px 500px", color: "#fff" }}>
					<Test>
						<img
							className="cat-img"
							alt="Cat"
							src="https://cdn-ffhhbeta.pressidium.com/wp-content/uploads/2018/04/therapycatfeatured.jpg"
						/>
						<p>Swipe up and down</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
							cursus metus aliquam eleifend mi in. Quis lectus nulla at volutpat
							diam ut venenatis. Dignissim cras tincidunt lobortis feugiat
							vivamus at augue eget. Mauris sit amet massa vitae. Sed libero
							enim sed faucibus turpis in. Malesuada nunc vel risus commodo
							viverra. Rhoncus mattis rhoncus urna neque viverra. Quis ipsum
							suspendisse ultrices gravida. Duis convallis convallis tellus id.
							Mauris in aliquam sem fringilla.
						</p>

						<p>
							Mauris in aliquam sem fringilla ut morbi tincidunt. Eu turpis
							egestas pretium aenean pharetra magna ac placerat vestibulum.
							Aliquam eleifend mi in nulla posuere. Pharetra convallis posuere
							morbi leo urna molestie at elementum eu. Blandit aliquam etiam
							erat velit scelerisque in dictum. Felis imperdiet proin fermentum
							leo vel orci. Pellentesque pulvinar pellentesque habitant morbi
							tristique senectus et netus. Odio tempor orci dapibus ultrices.
							Amet mauris commodo quis imperdiet massa tincidunt. Vel pretium
							lectus quam id leo in. Tristique senectus et netus et malesuada
							fames ac. Elementum pulvinar etiam non quam lacus suspendisse
							faucibus interdum. At elementum eu facilisis sed odio morbi.
							Semper quis lectus nulla at volutpat diam ut venenatis. Velit
							euismod in pellentesque massa. Proin fermentum leo vel orci porta
							non pulvinar neque laoreet. Sagittis purus sit amet volutpat
							consequat mauris nunc congue.
						</p>

						<p>
							Pellentesque elit ullamcorper dignissim cras tincidunt lobortis
							feugiat. Habitasse platea dictumst quisque sagittis purus sit amet
							volutpat consequat. Fusce ut placerat orci nulla. Eget magna
							fermentum iaculis eu non diam phasellus. Mauris ultrices eros in
							cursus turpis massa tincidunt dui ut. Et netus et malesuada fames
							ac turpis. Ultrices mi tempus imperdiet nulla malesuada
							pellentesque. Tempor orci dapibus ultrices in iaculis. Id ornare
							arcu odio ut sem nulla pharetra diam sit. Ut pharetra sit amet
							aliquam id diam. Mattis vulputate enim nulla aliquet porttitor
							lacus luctus. Sapien eget mi proin sed. Vitae suscipit tellus
							mauris a. Volutpat sed cras ornare arcu dui vivamus. Ultricies leo
							integer malesuada nunc vel risus commodo viverra maecenas.
						</p>

						<p>
							Massa eget egestas purus viverra accumsan in nisl nisi. Commodo
							viverra maecenas accumsan lacus. Arcu bibendum at varius vel
							pharetra vel turpis nunc. Nibh venenatis cras sed felis eget velit
							aliquet sagittis id. Metus dictum at tempor commodo. Diam quam
							nulla porttitor massa id. Arcu cursus euismod quis viverra nibh
							cras pulvinar. Condimentum vitae sapien pellentesque habitant
							morbi tristique senectus. Ullamcorper a lacus vestibulum sed arcu
							non. Varius vel pharetra vel turpis nunc. Aliquet eget sit amet
							tellus cras adipiscing enim eu turpis. Sit amet nisl suscipit
							adipiscing bibendum. Netus et malesuada fames ac turpis egestas
							integer eget. Vel pretium lectus quam id. Porttitor lacus luctus
							accumsan tortor posuere ac ut.
						</p>

						<p>
							Arcu bibendum at varius vel. Pulvinar neque laoreet suspendisse
							interdum consectetur libero id faucibus. Pharetra et ultrices
							neque ornare aenean euismod elementum. Laoreet id donec ultrices
							tincidunt arcu non. Senectus et netus et malesuada. Ac placerat
							vestibulum lectus mauris ultrices eros in cursus turpis. Tortor at
							risus viverra adipiscing at. Aliquam nulla facilisi cras fermentum
							odio eu feugiat. Volutpat est velit egestas dui id. Malesuada nunc
							vel risus commodo.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
							cursus metus aliquam eleifend mi in. Quis lectus nulla at volutpat
							diam ut venenatis. Dignissim cras tincidunt lobortis feugiat
							vivamus at augue eget. Mauris sit amet massa vitae. Sed libero
							enim sed faucibus turpis in. Malesuada nunc vel risus commodo
							viverra. Rhoncus mattis rhoncus urna neque viverra. Quis ipsum
							suspendisse ultrices gravida. Duis convallis convallis tellus id.
							Mauris in aliquam sem fringilla.
						</p>

						<p>
							Mauris in aliquam sem fringilla ut morbi tincidunt. Eu turpis
							egestas pretium aenean pharetra magna ac placerat vestibulum.
							Aliquam eleifend mi in nulla posuere. Pharetra convallis posuere
							morbi leo urna molestie at elementum eu. Blandit aliquam etiam
							erat velit scelerisque in dictum. Felis imperdiet proin fermentum
							leo vel orci. Pellentesque pulvinar pellentesque habitant morbi
							tristique senectus et netus. Odio tempor orci dapibus ultrices.
							Amet mauris commodo quis imperdiet massa tincidunt. Vel pretium
							lectus quam id leo in. Tristique senectus et netus et malesuada
							fames ac. Elementum pulvinar etiam non quam lacus suspendisse
							faucibus interdum. At elementum eu facilisis sed odio morbi.
							Semper quis lectus nulla at volutpat diam ut venenatis. Velit
							euismod in pellentesque massa. Proin fermentum leo vel orci porta
							non pulvinar neque laoreet. Sagittis purus sit amet volutpat
							consequat mauris nunc congue.
						</p>

						<p>
							Pellentesque elit ullamcorper dignissim cras tincidunt lobortis
							feugiat. Habitasse platea dictumst quisque sagittis purus sit amet
							volutpat consequat. Fusce ut placerat orci nulla. Eget magna
							fermentum iaculis eu non diam phasellus. Mauris ultrices eros in
							cursus turpis massa tincidunt dui ut. Et netus et malesuada fames
							ac turpis. Ultrices mi tempus imperdiet nulla malesuada
							pellentesque. Tempor orci dapibus ultrices in iaculis. Id ornare
							arcu odio ut sem nulla pharetra diam sit. Ut pharetra sit amet
							aliquam id diam. Mattis vulputate enim nulla aliquet porttitor
							lacus luctus. Sapien eget mi proin sed. Vitae suscipit tellus
							mauris a. Volutpat sed cras ornare arcu dui vivamus. Ultricies leo
							integer malesuada nunc vel risus commodo viverra maecenas.
						</p>

						<p>
							Massa eget egestas purus viverra accumsan in nisl nisi. Commodo
							viverra maecenas accumsan lacus. Arcu bibendum at varius vel
							pharetra vel turpis nunc. Nibh venenatis cras sed felis eget velit
							aliquet sagittis id. Metus dictum at tempor commodo. Diam quam
							nulla porttitor massa id. Arcu cursus euismod quis viverra nibh
							cras pulvinar. Condimentum vitae sapien pellentesque habitant
							morbi tristique senectus. Ullamcorper a lacus vestibulum sed arcu
							non. Varius vel pharetra vel turpis nunc. Aliquet eget sit amet
							tellus cras adipiscing enim eu turpis. Sit amet nisl suscipit
							adipiscing bibendum. Netus et malesuada fames ac turpis egestas
							integer eget. Vel pretium lectus quam id. Porttitor lacus luctus
							accumsan tortor posuere ac ut.
						</p>

						<p>
							Arcu bibendum at varius vel. Pulvinar neque laoreet suspendisse
							interdum consectetur libero id faucibus. Pharetra et ultrices
							neque ornare aenean euismod elementum. Laoreet id donec ultrices
							tincidunt arcu non. Senectus et netus et malesuada. Ac placerat
							vestibulum lectus mauris ultrices eros in cursus turpis. Tortor at
							risus viverra adipiscing at. Aliquam nulla facilisi cras fermentum
							odio eu feugiat. Volutpat est velit egestas dui id. Malesuada nunc
							vel risus commodo.
						</p>
					</Test>
				</div>
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
