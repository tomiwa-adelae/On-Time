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
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
	code: z.string().min(6, {
		message: "Your one-time password must be 6 characters.",
	}),
});

export function VerifyCodeForm() {
	const searchParams = useSearchParams();

	const email = searchParams.get("email");

	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			code: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		setLoading(true);
		const config = {
			headers: {
				"Content-type": "application/json",
			},
			withCredentials: true,
		};

		try {
			const code = values.code;
			const res = await axios.post(
				`${BASE_URL}${USERS_URL}/verify-code`,
				{ email, code },
				config
			);
			setLoading(false);
			toast({
				title: "Successful!",
				description: "Please update your new password😁",
			});
			router.push(
				`/updatepassword?id=${res.data.id}&email=${email}&code=${values.code}`
			);
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
				Verify code
			</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 w-full"
				>
					<FormField
						control={form.control}
						name="code"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<InputOTP maxLength={6} {...field}>
										<InputOTPGroup>
											<InputOTPSlot index={0} />
											<InputOTPSlot index={1} />
											<InputOTPSlot index={2} />
											<InputOTPSlot index={3} />
											<InputOTPSlot index={4} />
											<InputOTPSlot index={5} />
										</InputOTPGroup>
									</InputOTP>
								</FormControl>
								<FormDescription className="text-xs md:text-sm">
									This should be the code sent to your email.
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
							href="/sign"
						>
							Sign in now
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
}
