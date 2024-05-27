import { BASE_URL, QRCODE_URL } from "@/app/slices/constants";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { ImagePlus, Loader2, Mail, UserRound } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Head = ({
	id,
	title,
	code,
	email,
	name,
}: {
	id: string;
	title: string;
	name: string;
	code: string;
	email: string;
}) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);
	const [qrCode, setQrCode] = useState<string>();

	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		const fetchQrCode = async () => {
			try {
				setLoading(true);
				const config = {
					headers: {
						"Content-type": "application/json",
						"x-auth-token": userInfo.token,
					},
				};

				const res = await axios(
					`${BASE_URL}${QRCODE_URL}/generate/${id}`,
					config
				);

				setQrCode(res.data.qrCode);
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
		fetchQrCode();
	}, [userInfo, id, toast]);

	const generateQRCode = async () => {
		try {
			setLoading(true);

			const date = new Date();

			// Get day, month and year from the date object
			const day = date.getDate();
			const month = date.toLocaleString("default", { month: "long" });
			const year = date.getFullYear();

			// Format the date as "day month, year"
			const formattedDate = `${day} ${month}, ${year}`;

			const config = {
				headers: {
					"Content-type": "application/json",
					"x-auth-token": userInfo.token,
				},
			};

			const res = await axios.post(
				`${BASE_URL}${QRCODE_URL}/generate/${id}`,
				{ date: formattedDate },
				config
			);

			setQrCode(res.data);
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
		<div className="flex flex-col items-start justify-start md:flex-row gap-6 md:justify-between md:items-center">
			<div className="space-y-10">
				<h1 className="text-green-400 text-left text-4xl md:text-5xl">
					{code}
				</h1>
				<p className="text-left text-sm md:text-base">{title}</p>
				<h5 className="text-base">
					<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
						<UserRound className="inline w-4 h-4 text-green-600" />
					</div>
					{name}
				</h5>
				<h5 className="text-base">
					<div className="bg-green-100 p-2 md:p-4 inline rounded-lg mr-2">
						<Mail className="inline w-4 h-4 text-green-600" />
					</div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`mailto:${email}`}
						className="transition ease-in-out hover:underline hover:text-green-400"
					>
						{email}
					</a>
				</h5>
			</div>
			{qrCode ? (
				<Card className="w-full md:w-auto text-center cursor-pointer flex items-center justify-center p-8 space-y-8">
					<Image
						src={qrCode}
						alt={title}
						width={1000}
						height={1000}
						className="w-full h-full aspect-square object-cover"
					/>
				</Card>
			) : (
				<Card
					onClick={generateQRCode}
					className="w-full md:w-auto text-center cursor-pointer flex items-center justify-center p-8 space-y-8"
				>
					{loading ? (
						<div className="flex items-center justify-center">
							<Loader2
								strokeWidth={0.75}
								className="h-10 w-10 animate-spin text-green-400"
							/>
						</div>
					) : (
						<div>
							<ImagePlus
								strokeWidth={0.5}
								className="w-16 h-16 text-green-400 mx-auto"
							/>
							<p className="text-xs mt-4 font-semibold">
								Generate QR Code
							</p>
						</div>
					)}
				</Card>
			)}
		</div>
	);
};

export default Head;
