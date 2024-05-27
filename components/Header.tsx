"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ProfileDropDown } from "./ProfileDropDown";
import { useSelector } from "react-redux";

interface UserProps {
	_id: string;
	name: string;
	email: string;
	image: string;
	department: string;
	faculty: string;
	level: number;
	matricNumber: string;
	phoneNumber: string;
	isLecturer: boolean;
}

const Header = () => {
	const [user, setUser] = useState<UserProps>();
	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		if (userInfo) {
			return setUser(userInfo);
		}
	}, [userInfo]);

	return (
		<header className="py-4 border-b-2 bg-white border-gray-100">
			<div className="container flex items-center justify-between">
				<h3 className="text-xl transition-all duration-100 text-green-500 font-bold uppercase hover:underline hover:text-green-600">
					<Link href="/">On Time</Link>
				</h3>
				{user ? (
					<ProfileDropDown name={user.name} image={user.image} />
				) : (
					<Button asChild className="uppercase font-semibold">
						<Link href="/signin">Login</Link>
					</Button>
				)}
			</div>
		</header>
	);
};

export default Header;
