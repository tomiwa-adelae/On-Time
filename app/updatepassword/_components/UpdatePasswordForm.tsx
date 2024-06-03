"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast, useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";

const FormSchema = z.object({
	newPassword: z.string().min(6, { message: "New password is required!" }),
	confirmPassword: z
		.string()
		.min(2, { message: "Confirm password is required!" }),
});

export function UpdatePasswordForm() {
	const searchParams = useSearchParams();

	const email = searchParams.get("email");
	const code = searchParams.get("code");
	const id = searchParams.get("id");

	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			newPassword: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		if (values.newPassword !== values.confirmPassword) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "Passwords do not match!",
			});
		} else {
			try {
				setLoading(true);
				const config = {
					headers: {
						"Content-type": "application/json",
					},
					withCredentials: true,
				};
				const newPassword = values.newPassword;
				const confirmPassword = values.confirmPassword;
				await axios.post(
					`${BASE_URL}${USERS_URL}/update-password/${id}/${code}`,
					{ id, code, newPassword, confirmPassword },
					config
				);
				setLoading(false);
				toast({
					title: "Successful!",
					description: "Please enter login with your new password",
				});
				router.push(`/signin`);
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
		}
	};

	return (
		<div className="w-full md:w-3/5">
			<h1 className="text-3xl text-center md:text-5xl md:text-left text-green-400 mb-6 w-full">
				Update password
			</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 w-full"
				>
					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>New password</FormLabel>
								<FormControl>
									<Input type="password"
										placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
										{...field}
									/>
								</FormControl>
								<FormDescription className="text-xs md:text-sm">
									This should be the new password you want to
									use.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm password</FormLabel>
								<FormControl>
									<Input type="password"
										placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
										{...field}
									/>
								</FormControl>
								<FormDescription className="text-xs md:text-sm">
									Rewrite the new password to confirm.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						className="uppercase font-semibold w-full md:w-auto"
						type="submit"
						disabled={loading}
					>
						{loading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
								Please wait
							</>
						) : (
							"Submit"
						)}
					</Button>
					<p className="text-sm text-center lg:text-center">
						Remembered your password already?{" "}
						<Link
							className="hover:underline hover:text-green-400"
							href="/sign"
						>
							Sign in now
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
}
