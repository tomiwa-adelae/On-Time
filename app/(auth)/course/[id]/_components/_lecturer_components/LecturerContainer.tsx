"use client";
import { ATTENDANCE_URL, BASE_URL, COURSES_URL } from "@/app/slices/constants";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Head from "./Head";
import AttendeesList from "./AttendeesList";
import { Separator } from "@/components/ui/separator";
import AttendanceDates from "./AttendanceDates";
import { StepLoader } from "@/components/StepLoader";

interface Course {
	_id: string;
	code: string;
	title: string;
	user: {
		name: string;
		email: string;
	};
}

const LecturerContainer = ({ id }: { id: string }) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);

	const [course, setCourse] = useState<Course>();
	const [classDates, setClassDates] = useState<any>();

	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		const fetchCourse = async () => {
			try {
				setLoading(true);
				const config = {
					headers: {
						"Content-type": "application/json",
						"x-auth-token": userInfo.token,
					},
				};

				const res = await axios(
					`${BASE_URL}${COURSES_URL}/lecturers/${id}`,
					config
				);

				const response = await axios(
					`${BASE_URL}${ATTENDANCE_URL}/${id}/class/dates`,
					config
				);

				setCourse(res.data);
				setClassDates(response.data);
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

		fetchCourse();
	}, [toast, userInfo, id]);

	if (loading) return <StepLoader />;

	return (
		<div>
			<Head
				id={id}
				name={course?.user.name!}
				email={course?.user.email!}
				title={course?.title!}
				code={course?.code!}
			/>
			<Separator className="my-10" />
			<AttendanceDates classDates={classDates} id={id} />
		</div>
	);
};

export default LecturerContainer;
