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
import { LockKeyhole, Pencil } from "lucide-react";
import { ChangePasswordForm } from "./ChangePasswordForm";

export function ChangePasswordModal() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="flex items-center justify-start cursor-pointer px-2 hover:bg-slate-100 transition ease-in-out py-4 text-sm">
					<LockKeyhole className="mr-2 h-4 w-4" />
					<span>Change password</span>
				</div>
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
