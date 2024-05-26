import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { CirclePlus } from "lucide-react";

const Course = () => {
	return (
		<div className="relative flex items-center justify-between gap-2 md:gap-4">
			<Image
				src={"/test.jpg"}
				alt="Test user"
				height={1000}
				width={1000}
				className="rounded-full w-10 h-10 object-cover"
			/>
			<h3 className="flex-1 text-base">MTH1101</h3>

			<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2 cursor-pointer hover:bg-green-200 transition-all ease-in-out">
				<CirclePlus
					strokeWidth={0.5}
					className="w-6 h-6 text-green-600"
				/>
			</div>
		</div>
	);
};

export default Course;
