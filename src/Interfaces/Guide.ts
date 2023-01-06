import Person from "./Person";

export default interface Guide {
	title: string;
	description: string;
	src: string;
	publisher: Person;
}
