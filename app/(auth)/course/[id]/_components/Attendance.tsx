import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const Attendance = () => {
	return (
		<div className="flex items-center justify-between gap-2 md:gap-4">
			<Image
				src={"/test.jpg"}
				alt="Test user"
				height={1000}
				width={1000}
				className="rounded-full w-10 h-10 object-cover"
			/>
			<div className="flex-1 space-y-1">
				<h3 className="text-base md:text-xl">MTH1101</h3>
				<p className="text-sky-300 text-sm">12/May/2024</p>
			</div>
			<Badge>Attended</Badge>
		</div>
	);
};

export default Attendance;
