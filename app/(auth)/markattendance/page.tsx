import React, { Suspense } from "react";
import Wrapper from "./_components/Wrapper";

const page = () => {
	return (
		<div className="container py-14">
			<h1 className="text-green-400 text-center md:text-left text-4xl md:text-5xl">
				Mark attendance for this class
			</h1>
			<Suspense fallback={null}>
				<Wrapper />
			</Suspense>
		</div>
	);
};

export default page;
