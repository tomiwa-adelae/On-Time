import React from "react";
import { Suspense } from "react";
import { UpdatePasswordForm } from "./_components/UpdatePasswordForm";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Update password | On Time",
};

const page = () => {
	return (
		<div className="container flex items-center justify-center py-20">
			<Suspense fallback={null}>
				<UpdatePasswordForm />
			</Suspense>
		</div>
	);
};

export default page;
