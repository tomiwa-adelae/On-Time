import React from "react";
import Course from "./Course";
import { Separator } from "./ui/separator";

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
			<Separator />
			<Course />
		</div>
	);
};

export default Courses;
