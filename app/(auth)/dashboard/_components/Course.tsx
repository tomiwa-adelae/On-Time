import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Course = () => {
	return (
		<div className="relative flex items-center justify-between gap-2 md:gap-4">
			<Image
				src={"/test.jpg"}
				alt="Test user"
				height={1000}
				width={1000}
				className="rounded-lg w-16 h-16 object-cover"
			/>
			<div className="flex-1 space-y-1">
				<h3 className="text-base md:text-xl">MTH1101</h3>
				<p className="text-sky-300 text-xs">Dr. Paul, paul@gmail.com</p>
			</div>
			<Button
				className="uppercase font-semibold bg-green-200 text-black text-xs hover:bg-green-300 transition duration-100 ease-in-out"
				asChild
			>
				<Link href="/">View course</Link>
			</Button>
		</div>
	);
};

export default Course;
