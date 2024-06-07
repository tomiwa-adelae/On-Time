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
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
	email: z.string().email({ message: "Email is required!" }),
});

export function ResetPasswordForm() {
	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		setLoading(true);
		const config = {
			headers: {
				"Content-type": "application/json",
			},
			withCredentials: true,
		};

		try {
			await axios.post(
				`${BASE_URL}${USERS_URL}/reset-password`,
				values,
				config
			);
			setLoading(false);
			toast({
				title: "Successful!",
				description:
					"Please enter the code we just sent to your email inbox",
			});
			router.push(`/verifycode?email=${values.email}`);
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
		<div className="w-full md:w-3/5">
			<h1 className="text-3xl text-center md:text-5xl md:text-left text-green-400 mb-6 w-full">
				Reset password
			</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 w-full"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="example@gmail.com"
										{...field}
									/>
								</FormControl>
								<FormDescription className="text-xs md:text-sm">
									This should be the email you registered
									with.
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
							href="/signin"
						>
							Sign in now
						</Link>
					</p>
					<Separator />
					<p className="text-sm text-center lg:text-center">
						Don&apos; have an account?{" "}
						<Link
							className="hover:underline hover:text-green-400"
							href="/signup"
						>
							Create one now
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
}
