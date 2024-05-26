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

export function AddCoursesModal() {
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
						Add courses
					</SheetTitle>
					<SheetDescription className="text-xs">
						Are you interested in adding more courses? Add the ones
						you want and be good to go.
					</SheetDescription>
				</SheetHeader>
				<AddCoursesList />
				<SheetFooter>
					<SheetClose asChild>
						<Button
							className="uppercase w-full font-semibold"
							type="submit"
						>
							Save changes
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
