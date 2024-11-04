import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

export default function SearchableLayout( {children}: {children: ReactNode} ) {
	const [search, setSearch] = useState("");

	const router = useRouter();

	const q = router.query.q as string;

	useEffect(() => {
		setSearch(q || "")
	}, [q])

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	};

	const onSubmit = () => {
		if (!search || q === search) return;
		router.push(`/search?q=${search}`);
	};

	const onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	}

	return (
		<div>
			<div className="mb-5 flex gap-[10px]">
				<input className="flex-1 p-[15px] rounded-[5px] border border-[rgb(220,220,220)]" placeholder="검색어 입력" onChange={onChangeSearch} value={search} onKeyDown={onKeyDown} />
				<button className="w-[80px] rounded-[5px] bg-[rgb(37,147,255)] text-white cursor-pointer" onClick={onSubmit}>검색</button>
			</div>
			{children}
		</div>
	)
}