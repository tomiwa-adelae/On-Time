import { NoClassesAlert } from "../NoClassesAlert";
import { AttendancesModal } from "./AttendancesModal";
import { useRouter } from "next/navigation";

const AttendanceDates = ({
	classDates,
	id,
}: {
	classDates: any;
	id: string;
}) => {
	return (
		<div className="space-y-6">
			<h3 className="text-xl md:text-2xl mb-4">Past classes</h3>
			<p className="text-xs md:text-sm mb-4">
				Theses are the classes you&apos;ve had with this course
			</p>
			{classDates?.length === 0 && <NoClassesAlert />}
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
				{classDates?.map((date: string, index: number) => (
					<AttendancesModal key={index} date={date} id={id} />
				))}
			</div>
		</div>
	);
};

export default AttendanceDates;
