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
import { toast, useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { setCredentials } from "@/app/slices/authSlice";

const FormSchema = z.object({
	name: z.string().min(4, { message: "Name is required!" }),
	email: z.string().email({ message: "Email is required!" }),
	phoneNumber: z
		.string()
		.min(10, { message: "Phone number is required!" })
		.max(11, { message: "Enter valid number" }),
	department: z.string().min(3, { message: "Department is required!" }),
	faculty: z.string().min(3, { message: "Department is required!" }),
	password: z
		.string()
		.min(6, { message: "Password should be at least 6 characters!" }),
});

export function SignUpLecturerForm() {
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
			phoneNumber: "",
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
				`${BASE_URL}${USERS_URL}/lecturer`,
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
				Let&apos; create a lecturer account so you can create courses
				and have student take your classes at On Time |{" "}
				<Link
					className="transition ease-in-out hover:underline hover:text-green-400"
					href="/signup"
				>
					Create an account as a student
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
									This is your public display phone number.
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
										<SelectItem value="Accounting & Finance">
											Accounting & Finance
										</SelectItem>
										<SelectItem value="Agricultural economics">
											Agricultural economics
										</SelectItem>
										<SelectItem value="Architecture">
											Architecture
										</SelectItem>
										<SelectItem value="Banking & Finance">
											Banking & Finance
										</SelectItem>
										<SelectItem value="Biochemistry">
											Biochemistry
										</SelectItem>
										<SelectItem value="Business Administration">
											Business Administration
										</SelectItem>
										<SelectItem value="Civil Engineering">
											Civil Engineering
										</SelectItem>
										<SelectItem value="Computer Engineering">
											Computer Engineering
										</SelectItem>
										<SelectItem value="Computer Science">
											Computer Science
										</SelectItem>
										<SelectItem value="Crop & Animal Science">
											Crop & Animal Science
										</SelectItem>
										<SelectItem value="Economics">
											Economics
										</SelectItem>
										<SelectItem value="Electrical Engineering">
											Electrical Engineering
										</SelectItem>
										<SelectItem value="English">
											English
										</SelectItem>
										<SelectItem value="Entrepreneurship studies">
											Entrepreneurship studies
										</SelectItem>
										<SelectItem value="Environmental Health Science">
											Environmental Health Science
										</SelectItem>
										<SelectItem value="Estate Management">
											Estate Management
										</SelectItem>
										<SelectItem value="Geo-Informatics">
											Geo-Informatics
										</SelectItem>
										<SelectItem value="Geology">
											Geology
										</SelectItem>
										<SelectItem value="History">
											History
										</SelectItem>
										<SelectItem value="Industrial Chemistry">
											Industrial Chemistry
										</SelectItem>
										<SelectItem value="Industrial Relations & Personnel Management">
											Industrial Relations & Personnel
											Management
										</SelectItem>
										<SelectItem value="International Studies">
											International Studies
										</SelectItem>
										<SelectItem value="Law">Law</SelectItem>
										<SelectItem value="Library & Information Science">
											Library & Information Science
										</SelectItem>
										<SelectItem value="Mass Communication">
											Mass Communication
										</SelectItem>
										<SelectItem value="Mathematics">
											Mathematics
										</SelectItem>
										<SelectItem value="Mechanical Engineering">
											Mechanical Engineering
										</SelectItem>
										<SelectItem value="Medical Lab Science">
											Medical Lab Science
										</SelectItem>
										<SelectItem value="Microbiology">
											Microbiology
										</SelectItem>
										<SelectItem value="Nursing">
											Nursing
										</SelectItem>
										<SelectItem value="Peace Studies & Conflict Resolution">
											Peace Studies & Conflict Resolution
										</SelectItem>
										<SelectItem value="Performing Arts & Musics">
											Performing Arts & Musics
										</SelectItem>
										<SelectItem value="Physics">
											Physics
										</SelectItem>
										<SelectItem value="Political Science">
											Political Science
										</SelectItem>
										<SelectItem value="Radiography & Radiation Science">
											Radiography & Radiation Science
										</SelectItem>
										<SelectItem value="Religious Studies">
											Religious Studies
										</SelectItem>
										<SelectItem value="Statistics">
											Statistics
										</SelectItem>
										<SelectItem value="Surveying">
											Surveying
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
										<SelectItem value="Agriculture">
											Agriculture
										</SelectItem>
										<SelectItem value="Basic Medical Science">
											Basic Medical Science
										</SelectItem>
										<SelectItem value="Communication & Media Studies">
											Communication & Media Studies
										</SelectItem>
										<SelectItem value="Education">
											Education
										</SelectItem>
										<SelectItem value="Environmental Science">
											Environmental Science
										</SelectItem>
										<SelectItem value="Humanities">
											Humanities
										</SelectItem>
										<SelectItem value="Law">Law</SelectItem>
										<SelectItem value="Management Science">
											Management Science
										</SelectItem>
										<SelectItem value="Natural Science">
											Natural Science
										</SelectItem>
										<SelectItem value="Peace Studies & Conflict Resolution">
											Peace Studies & Conflict Resolution
										</SelectItem>
										<SelectItem value="Social Science">
											Social Science
										</SelectItem>
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
						Are you a student?{" "}
						<Link
							className="transition ease-in-out hover:underline hover:text-green-400"
							href="/signup"
						>
							Create a student account now
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
}
