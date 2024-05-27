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
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

const FormSchema = z.object({
	code: z.string().min(6, {
		message: "Your one-time password must be 6 characters.",
	}),
});

export function VerifyCodeForm() {
	const searchParams = useSearchParams();

	const email = searchParams.get("email");

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			code: "",
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
					>
						Submit
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
