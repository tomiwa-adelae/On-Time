"use client";

import { SearchBox } from "./SearchBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { CreateCourseModal } from "@/components/CreateCourseModal";
import { AddCoursesModal } from "@/components/AddCoursesModal";
import { FolderSync } from "lucide-react";
import { NoCoursesAlert } from "@/components/NoCoursesAlert";
import StudentContainer from "./_student_components/StudentContainer";
import LecturerContainer from "./_lecturer_components/LecturerContainer";
import { StepLoader } from "@/components/StepLoader";

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
	const [filteredCourses, setFilteredCourses] = useState<CoursesProps>([]);

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
				const url = userInfo.isLecturer ? "lecturers" : "students/mine";

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
			} finally {
				setLoading(false);
			}
		};

		fetchCourses();
	}, [userInfo, toast]);

	const handleRefresh = async () => {
		try {
			setLoading(true);
			const config = {
				headers: {
					"Content-type": "application/json",
					"x-auth-token": userInfo.token,
				},
			};
			const url = userInfo?.isLecturer ? "lecturers" : "students/mine";

			const res = await axios(`${BASE_URL}${COURSES_URL}/${url}`, config);

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

	const handleSearch = (courses: any, keyword: any) => {
		if (!keyword) {
			return courses;
		}

		return courses.filter((item: any) => {
			if (userInfo.isLecturer) {
				return Object.values(item).some((value) =>
					String(value).toLowerCase().includes(keyword.toLowerCase())
				);
			} else {
				const course = item.course;
				const user = course.user;

				return (
					Object.values(course).some(
						(value) =>
							typeof value === "string" &&
							value.toLowerCase().includes(keyword.toLowerCase())
					) ||
					Object.values(user).some(
						(value) =>
							typeof value === "string" &&
							value.toLowerCase().includes(keyword.toLowerCase())
					)
				);
			}
		});
	};

	if (loading) return <StepLoader />;

	return (
		<div className="mt-8">
			<SearchBox
				searchKeyword={async (keyword: any) => {
					setFilteredCourses(handleSearch(courses, keyword));
				}}
			/>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
				<Card className="text-center p-8 space-y-8">
					<h4 className="text-base md:text-lg">Total courses</h4>
					<h3 className="text-xl md:text-2xl font-semibold text-green-400">
						{courses?.length}
					</h3>
				</Card>
				{userInfo.isLecturer ? (
					<CreateCourseModal />
				) : (
					<AddCoursesModal />
				)}
				<Card
					className="text-center cursor-pointer flex items-center justify-center p-8 space-y-8"
					onClick={handleRefresh}
				>
					<FolderSync
						strokeWidth={0.5}
						className="w-16 h-16 text-green-400 mx-auto"
					/>
				</Card>
			</div>
			{courses.length === 0 && <NoCoursesAlert />}
			{userInfo.isLecturer ? (
				<LecturerContainer
					courses={courses}
					filteredCourses={filteredCourses}
				/>
			) : (
				<StudentContainer
					courses={courses}
					filteredCourses={filteredCourses}
				/>
			)}
		</div>
	);
};

export default Wrapper;
