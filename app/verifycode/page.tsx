import React, { Suspense } from "react";
import { VerifyCodeForm } from "./_components/VerifyCodeForm";

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
