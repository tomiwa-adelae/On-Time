import { Badge, BadgeCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const Attendee = ({
	name,
	email,
	image,
}: {
	name: string;
	email: string;
	image: string;
}) => {
	return (
		<div className="flex items-center justify-between gap-2 md:gap-4">
			<Image
				src={image}
				alt={name}
				height={1000}
				width={1000}
				className="rounded-full w-10 h-10 object-cover"
			/>
			<div className="flex-1 space-y-1">
				<h3 className="text-base md:text-lg">{name}</h3>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={`mailto:${email}`}
					className="text-green-300 text-xs transition ease-in-out hover:underline hover:text-green-300"
				>
					{email}
				</a>
			</div>
			<Badge>
				<BadgeCheck className="w-4 h-4 text-green-400" />
			</Badge>
		</div>
	);
};

export default Attendee;
