import React from "react";
import { SignUpForm } from "./_components/SignUpForm";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign up | On Time",
};

const page = () => {
	return (
		<div className="container flex items-center justify-center py-20">
			<SignUpForm />
		</div>
	);
};

export default page;
