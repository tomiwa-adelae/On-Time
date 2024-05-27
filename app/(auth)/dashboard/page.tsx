import React from "react";
import Wrapper from "./_components/Wrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard | On Time",
};

const page = () => {
	return (
		<div className="container py-14">
			<h1 className="text-green-400 text-center md:text-left text-4xl md:text-5xl">
				My Courses
			</h1>
			<Wrapper />
		</div>
	);
};

export default page;
