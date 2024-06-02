import React, { Suspense } from "react";
import Wrapper from "./_components/Wrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile | On Time",
};

const page = () => {
	return (
		<div className="container py-14">
			<h1 className="text-green-400 text-center md:text-left text-4xl md:text-5xl">
				My profile
			</h1>
			<Suspense fallback={"Nothing..."}>
				<Wrapper />
			</Suspense>
		</div>
	);
};

export default page;
