import { Card } from "@/components/ui/card";
import React from "react";
import { NoClassesAlert } from "./NoClassesAlert";
import { AttendancesModal } from "./AttendancesModal";

const AttendanceDates = () => {
	return (
		<div className="space-y-6">
			<h3 className="text-xl md:text-2xl mb-4">Past classes</h3>
			<p className="text-xs md:text-sm mb-4">
				Theses are the classes you&apos;ve had with this course
			</p>
			{/* <NoClassesAlert /> */}
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
				<AttendancesModal />
			</div>
		</div>
	);
};

export default AttendanceDates;
