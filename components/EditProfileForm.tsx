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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { setCredentials } from "@/app/slices/authSlice";
import { Loader2 } from "lucide-react";

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
});

export function EditProfileForm() {
	const dispatch = useDispatch();
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: userInfo.name,
			email: userInfo.email,
			matricNumber: userInfo.matricNumber,
			phoneNumber: userInfo.phoneNumber,
			level: userInfo.level,
			department: userInfo.department,
			faculty: userInfo.faculty,
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		try {
			setLoading(true);

			const config = {
				headers: {
					"Content-type": "application/json",
					"x-auth-token": userInfo.token,
				},
			};

			const res = await axios.put(
				`${BASE_URL}${USERS_URL}/profile`,
				values,
				config
			);
			dispatch(setCredentials({ ...res.data }));
			setLoading(false);
			toast({
				title: "Success!",
				description: "You have successfully updated your profile",
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
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="John Doe" {...field} />
								</FormControl>
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
									Matriculation/admission number
								</FormLabel>
								<FormControl>
									<Input
										placeholder="example@gmail.com"
										{...field}
									/>
								</FormControl>
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
