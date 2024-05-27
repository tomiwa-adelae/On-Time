import { Separator } from "@/components/ui/separator";
import Attendee from "./Attendee";

const AttendeesList = () => {
	return (
		<div className="my-6 space-y-3">
			<Attendee />
			<Separator />
			<Attendee />
			<Separator />
			<Attendee />
			<Separator />
			<Attendee />
		</div>
	);
};

export default AttendeesList;
