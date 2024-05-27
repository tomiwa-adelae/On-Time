import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Clock3, School } from "lucide-react";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";

const AttendanceSuccess = ({
	title,
	code,
	date,
	lecturer,
}: {
	title: string;
	code: string;
	date: string;
	lecturer: string;
}) => {
	return (
		<div>
			<h1 className="text-green-400 text-center md:text-left text-4xl md:text-5xl">
				Success!
			</h1>
			<p className="text-xs md:text-sm text-center md:text-left mt-4">
				You have successfully checked into your class
			</p>
			<div className="space-y-4 mt-6">
				<div className="flex items-center justify-start gap-4">
					<div className="bg-green-100 p-4 rounded-lg">
						<School className="text-green-600" />
					</div>
					<div className="space-y-2">
						<h3 className="text-lg md:text-xl">{code}</h3>
						<p className="text-xs">{title}</p>
					</div>
				</div>
				<Separator />
				<div className="flex items-center justify-start gap-4">
					<div className="bg-green-100 p-4 rounded-lg">
						<Clock3 className="text-green-600" />
					</div>
					<div className="space-y-2">
						<h3 className="text-lg md:text-xl">
							<Moment format="DD/MMM/YYYY">{date}</Moment>
						</h3>
						<p className="text-xs">Lecturer: {lecturer}</p>
					</div>
				</div>
				<div>
					<Progress value={100} className="w-full mt-8" />
				</div>
				<p className="text-xs md:text-sm">
					You&apos;re all set. Enjoy your class
				</p>
				<Button
					className="uppercase w-full md:w-auto font-semibold px-12"
					asChild
				>
					<Link href="/dashboard">Return to dashboard</Link>
				</Button>
			</div>
		</div>
	);
};

export default AttendanceSuccess;
