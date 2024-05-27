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
import { toast, useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";

const FormSchema = z.object({
	keyword: z.string(),
});

export function SearchBox({ searchKeyword }: any) {
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			keyword: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		searchKeyword(values.keyword);
		// console.log(values.keyword);
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
				<Button className="uppercase font-semibold" type="submit">
					Search
				</Button>
			</form>
		</Form>
	);
}
