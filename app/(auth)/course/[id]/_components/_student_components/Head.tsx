import { Card } from "@/components/ui/card";
import { ImagePlus, Mail, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const Head = ({
	title,
	code,
	email,
	name,
}: {
	title: string;
	name: string;
	code: string;
	email: string;
}) => {
	return (
		<div className="flex flex-col items-start justify-start md:flex-row gap-6 md:justify-between md:items-center">
			<div className="space-y-10">
				<h1 className="text-green-400 text-left text-4xl md:text-5xl">
					{code}
				</h1>
				<p className="text-left text-sm md:text-base">{title}</p>
				<h5 className="text-base">
					<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
						<UserRound className="inline w-4 h-4 text-green-600" />
					</div>
					{name}
				</h5>
				<h5 className="text-base">
					<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
						<Mail className="inline w-4 h-4 text-green-600" />
					</div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`mailto:${email}`}
						className="transition ease-in-out hover:underline hover:text-green-400"
					>
						{email}
					</a>
				</h5>
			</div>
		</div>
	);
};

export default Head;
