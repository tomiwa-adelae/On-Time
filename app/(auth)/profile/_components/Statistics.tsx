import { Card } from "@/components/ui/card";
import { CirclePlus } from "lucide-react";
import React from "react";
import { AddCoursesModal } from "./AddCoursesModal";

const Statistics = () => {
	return (
		<div>
			<h3 className="text-xl md:text-2xl mb-6">Statistics</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card className="text-center p-8 space-y-8">
					<h4 className="text-base md:text-lg">Total courses</h4>
					<h3 className="text-xl md:text-2xl font-semibold text-green-400">
						24
					</h3>
				</Card>
				<AddCoursesModal />
			</div>
		</div>
	);
};

export default Statistics;
