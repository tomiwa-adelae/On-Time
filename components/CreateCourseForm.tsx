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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
	title: z.string().min(2, { message: "Course title is required!" }),
	code: z
		.string()
		.min(7, { message: "Course code should be least 7 characters!" })
		.max(7, { message: "Course code should be least 7 characters!" }),
	unit: z.string().min(1, { message: "Course unit is required!" }),
});

export function CreateCourseForm() {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: "",
			code: "",
			unit: "",
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

			const res = await axios.post(
				`${BASE_URL}${COURSES_URL}/lecturers`,
				values,
				config
			);
			setLoading(false);
			toast({
				title: "Success!",
				description: "You have successfully created a course!",
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
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Course title</FormLabel>
								<FormControl>
									<Input
										placeholder="Introduction to computer..."
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="code"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Course code</FormLabel>
								<FormControl>
									<Input
										placeholder="CSC1101..."
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="unit"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Course unit</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select course unit" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="1">1</SelectItem>
										<SelectItem value="2">2</SelectItem>
										<SelectItem value="3">3</SelectItem>
										<SelectItem value="4">4</SelectItem>
										<SelectItem value="6">6</SelectItem>
										<SelectItem value="8">8</SelectItem>
										<SelectItem value="11">11</SelectItem>
										<SelectItem value="12">12</SelectItem>
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
							<Loader2 className="h-6 w-6 animate-spin text-white" />
						) : (
							"Save changes"
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
}
