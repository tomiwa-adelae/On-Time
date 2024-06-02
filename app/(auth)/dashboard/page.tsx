import React, { Suspense } from "react";
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
			<Suspense fallback={<div>Loading...</div>}>
				<Wrapper />
			</Suspense>
		</div>
	);
};

export default page;
