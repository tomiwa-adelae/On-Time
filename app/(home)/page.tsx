import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex items-center justify-center container text-center py-20">
			<div>
				<h1 className="text-4xl md:text-5xl lg:text-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-neutral-500">
					Welcome to <span className="text-green-400">On</span>
					<span className="text-green-600"> Time</span>
				</h1>
				<p className="text-xs md:text-sm mt-4 mb-6">
					The best way to manage your time and improve your grades.
				</p>
				<Button className="uppercase px-12 font-semibold" asChild>
					<Link href="/signup">Get started</Link>
				</Button>
			</div>
		</div>
	);
}
