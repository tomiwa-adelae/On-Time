import { Separator } from "@/components/ui/separator";
import { Clock3, School } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Wrapper = () => {
	return (
		<div className="space-y-4 mt-6">
			<div className="flex items-center justify-start gap-4">
				<div className="bg-green-100 p-4 rounded-lg">
					<School className="text-green-600" />
				</div>
				<div className="space-y-2">
					<h3 className="text-lg md:text-xl">Yoga Class</h3>
					<p className="text-xs">Modern physics</p>
				</div>
			</div>
			<Separator />
			<div className="flex items-center justify-start gap-4">
				<div className="bg-green-100 p-4 rounded-lg">
					<Clock3 className="text-green-600" />
				</div>
				<div className="space-y-2">
					<h3 className="text-lg md:text-xl">12/May/2024, 2:30PM</h3>
					<p className="text-xs">Lecturer: Dr.Paul Amalu</p>
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
				<Link href="/">Return to dashboard</Link>
			</Button>
		</div>
	);
};

export default Wrapper;
