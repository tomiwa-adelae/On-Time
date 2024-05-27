"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { CirclePlus, Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { useSelector } from "react-redux";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import { useState } from "react";

const Course = ({
	_id,
	code,
	image,
	name,
}: {
	_id: string;
	code: string;
	image: string;
	name: string;
}) => {
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	const handleClick = async () => {
		try {
			setLoading(true);
			const config = {
				headers: {
					"Content-type": "application/json",
					"x-auth-token": userInfo.token,
				},
			};
			await axios.post(
				`${BASE_URL}${COURSES_URL}/students`,
				{ id: _id },
				config
			);

			toast({
				title: "Success!",
				description: "You have successfully added the course",
			});
			setLoading(false);
		} catch (error: any) {
			setLoading(false);
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: error.response.data.message,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="relative flex items-center justify-between gap-4">
			<Image
				src={image}
				alt={name}
				height={1000}
				width={1000}
				className="rounded-full w-10 h-10 object-cover"
			/>
			<h3 className="flex-1 text-base">{code}</h3>

			<Button
				onClick={handleClick}
				className="bg-green-100 p-2 inline rounded-lg mr-2 cursor-pointer hover:bg-green-200 transition-all ease-in-out"
				disabled={loading}
			>
				{loading ? (
					<Loader2 className="h-6 w-6 animate-spin text-green-600" />
				) : (
					<CirclePlus
						strokeWidth={0.5}
						className="w-6 h-6 text-green-600"
					/>
				)}
			</Button>
		</div>
	);
};

export default Course;
