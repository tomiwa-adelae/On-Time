import React from "react";
import Wrapper from "./_components/Wrapper";

const page = () => {
	return (
		<div className="container py-14">
			<h1 className="text-green-400 text-center md:text-left text-4xl md:text-5xl">
				Success!
			</h1>
			<p className="text-xs md:text-sm text-center md:text-left mt-4">
				You have successfully checked into your class
			</p>
			<Wrapper />
		</div>
	);
};

export default page;
