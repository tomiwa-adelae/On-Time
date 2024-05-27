"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { CreateCourseModal } from "./CreateCourseModal";
import { AddCoursesModal } from "./AddCoursesModal";

type CoursesProps = {
	_id: string;
	user: string;
	title: string;
	code: boolean;
	unit: number;
};

const Statistics = ({
	courses,
	isLecturer,
}: {
	courses: any;
	isLecturer: boolean;
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Card className="text-center p-8 space-y-8">
				<h4 className="text-base md:text-lg">Total courses</h4>
				<h3 className="text-xl md:text-2xl font-semibold text-green-400">
					{courses?.length}
				</h3>
			</Card>
			{isLecturer ? <CreateCourseModal /> : <AddCoursesModal />}
		</div>
	);
};

export default Statistics;
