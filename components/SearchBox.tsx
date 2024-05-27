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
import { FolderSearch, Loader2, UserSearch } from "lucide-react";

import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";

const FormSchema = z.object({
	keyword: z.string(),
});

export function SearchBox({ successUpdate }: any) {
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			keyword: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		try {
			setLoading(true);
			const config = {
				headers: {
					"Content-type": "application/json",
					"x-auth-token": userInfo.token,
				},
			};

			const res = await axios(
				`${BASE_URL}${COURSES_URL}/students?keyword=${values.keyword}`,
				config
			);
			setLoading(false);
			successUpdate(res.data);
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
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-x-2 flex flex-row w-full items-center"
			>
				<FormField
					control={form.control}
					name="keyword"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<Input
									placeholder="Search for a course..."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className="uppercase font-semibold"
					type="submit"
					disabled={loading}
				>
					{loading ? (
						<Loader2 className="md:mr-2 h-4 w-4 animate-spin" />
					) : (
						<FolderSearch className="w-4 h-4" />
					)}
				</Button>
			</form>
		</Form>
	);
}
