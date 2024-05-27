import React from "react";
import Head from "./Head";
import { Separator } from "@/components/ui/separator";
import Attendances from "./Attendances";
import AttendanceDates from "./AttendanceDates";

const Wrapper = () => {
	return (
		<div>
			<Head />
			<Separator className="my-10" />
			<Attendances />
			{/* <AttendanceDates /> */}
		</div>
	);
};

export default Wrapper;
