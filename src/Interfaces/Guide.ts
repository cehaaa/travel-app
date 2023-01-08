import Person from "./Person";
import Plan from "./Plan";

export default interface Guide {
	title: string;
	description: string;
	src: string;
	publisher: Person;
	plans?: Array<Array<Plan>>;
}
