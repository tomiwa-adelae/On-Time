import { Separator } from "@/components/ui/separator";
import Course from "./Course";

const Courses = () => {
	return (
		<div className="space-y-4 mt-4">
			<Course />
			<Separator />
			<Course />
			<Separator />
			<Course />
			<Separator />
			<Course />
		</div>
	);
};

export default Courses;
