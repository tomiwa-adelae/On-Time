"use client";

import React from "react";
import { useSelector } from "react-redux";
import StudentContainer from "./_student_components/StudentContainer";
import LecturerContainer from "./_lecturer_components/LecturerContainer";

const Wrapper = ({ id }: { id: string }) => {
	const { userInfo } = useSelector((state: any) => state.auth);

	return (
		<div>
			{userInfo.isLecturer ? (
				<LecturerContainer id={id} />
			) : (
				<StudentContainer id={id} />
			)}
		</div>
	);
	// <AttendanceDates />
};

export default Wrapper;
