import React from "react";
import { SearchBox } from "./SearchBox";
import Courses from "./Courses";

const Wrapper = () => {
	return (
		<div className="mt-8">
			<SearchBox />
			<Courses />
		</div>
	);
};

export default Wrapper;
