import { Separator } from "@/components/ui/separator";
import Course from "./Course";

const Courses = ({ courses }: any) => {
	return (
		<div>
			{courses.map(
				(course: {
					_id: string;
					code: string;
					image: string;
					name: string;
					email: string;
					course: any;
				}) => (
					<div key={course._id}>
						<Course
							code={course.course.code}
							image={course.course.user.image}
							name={course.course.user.name}
							email={course.course.user.email}
						/>
						<Separator className="my-6" />
					</div>
				)
			)}
		</div>
	);
};

export default Courses;
