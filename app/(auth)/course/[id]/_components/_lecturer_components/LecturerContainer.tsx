"use client";
import { ATTENDANCE_URL, BASE_URL, COURSES_URL } from "@/app/slices/constants";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Course {
	_id: string;
	date: string;
	course: {
		code: string;
		user: {
			name: string;
			image: string;
		};
	};
}

const LecturerContainer = ({ id }: { id: string }) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);

	const [course, setCourse] = useState<Course>();

	console.log(course);

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

				setCourse(res.data);
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

	if (loading) return null;

	return <div>LecturerContainer</div>;
};

export default LecturerContainer;
