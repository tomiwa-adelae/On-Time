"use client";

import { StepLoader } from "@/components/StepLoader";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Wrapper = () => {
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const date = searchParams.get("date");

	useEffect(() => {}, []);

	// return <StepLoader />;
	return <></>;
};

export default Wrapper;
