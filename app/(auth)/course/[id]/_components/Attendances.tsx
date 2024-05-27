import { Separator } from "@/components/ui/separator";
import Attendance from "./Attendance";
// import { Badge } from "@/components/ui/badge";

const Attendances = () => {
	return (
		<div className="space-y-6">
			<h3 className="text-xl md:text-2xl mb-4">Attendance</h3>
			<p className="text-xs md:text-sm mb-4">
				You have attended this course 7 times
			</p>
			<Attendance />
			<Separator />
			<Attendance />
			<Separator />
			<Attendance />
			<Separator />
			<Attendance />
		</div>
	);
};

export default Attendances;
