import React from "react";
import BackgroundImage from "../../images/beach.jpeg";

function Home() {
	return (
		<>
			<img
				src={BackgroundImage}
				className="backgroundImage"
				style={{ width: "100%" }}
				alt="cover"
			/>
		</>
	);
}

export default Home;
