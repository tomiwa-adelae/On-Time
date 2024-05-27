import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function NoAttendanceAlert() {
	return (
		<Alert variant="info">
			<TriangleAlert className="h-4 w-4" />
			<AlertTitle className="uppercase font-semibold">
				No Attendance!
			</AlertTitle>
			<AlertDescription className="text-xs md:text-sm">
				You have an empty list because you haven&apos;t attended this
				class at all.
			</AlertDescription>
		</Alert>
	);
}
