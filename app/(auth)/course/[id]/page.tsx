import React from "react";
import Wrapper from "./_components/Wrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Course | On Time",
};

const page = ({ params }: { params: { id: string } }) => {
	return (
		<div className="container py-14">
			<Wrapper id={params.id} />
		</div>
	);
};

export default page;
