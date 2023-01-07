export const slug = (str: string): string => {
	return str.toLocaleLowerCase().split(" ").join("-");
};

export const toNormalString = (str: string) => {
	return str.split("-").join(" ");
};

export default slug;
