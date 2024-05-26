import { EditProfileForm } from "@/components/EditProfileForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Pencil } from "lucide-react";

export function EditProfileModal() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="uppercase mt-10 font-semibold mx-auto w-full md:w-auto">
					<Pencil className="mr-2 w-4 h-4" />
					Edit profile
				</Button>
			</SheetTrigger>
			<SheetContent className="overflow-y-auto">
				<SheetHeader className="text-left">
					<SheetTitle className="text-green-400 font-normal">
						Edit profile
					</SheetTitle>
					<SheetDescription className="text-xs">
						Make changes to your profile here. Click save when
						you&apos;re done.
					</SheetDescription>
				</SheetHeader>
				<EditProfileForm />
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
