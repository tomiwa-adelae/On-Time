import React, { Suspense } from "react";
import { VerifyCodeForm } from "./_components/VerifyCodeForm";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Verify code | On Time",
};

const page = () => {
	return (
		<div className="container flex items-center justify-center py-20">
			<Suspense fallback={null}>
				<VerifyCodeForm />
			</Suspense>
		</div>
	);
};

export default page;
