import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function NoAttendeesAlert() {
	return (
		<Alert variant="info">
			<TriangleAlert className="h-4 w-4" />
			<AlertTitle className="uppercase font-semibold">
				No Attendees yet!
			</AlertTitle>
			<AlertDescription className="text-xs md:text-sm">
				You have an empty list because no student attended this class on
				this date.
			</AlertDescription>
		</Alert>
	);
}
