import React, { Suspense } from "react";
import Wrapper from "./_components/Wrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Success | On Time",
};

const page = () => {
	return (
		<div className="container py-14">
			<Suspense fallback={"Nothing..."}>
				<Wrapper />
			</Suspense>
		</div>
	);
};

export default page;
