import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Hash, Lock, Mail, Pencil, Phone, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import { EditProfileModal } from "./EditProfileModal";
import { ChangePasswordModal } from "./ChangePasswordModal";

const Head = () => {
	return (
		<div>
			<div className="mt-8 md:mt-14 flex flex-col-reverse md:flex-row gap-10 items-center justify-start md:justify-between">
				<div className="space-y-10">
					<h5 className="text-base">
						<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
							<UserRound className="inline w-4 h-4 text-green-600" />
						</div>
						Tomiwa Adelae
					</h5>
					<h5 className="text-base">
						<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
							<Mail className="inline w-4 h-4 text-green-600" />
						</div>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="/"
							className="transition ease-in-out hover:underline hover:text-green-400"
						>
							tomiwaadelae@gmail.com
						</a>
					</h5>
					<h5 className="text-base uppercase">
						<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
							<Hash className="inline w-4 h-4 text-green-600" />
						</div>
						20N07001
					</h5>
					<h5 className="text-base">
						<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
							<Phone className="inline w-4 h-4 text-green-600" />
						</div>
						+234 708 4563 111
					</h5>
				</div>
				<Image
					src={"/test.jpg"}
					alt="Test user"
					height={1000}
					width={1000}
					className="w-24 h-24 object-cover rounded-full md:w-36 md:h-36 lg:w-44 lg:h-44"
				/>
			</div>
			<EditProfileModal />
			<Separator className="my-10" />
			<div>
				<h3 className="text-lg md:text-xl">
					<Lock className="inline w-4 h-4 text-green-600" /> Password
				</h3>
				<div className="mt-6 flex flex-col md:flex-row items-start justify-between gap-6">
					<p className="text-xs md:text-sm text-gray-400">
						&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;
					</p>
					<ChangePasswordModal />
				</div>
			</div>
		</div>
	);
};

export default Head;
