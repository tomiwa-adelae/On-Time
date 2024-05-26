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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";

const FormSchema = z.object({
	name: z.string().min(4, { message: "Name is required!" }),
	email: z.string().email({ message: "Email is required!" }),
	matricNumber: z
		.string()
		.min(8, { message: "Matriculation/Admission number is required!" })
		.max(12, { message: "Enter valid matriculation/admission number!" }),
	phoneNumber: z
		.string()
		.min(10, { message: "Phone number is required!" })
		.max(11, { message: "Enter valid number" }),
	level: z.string().min(3, { message: "Academic level is required!" }),
	department: z.string().min(3, { message: "Department is required!" }),
	faculty: z.string().min(3, { message: "Department is required!" }),
	password: z
		.string()
		.min(6, { message: "Password should be at least 6 characters!" }),
});

export function SignUpForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			matricNumber: "",
			phoneNumber: "",
			level: "",
			department: "",
			faculty: "",
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
		<div className="w-full md:w-4/5">
			<h1 className="text-3xl text-center md:text-5xl lg:text-left text-green-400 mb-6 w-full">
				Personal Information
			</h1>
			<p className="text-xs text-center lg:text-left mb-4 md:text-sm">
				Let&apos; create your account so you can access your classes at
				On Time
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 w-full"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="John Doe" {...field} />
								</FormControl>
								<FormDescription className="text-xs md:text-sm">
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
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
									This is your public display email.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="matricNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Matriculation/Admission number
								</FormLabel>
								<FormControl>
									<Input
										placeholder="example@gmail.com"
										{...field}
									/>
								</FormControl>
								<FormDescription className="text-xs md:text-sm">
									This is your public display
									matriculation/admission number.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="level"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Level</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select your level" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="100">100</SelectItem>
										<SelectItem value="200">200</SelectItem>
										<SelectItem value="300">300</SelectItem>
										<SelectItem value="400">400</SelectItem>
										<SelectItem value="500">500</SelectItem>
									</SelectContent>
								</Select>
								<FormDescription>
									This is your public display faculty.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="department"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Department</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select your department" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="physics">
											physics
										</SelectItem>
										<SelectItem value="computer science">
											computer science
										</SelectItem>
										<SelectItem value="biochemistry">
											biochemistry
										</SelectItem>
										<SelectItem value="nursing">
											nursing
										</SelectItem>
									</SelectContent>
								</Select>
								<FormDescription>
									This is your public display department.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="faculty"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Faculty</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select your faculty" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="natural science">
											natural science
										</SelectItem>
										<SelectItem value="management science">
											management science
										</SelectItem>
										<SelectItem value="law">law</SelectItem>
									</SelectContent>
								</Select>
								<FormDescription>
									This is your public display faculty.
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
									This is your authentication password.
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
						Already have an account?{" "}
						<Link
							className="hover:underline hover:text-green-400"
							href="/signin"
						>
							Sign in now
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
}
