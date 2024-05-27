"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

const loadingStates = [
	{
		text: "Getting everything ready",
	},
	{
		text: "Loading all courses",
	},
	{
		text: "Fetching latest content",
	},
	{
		text: "Setting up your dashboard",
	},
	{
		text: "Almost there",
	},
	{
		text: "Ready to learn!",
	},
];

export function StepLoader() {
	const [loading, setLoading] = useState(true);
	return (
		<div className="w-full h-[60vh] flex items-center justify-center">
			<Loader
				loadingStates={loadingStates}
				loading={loading}
				duration={2000}
			/>
		</div>
	);
}
