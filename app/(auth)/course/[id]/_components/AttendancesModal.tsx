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

export function AttendancesModal() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Card className="text-center p-8 space-y-8 cursor-pointer">
					<h4 className="text-base md:text-lg">12-May-2024</h4>
				</Card>
			</SheetTrigger>
			<SheetContent className="overflow-y-auto">
				<SheetHeader className="text-left">
					<SheetTitle className="text-green-400 font-normal">
						12-May-2024
					</SheetTitle>
					<SheetDescription className="text-xs">
						These are the students that attended you class on this
						date
					</SheetDescription>
				</SheetHeader>
				<AttendeesList />
			</SheetContent>
		</Sheet>
	);
}
