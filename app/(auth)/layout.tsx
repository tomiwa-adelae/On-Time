"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { userInfo } = useSelector((state: any) => state.auth);

	// if (userInfo === null) return redirect("/signin");
	return <div>{children}</div>;
}
