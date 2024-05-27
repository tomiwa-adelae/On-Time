"use client";

import { setCredentials } from "@/app/slices/authSlice";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { CloudUpload, Loader2, Pencil } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import { useDispatch, useSelector } from "react-redux";

export function ChangeImageModal() {
	const dispatch = useDispatch();
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	const onDrop = useCallback(
		(acceptedFiles: any) => {
			acceptedFiles.forEach(async (file: any) => {
				try {
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = async () => {
						try {
							const config = {
								headers: {
									"Content-type": "application/json",
									"x-auth-token": userInfo.token,
								},
							};

							const image = reader.result;
							setLoading(true);
							const res = await axios.put(
								`${BASE_URL}${USERS_URL}/image`,
								{ image },
								config
							);
							dispatch(setCredentials({ ...res.data }));

							setLoading(false);
							toast({
								title: "Success!",
								description:
									"You have successfully updated your profile picture!",
							});
						} catch (error: any) {
							toast({
								variant: "destructive",
								title: "Uh oh! Something went wrong.",
								description:
									"Internal server error. Upload another time.",
							});
							setLoading(false);
						} finally {
							setLoading(false);
						}
					};
				} catch (error: any) {
					toast({
						variant: "destructive",
						title: "Uh oh! Something went wrong.",
						description: error.response.data.message,
					});
					setLoading(false);
				} finally {
					setLoading(false);
				}
			});
		},
		[toast, dispatch, userInfo]
	);

	const { fileRejections, getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: { "image/jpeg": [], "image/png": [] },
	});

	useEffect(() => {
		fileRejections.map(({ file, errors }) => {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: `${errors[0].code} ${errors[0].message}`,
			});
		});
	}, [fileRejections, toast]);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="uppercase font-semibold">
					<Pencil className="w-4 h-4 mr-2" />
					Change image
				</Button>
			</SheetTrigger>
			<SheetContent className="overflow-y-auto">
				<SheetHeader className="text-left">
					<SheetTitle className="text-green-400 font-normal">
						Change image
					</SheetTitle>
					<SheetDescription className="text-xs">
						Upload a new image here. Click save when you&apos;re
						done.
					</SheetDescription>
				</SheetHeader>
				<div
					{...getRootProps({
						className:
							"border border-dashed border-gray-400 p-6 flex flex-col items-center justify-center gap-4 rounded-lg h-60 my-6",
					})}
				>
					<input {...getInputProps()} />
					{loading ? (
						<Loader2 className="h-8 w-8 animate-spin" />
					) : (
						<>
							<CloudUpload className="w-14 h-14 text-green-400" />
							<p className="text-xs md:text-sm text-center">
								Drag and drop some files here, or click to
								select files
							</p>
						</>
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
}
