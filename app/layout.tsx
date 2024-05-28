import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./provider";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "On Time",
	description:
		"The best attendance management applicaction with QR Code implementation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Providers>
					<div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
						<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div>
						<Header />
						<div className="min-h-[80vh]">{children}</div>
						<Footer />
						<Toaster />
					</div>
				</Providers>
			</body>
		</html>
	);
}
