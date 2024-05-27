"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

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
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

import { setCredentials } from "@/app/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const FormSchema = z.object({
	email: z.string().email({ message: "Email is required!" }),
	password: z.string().min(3, { message: "Password is required!" }),
});

export function SignInForm() {
	const { toast } = useToast();

	const dispatch = useDispatch();
	const router = useRouter();

	const { userInfo } = useSelector((state: any) => state.auth);

	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (userInfo) {
			return router.push("/dashboard");
		}
	}, [userInfo, router]);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		try {
			setLoading(true);
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			const res = await axios.post(
				`${BASE_URL}${USERS_URL}/auth`,
				values,
				config
			);
			dispatch(setCredentials({ ...res.data }));
			setLoading(false);
			toast({
				title: "Success!",
				description: "You have successfully signed into your account",
			});
			router.push("/dashboard");
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
				Sign into your account
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
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
										{...field}
									/>
								</FormControl>
								<FormDescription className="text-xs md:text-sm">
									This should be the password you registered
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
						Don&apos; have an account?{" "}
						<Link
							className="hover:underline hover:text-green-400"
							href="/signup"
						>
							Create one now
						</Link>
					</p>
					<Separator />
					<p className="text-sm text-center lg:text-center">
						Forgot your password?{" "}
						<Link
							className="hover:underline hover:text-green-400"
							href="/resetpassword"
						>
							Reset password
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
}
