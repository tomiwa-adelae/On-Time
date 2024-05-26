import React from "react";
import { SearchBox } from "./SearchBox";
import Courses from "./Courses";

const AddCoursesList = () => {
	return (
		<div className="my-6">
			<SearchBox />
			<Courses />
		</div>
	);
};

export default AddCoursesList;
