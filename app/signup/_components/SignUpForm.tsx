"use client";

import { useRouter } from "next/navigation";
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
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

import { setCredentials } from "@/app/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

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
				`${BASE_URL}${USERS_URL}`,
				values,
				config
			);
			dispatch(setCredentials({ ...res.data }));
			setLoading(false);
			toast({
				title: "Success!",
				description: "You have successfully created an account",
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
		<div className="w-full md:w-4/5">
			<h1 className="text-3xl text-center md:text-5xl lg:text-left text-green-400 mb-6 w-full">
				Personal Information
			</h1>
			<p className="text-xs text-center lg:text-left mb-4 md:text-sm">
				Let&apos; create your account so you can access your classes at
				On Time |{" "}
				<Link
					className="transition ease-in-out hover:underline hover:text-green-400"
					href="/signuplecturer"
				>
					Create an account as a lecturer
				</Link>
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
						name="phoneNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone number</FormLabel>
								<FormControl>
									<Input
										placeholder="09012345678"
										{...field}
									/>
								</FormControl>
								<FormDescription className="text-xs md:text-sm">
									This is your public phone number.
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
										type="password"
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
						Already have an account?{" "}
						<Link
							className="transition ease-in-out hover:underline hover:text-green-400"
							href="/signin"
						>
							Sign in now
						</Link>
					</p>
					<Separator />

					<p className="text-sm text-center lg:text-center">
						Are you a lecturer?{" "}
						<Link
							className="transition ease-in-out hover:underline hover:text-green-400"
							href="/signuplecturer"
						>
							Create a lecturer account now
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
}
