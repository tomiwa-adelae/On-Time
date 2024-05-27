"use client";

import React from "react";
import Head from "./Head";
import { Separator } from "@/components/ui/separator";
import { useSelector } from "react-redux";
import StudentContainer from "./_student_components/StudentContainer";
import LecturerContainer from "./_lecturer_components/LecturerContainer";

const Wrapper = ({ id }: { id: string }) => {
	const { userInfo } = useSelector((state: any) => state.auth);

	return (
		<div>
			<Head isLecturer={userInfo.isLecturer} />
			<Separator className="my-10" />
			{userInfo.isLecturer ? (
				<LecturerContainer />
			) : (
				<StudentContainer id={id} />
			)}
		</div>
	);
	// <AttendanceDates />
};

export default Wrapper;
