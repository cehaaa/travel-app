import Person from "./Person";

export default interface Trip {
	title: string;
	currentTrip: boolean;
	members: Array<Person>;
	numOfPlaces: number;
	src: string;
}
