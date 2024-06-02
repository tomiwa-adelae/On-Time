"use client";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useSelector } from "react-redux";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathName = usePathname();
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const date = searchParams.get("date");

	const { userInfo } = useSelector((state: any) => state.auth);

	if (userInfo === null)
		return redirect(`/signin?redirect=${pathName}&id=${id}&date=${date}`);

	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
		</div>
	);
}
