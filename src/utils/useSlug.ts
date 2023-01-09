export const useSlug = () => {
	function makeSlug(str: string): string {
		return str.toLocaleLowerCase().split(" ").join("-");
	}

	function toNormalString(str: string): string {
		return str.split("-").join(" ");
	}

	return { makeSlug, toNormalString };
};

export default useSlug;
