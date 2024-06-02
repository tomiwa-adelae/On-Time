import React, { Suspense } from "react";
import { SignInForm } from "./_components/SignInForm";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign in | On Time",
};

const page = () => {
	return (
		<div className="container flex items-center justify-center py-20">
			<Suspense fallback={"Nothing..."}>
				<SignInForm />
			</Suspense>
		</div>
	);
};

export default page;
