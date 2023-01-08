import Guide from "../Interfaces/Guide";

export const guides: Array<Guide> = [
	{
		title: "Trip to The Great Wall of China",
		description:
			"Lorem ipsum dolor sit amet, consectetur elit. Sed a dui et velit rhoncus commodo. Donec veibulum condimentum leo ac mattis.",
		src: "./../../../../src/assets/images/places/china.png",
		publisher: {
			src: "./../../../../src/assets/images/avatars/avatar-2.png",
			name: "Marc",
		},
		plans: [
			[
				{
					title: "The Great Wall",
					description:
						"Lorem ipsum dolor sit amet, consectetur elit. Sed a dui et velit rhoncus commodo. Donec veibulum condimentum leo ac mattis.",
				},
				{
					title: "Forbiden City",
					description:
						"Lorem ipsum dolor sit amet, consectetur elit. Sed a dui et velit rhoncus commodo. Donec veibulum condimentum leo ac mattis.",
				},
			],
			[
				{
					title: "Emperor Qinshihuang's Museum",
					description:
						"Lorem ipsum dolor sit amet, consectetur elit. Sed a dui et velit rhoncus commodo. Donec veibulum condimentum leo ac mattis.",
				},
			],
		],
	},
	{
		title: "Trip to Kiyomizu Dera",
		description:
			"Lorem ipsum dolor sit amet, consectetur elit. Sed a dui et velit rhoncus commodo. Donec veibulum condimentum leo ac mattis.",
		src: "./../../../../src/assets/images/places/japan.png",
		publisher: {
			src: "./../../../../src/assets/images/avatars/avatar.png",
			name: "Nigela",
		},
		plans: [
			[
				{
					title: "Kyoto Imperial Palace",
					description:
						"Lorem ipsum dolor sit amet, consectetur elit. Sed a dui et velit rhoncus commodo. Donec veibulum condimentum leo ac mattis.",
				},
			],
			[
				{
					title: "Ninja Museum Igaryu",
					description:
						"Lorem ipsum dolor sit amet, consectetur elit. Sed a dui et velit rhoncus commodo. Donec veibulum condimentum leo ac mattis.",
				},
			],
		],
	},
];

export const selectGuide = (title: string) => {
	const guide = guides.filter(
		(guide: Guide) => guide.title.toLocaleLowerCase() === title
	);

	return guide[0];
};

export default guides;
