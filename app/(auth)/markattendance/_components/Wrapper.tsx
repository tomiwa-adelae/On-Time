"use client";

import { ATTENDANCE_URL, BASE_URL } from "@/app/slices/constants";
import { StepLoader } from "@/components/StepLoader";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AttendanceSuccess from "./AttendanceSuccess";

const Wrapper = () => {
	const { toast } = useToast();
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const date = searchParams.get("date");

	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<any>();

	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		const markAttendance = async () => {
			try {
				setLoading(true);
				const config = {
					headers: {
						"Content-type": "application/json",
						"x-auth-token": userInfo.token,
					},
				};
				const res = await axios.post(
					`${BASE_URL}${ATTENDANCE_URL}/${id}/mark-as-attended/${date}`,
					{},
					config
				);

				if (res.data.message) {
					toast({
						title: "Success!",
						description: res.data.message,
					});
					setSuccess(res.data.attendance);
				} else {
					setSuccess(res.data);
				}
			} catch (error: any) {
				// setLoading(false);
				console.log(error);
				// toast({
				// 	variant: "destructive",
				// 	title: "Uh oh! Something went wrong.",
				// 	description: error.response.data.message,
				// });
			} finally {
				setLoading(false);
			}
		};

		markAttendance();
	}, [date, id, userInfo, toast]);

	if (loading) return <StepLoader />;

	return (
		<>
			{success && (
				<AttendanceSuccess
					title={success.course.title}
					code={success.course.code}
					date={success.createdAt}
					lecturer={success.user.name}
				/>
			)}
		</>
	);
};

export default Wrapper;
