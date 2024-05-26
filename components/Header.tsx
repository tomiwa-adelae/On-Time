import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ProfileDropDown } from "./ProfileDropDown";

const Header = () => {
	return (
		<header className="py-4 border-b-2 bg-white border-gray-100">
			<div className="container flex items-center justify-between">
				<h3 className="text-xl transition-all duration-100 text-green-500 font-bold uppercase hover:underline hover:text-green-600">
					<Link href="/">On Time</Link>
				</h3>
				{/* <Button asChild className="uppercase font-semibold">
					<Link href="/signin">Login</Link>
				</Button> */}
				<ProfileDropDown />
			</div>
		</header>
	);
};

export default Header;
