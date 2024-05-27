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
import { Pencil } from "lucide-react";
import { ChangePasswordForm } from "../../../../components/ChangePasswordForm";

export function ChangePasswordModal() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="uppercase w-full md:w-auto font-semibold">
					<Pencil className="mr-2 w-4 h-4" />
					Change password
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className="text-left">
					<SheetTitle className="text-green-400 font-normal">
						Change password
					</SheetTitle>
					<SheetDescription className="text-xs">
						Make changes to your password here. Click save when
						you&apos;re done.
					</SheetDescription>
				</SheetHeader>
				<ChangePasswordForm />
			</SheetContent>
		</Sheet>
	);
}
