import React from "react";
import { SignUpLecturerForm } from "./_components/SignUpLecturerForm";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lecturer | Sign up | On Time",
};

const page = () => {
	return (
		<div className="container flex items-center justify-center py-20">
			<SignUpLecturerForm />
		</div>
	);
};

export default page;
