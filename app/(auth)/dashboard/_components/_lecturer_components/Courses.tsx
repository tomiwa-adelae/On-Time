import { Separator } from "@/components/ui/separator";
import Course from "./Course";

const Courses = ({ courses }: any) => {
	return (
		<div>
			{courses?.map(
				(course: {
					_id: string;
					code: string;
					title: string;
					user: {
						name: string;
						image: string;
					};
				}) => (
					<div key={course._id}>
						<Course
							id={course._id}
							code={course.code}
							image={course.user.image}
							name={course.user.name}
							title={course.title}
						/>
						<Separator className="my-6" />
					</div>
				)
			)}
		</div>
	);
};

export default Courses;
