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
import { CirclePlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import AddCoursesList from "@/components/AddCoursesList";
import { CreateCourseForm } from "./CreateCourseForm";

export function CreateCourseModal() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Card className="text-center cursor-pointer flex items-center justify-center p-8 space-y-8">
					<CirclePlus
						strokeWidth={0.5}
						className="w-16 h-16 text-green-400 mx-auto"
					/>
				</Card>
			</SheetTrigger>
			<SheetContent className="overflow-y-auto">
				<SheetHeader className="text-left">
					<SheetTitle className="text-green-400 font-normal">
						Create a course
					</SheetTitle>
					<SheetDescription className="text-xs">
						Do you want to create a course you are teaching? Fill
						out the details below to get started.
					</SheetDescription>
				</SheetHeader>
				<CreateCourseForm />
				<SheetFooter>
					{/* <SheetClose asChild> */}
					{/* </SheetClose> */}
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
