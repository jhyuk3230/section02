import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const onClickButton = () => {
		router.push("/test");
	}

	useEffect(()=>{
		router.prefetch('/test');
	},[])

  return (
		<>
			<header className="flex gap-3">
				<Link href={"/"}>Home</Link>
				<Link href={"/search"} prefetch={false}>search</Link>
				<Link href={"/book"}>book</Link>
			</header>
			<div>
				<button onClick={onClickButton}>test</button>
			</div>

			<Component {...pageProps} />
		</>
	)
}
