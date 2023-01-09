import { useRouter } from "vue-router";

export const useNavigate = () => {
	const router = useRouter();

	function back(path: number) {
		router.go(path as number);
	}

	function linkTo(path: string) {
		router.push({
			path: path as string,
		});
	}

	return { back, linkTo };
};

export default useNavigate;
