import { SearchBox } from "./SearchBox";
import Courses from "./Courses";
import Statistics from "@/components/Statistics";

const Wrapper = () => {
	return (
		<div className="mt-8">
			<SearchBox />
			<div className="my-8">
				<Statistics />
			</div>
			<Courses />
		</div>
	);
};

export default Wrapper;
