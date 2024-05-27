import { Separator } from "@/components/ui/separator";
import Head from "./Head";
import Statistics from "../../../../components/Statistics";

const Wrapper = () => {
	return (
		<div>
			<Head />
			<Separator className="my-10" />
			<h3 className="text-xl md:text-2xl mb-6">Statistics</h3>
			<Statistics />
		</div>
	);
};

export default Wrapper;
