import { ReactNode, useState } from "react";

export default function SearchableLayout( {children}: {children: ReactNode} ) {
	const [search, setSearch] = useState("");

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	};

	const onSubmit = () => {};

	return (
		<div>
			<div>
				<input placeholder="검색어 입력" onChange={onChangeSearch} value={search} />
				<button onClick={onSubmit}>검색</button>
			</div>
			{children}
		</div>
	)
}