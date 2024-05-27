"use client";

import React, { useEffect, useState } from "react";
import Attendance from "./Attendance";
import { Separator } from "@/components/ui/separator";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { ATTENDANCE_URL, BASE_URL } from "@/app/slices/constants";
import { NoAttendanceAlert } from "./NoAttendanceAlert";
import Head from "./Head";

interface Attendance {
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
[];

type AttendanceProps = Attendance[];

const StudentContainer = ({ id }: { id: string }) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);

	const [attendance, setAttendance] = useState<AttendanceProps>([]);

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
					`${BASE_URL}${ATTENDANCE_URL}/${id}`,
					config
				);

				setAttendance(res.data);
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
	}, [toast, userInfo, id]);

	if (loading) return null;

	return (
		<div>
			<Head />
			<Separator className="my-10" />
			<div className="space-y-6">
				<h3 className="text-xl md:text-2xl mb-4">Attendance</h3>
				<p className="text-xs md:text-sm mb-4">
					You have attended this course {attendance.length} times
				</p>
				{attendance.length === 0 && <NoAttendanceAlert />}
				{attendance.map((attendance) => (
					<div key={attendance._id}>
						<Attendance
							code={attendance.course.code}
							image={attendance.course.user.image}
							name={attendance.course.user.name}
							date={attendance.date}
						/>
						<Separator className="my-6" />
					</div>
				))}
			</div>
		</div>
	);
};

export default StudentContainer;
