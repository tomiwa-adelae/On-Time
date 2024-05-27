import { Card } from "@/components/ui/card";
import { ImagePlus, Mail, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const Head = () => {
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
						"data:image/png;base64,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"
					}
					alt="Test Image"
					height={1000}
					width={1000}
					className="w-full h-full aspect-square object-cover"
				/> */}
			</Card>
		</div>
	);
};

export default Head;
