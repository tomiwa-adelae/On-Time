"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import AttendeesList from "./AttendeesList";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ATTENDANCE_URL, BASE_URL } from "@/app/slices/constants";

export function AttendancesModal({ date, id }: { date: string; id: string }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Card className="text-center p-8 space-y-8 cursor-pointer">
					<h4 className="text-base md:text-lg">{date}</h4>
				</Card>
			</SheetTrigger>
			<SheetContent className="overflow-y-auto">
				<SheetHeader className="text-left">
					<SheetTitle className="text-green-400 font-normal">
						{date}
					</SheetTitle>
					<SheetDescription className="text-xs">
						These are the students that attended you class on this
						date
					</SheetDescription>
				</SheetHeader>
				<AttendeesList date={date} id={id} />
			</SheetContent>
		</Sheet>
	);
}
