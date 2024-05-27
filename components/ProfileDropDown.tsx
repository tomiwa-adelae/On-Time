import {
	LogOut,
	User,
	LockKeyhole,
	LayoutDashboard,
	Pencil,
} from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { EditProfileModal } from "./EditProfileModal";
import { ChangePasswordModal } from "./ChangePasswordModal";

export function ProfileDropDown({
	name,
	image,
}: {
	name: string;
	image: string;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Image
					src={image}
					alt={name}
					height={1000}
					width={1000}
					className="w-10 h-10 rounded-full cursor-pointer object-cover"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-72">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href="/dashboard">
					<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
						<LayoutDashboard className="mr-2 h-4 w-4" />
						<span>Dashboard</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator />
				<Link href="/profile">
					<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
						<User className="mr-2 h-4 w-4" />
						<span>My Profile</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator />
				<EditProfileModal />
				<DropdownMenuSeparator />
				<ChangePasswordModal />

				{/* <DropdownMenuSeparator /> */}
				{/* {isAdmin && (
					<Link href="/admindashboard">
						<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
							<LayoutDashboard className="mr-2 h-4 w-4" />
							<span>Admin dashboard</span>
						</DropdownMenuItem>
					</Link>
				)} */}
				<DropdownMenuSeparator />

				<DropdownMenuItem
					// onClick={handleLogout}
					className="transition ease-in-out cursor-pointer py-4 hover:bg-slate-100 text-destructive font-semibold"
				>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
