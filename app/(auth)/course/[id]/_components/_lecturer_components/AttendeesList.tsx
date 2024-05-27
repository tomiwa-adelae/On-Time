"use client";

import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ATTENDANCE_URL, BASE_URL } from "@/app/slices/constants";
import axios from "axios";
import Attendee from "./Attendee";
import { Loader2 } from "lucide-react";
import { NoAttendeesAlert } from "./NoAttendeesAlert";

const AttendeesList = ({ id, date }: { id: string; date: string }) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);

	const [attendees, setAttendees] = useState<any>([]);

	const { userInfo } = useSelector((state: any) => state.auth);


	useEffect(() => {
		const fetchAttendees = async () => {
			try {
				setLoading(true);
				const config = {
					headers: {
						"Content-type": "application/json",
						"x-auth-token": userInfo.token,
					},
				};

				const res = await axios(
					`${BASE_URL}${ATTENDANCE_URL}/${id}/${date}`,
					config
				);

				setAttendees(res.data);
				setLoading(false);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
			} finally {
				setLoading(false);
			}
		};

		fetchAttendees();
	}, [toast, userInfo, id, date]);

	if (loading)
		return (
			<div className="flex items-center justify-center mt-10">
				<Loader2
					strokeWidth={0.75}
					className="h-10 w-10 animate-spin text-green-400"
				/>
			</div>
		);

	return (
		<div className="my-6 space-y-3">
			{attendees.length === 0 && <NoAttendeesAlert />}
			{attendees?.map((attendee: any) => (
				<div key={attendee._id}>
					<Attendee
						name={attendee.student.name}
						email={attendee.student.email}
						image={attendee.student.image}
					/>
					<Separator />
				</div>
			))}
		</div>
	);
};

export default AttendeesList;
