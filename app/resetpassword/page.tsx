import React from "react";
import { ResetPasswordForm } from "./_components/ResetPasswordForm";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Forgot password | On Time",
};

const page = () => {
	return (
		<div className="container flex items-center justify-center py-20">
			<ResetPasswordForm />
		</div>
	);
};

export default page;
