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
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { EditProfileForm } from "./EditProfileForm";

export function EditProfileModal() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="flex items-center justify-start cursor-pointer px-2 hover:bg-slate-100 transition ease-in-out py-4 text-sm">
					<Pencil className="mr-2 h-4 w-4" />
					<span>Edit Profile</span>
				</div>
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
