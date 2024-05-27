import React from "react";
import Courses from "./Courses";

const StudentContainer = ({ courses, filteredCourses }: any) => {
	return (
		<Courses
			courses={filteredCourses.length !== 0 ? filteredCourses : courses}
		/>
	);
};

export default StudentContainer;
