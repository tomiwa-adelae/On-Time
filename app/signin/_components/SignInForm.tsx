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
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";

const FormSchema = z.object({
	email: z.string().email({ message: "Email is required!" }),
	password: z.string().min(3, { message: "Password is required!" }),
});

export function SignInForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	}

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
					>
						Submit
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
				</form>
			</Form>
		</div>
	);
}
