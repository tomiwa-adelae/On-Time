import { Separator } from "@/components/ui/separator";
import Head from "./Head";
import { Card } from "@/components/ui/card";
import { CreateCourseModal } from "@/components/CreateCourseModal";
import { AddCoursesModal } from "@/components/AddCoursesModal";

const Wrapper = () => {
	return (
		<div>
			<Head />
			<Separator className="my-10" />
			<h3 className="text-xl md:text-2xl mb-6">Statistics</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
				<Card className="text-center p-8 space-y-8">
					<h4 className="text-base md:text-lg">Total courses</h4>
					<h3 className="text-xl md:text-2xl font-semibold text-green-400">
						{/* {courses?.length} */}
					</h3>
				</Card>
				{/* {userInfo.isLecturer ? (
						<CreateCourseModal />
					) : (
						<AddCoursesModal />
					)} */}
			</div>
		</div>
	);
};

export default Wrapper;
