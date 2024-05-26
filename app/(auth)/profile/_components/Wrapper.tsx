
import { Separator } from "@/components/ui/separator";
import Head from "./Head";
import Statistics from "./Statistics";

const Wrapper = () => {
	return (
		<div>
			<Head />
			<Separator className='my-10'/>
			<Statistics />
		</div>
	);
};

export default Wrapper;
