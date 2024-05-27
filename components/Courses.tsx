import React from "react";
import Course from "./Course";
import { Separator } from "./ui/separator";

const Courses = ({ courses }: any) => {
	return (
		<div className="mt-6">
			{courses.map(
				(course: {
					_id: string;
					code: string;
					user: any;
					name: string;
					image: string;
				}) => (
					<div key={course._id}>
						<Course
							_id={course._id}
							code={course.code}
							image={course.user.image}
							name={course.user.name}
						/>
						<Separator className="my-4" />
					</div>
				)
			)}
		</div>
	);
};

export default Courses;
