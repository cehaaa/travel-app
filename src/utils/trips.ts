import Trip from "../Interfaces/Trip";

export const trips: Array<Trip> = [
	{
		title: "Trip to Indonesia",
		currentTrip: true,
		members: [
			{
				name: "Kiera Watson",
				src: "./../../../src/assets/images/avatars/avatar-4.png",
			},
			{
				name: "Marc",
				src: "./../../../src/assets/images/avatars/avatar-2.png",
			},
			{
				name: "Nigela",
				src: "./../../../src/assets/images/avatars/avatar.png",
			},
		],
		numOfPlaces: 8,
		src: "./../../../src/assets/images/places/indonesia.png",
	},
	{
		title: "Trip to Japan",
		currentTrip: true,
		members: [
			{
				name: "Kiera Watson",
				src: "./../../../src/assets/images/avatars/avatar-4.png",
			},
			{
				name: "Keane",
				src: "./../../../src/assets/images/avatars/avatar-3.png",
			},
			{
				name: "Nigela",
				src: "./../../../src/assets/images/avatars/avatar.png",
			},
		],
		numOfPlaces: 2,
		src: "./../../../src/assets/images/places/japan.png",
	},
	{
		title: "Trip to China",
		currentTrip: true,
		members: [
			{
				name: "Kiera Watson",
				src: "./../../../src/assets/images/avatars/avatar-4.png",
			},
			{
				name: "Keane",
				src: "./../../../src/assets/images/avatars/avatar-3.png",
			},
		],
		numOfPlaces: 2,
		src: "./../../../src/assets/images/places/china.png",
	},
];

export default trips;
