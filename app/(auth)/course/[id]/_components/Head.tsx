import { Card } from "@/components/ui/card";
import { ImagePlus, Mail, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const Head = ({ isLecturer }: { isLecturer: boolean }) => {
	return (
		<div className="flex flex-col items-start justify-start md:flex-row gap-6 md:justify-between md:items-center">
			<div className="space-y-10">
				<h1 className="text-green-400 text-left text-4xl md:text-5xl">
					MTH1101
				</h1>
				<p className="text-left text-sm md:text-base">
					Mathematical methods ii
				</p>
				<h5 className="text-base">
					<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
						<UserRound className="inline w-4 h-4 text-green-600" />
					</div>
					Tomiwa Adelae
				</h5>
				<h5 className="text-base">
					<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
						<Mail className="inline w-4 h-4 text-green-600" />
					</div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="/"
						className="transition ease-in-out hover:underline hover:text-green-400"
					>
						tomiwaadelae@gmail.com
					</a>
				</h5>
			</div>
			{isLecturer && (
				<Card className="w-full md:w-auto text-center cursor-pointer flex items-center justify-center p-8 space-y-8">
					<div>
						<ImagePlus
							strokeWidth={0.5}
							className="w-16 h-16 text-green-400 mx-auto"
						/>
						<p className="text-xs mt-4 font-semibold">
							Generate QR Code
						</p>
					</div>
					{/* <Image
					src={
						""
					}
					alt="Test Image"
					height={1000}
					width={1000}
					className="w-full h-full aspect-square object-cover"
				/> */}
				</Card>
			)}
		</div>
	);
};

export default Head;
