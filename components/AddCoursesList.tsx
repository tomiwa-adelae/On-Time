"use client";

import React, { useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import Courses from "./Courses";
import { useToast } from "./ui/use-toast";
import { useSelector } from "react-redux";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import { Loader2 } from "lucide-react";

interface Courses {
	_id: string;
	title: string;
	code: boolean;
	unit: number | string;
	user: () => void;
}
[];

type CoursesProps = Courses[];

const AddCoursesList = () => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(true);
	const [courses, setCourses] = useState<CoursesProps>([]);

	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
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
					`${BASE_URL}${COURSES_URL}/students`,
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
			} finally {
				setLoading(false);
			}
		};

		fetchCourses();
	}, [userInfo, toast]);

	return (
		<div className="my-6">
			<SearchBox
				successUpdate={(data: CoursesProps) => setCourses(data)}
			/>
			{loading && (
				<div className="flex items-center justify-center mt-10">
					<Loader2
						strokeWidth={0.75}
						className="h-10 w-10 animate-spin text-green-400"
					/>
				</div>
			)}
			{!loading && <Courses courses={courses} />}
		</div>
	);
};

export default AddCoursesList;
