"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
	currentPassword: z
		.string()
		.min(2, { message: "Current password is required!" }),
	newPassword: z
		.string()
		.min(6, { message: "New password should be at least 6 characters!" }),
	confirmPassword: z
		.string()
		.min(6, { message: "Confirm password is required!" }),
});

export function ChangePasswordForm() {
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
	});

	// 2. Define a submit handler.
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
						"x-auth-token": userInfo.token,
					},
				};

				const res = await axios.put(
					`${BASE_URL}${USERS_URL}/password`,
					values,
					config
				);
				setLoading(false);
				toast({
					title: "Success!",
					description: "You have successfully updated your password!",
				});
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
		<div className="my-6">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<FormField
						control={form.control}
						name="currentPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Current password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>New password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
										{...field}
									/>
								</FormControl>
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
									<Input
										type="password"
										placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className="uppercase w-full font-semibold"
						type="submit"
						disabled={loading}
					>
						{loading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
								Please wait
							</>
						) : (
							"Save changes"
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
}
