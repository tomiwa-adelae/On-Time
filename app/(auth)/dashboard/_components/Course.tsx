import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Course = ({
	id,
	code,
	image,
	name,
	email,
}: {
	id: string;
	code: string;
	name: string;
	email: string;
	image: string;
}) => {
	return (
		<div className="flex items-center justify-between gap-4">
			<Image
				src={image}
				alt={name}
				height={1000}
				width={1000}
				className="rounded-lg w-16 h-16 object-cover"
			/>
			<div className="flex-1 space-y-1">
				<h3 className="text-base md:text-xl">{code}</h3>
				<p className="text-green-300 text-xs">
					{name},{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`mailto:${email}`}
						className="hover:underline"
					>
						{email}
					</a>
				</p>
			</div>
			<Button
				className="uppercase font-semibold bg-green-200 text-black text-xs hover:bg-green-300 transition duration-100 ease-in-out"
				asChild
			>
				<Link href={`/course/${id}`}>
					<Eye className="w-4 h-4 md:hidden" />
					<span className="hidden md:block">View course</span>
				</Link>
			</Button>
		</div>
	);
};

export default Course;
