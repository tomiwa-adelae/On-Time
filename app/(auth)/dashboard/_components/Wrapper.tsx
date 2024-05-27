"use client";

import { SearchBox } from "./SearchBox";
import Courses from "./Courses";
import Statistics from "@/components/Statistics";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

interface Courses {
	_id: string;
	user: string;
	title: string;
	code: boolean;
	unit: number | string;
}
[];

type CoursesProps = Courses[];

const Wrapper = () => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);
	const [courses, setCourses] = useState<CoursesProps>([]);

	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		const url = userInfo.isLecturer ? "lecturers" : "students/mine";
		const fetchCourses = async () => {
			try {
				setLoading(true);
				const config = {
					headers: {
						"Content-type": "application/json",
						"x-auth-token": userInfo.token,
					},
				};

				const res = await axios(
					`${BASE_URL}${COURSES_URL}/${url}`,
					config
				);

				setCourses(res.data);
				setLoading(false);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
			}
		};

		fetchCourses();
	}, [userInfo, toast]);

	if (loading) return null;

	return (
		<div className="mt-8">
			<SearchBox />
			<div className="my-8">
				<Statistics
					courses={courses}
					isLecturer={userInfo.isLecturer}
				/>
			</div>
			<Courses courses={courses} />
		</div>
	);
};

export default Wrapper;
