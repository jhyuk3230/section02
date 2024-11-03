import { ReactNode } from "react";
import Link from "next/link"

export default function GlobalLayout({ children }: { children: ReactNode }) {
	return(
		<div className="bg-gray-50">
			<div className="max-w-[600px] min-h-[100vh] mx-auto px-[15px] bg-white shadow-[0_0px_29px_0_rgba(100,100,100,0.2)]">
				<header className="h-[60px] text-[18px] font-bold leading-[60px]">
					<Link href={"/"}>ONEBITE BOOKS</Link>
				</header>
				<main className="pt-[10px]">
					{children}
				</main>
				<footer className="py-[100px] text-gray-400">제작</footer>
			</div>
		</div>
	)
}