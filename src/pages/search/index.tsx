import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import books from '@/mock/books.json'
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import Head from "next/head";

// export const getServerSideProps = async(context : GetServerSidePropsContext) => {
// 	const q = context.query.q;
// 	const books = await fetchBooks(q as string);
	
// 	return{
// 		props: {
// 			books,
// 		},
// 	}
// };

export default function Page() {
	const [books, setBooks] = useState<BookData[]>([])

	const router = useRouter();
	const q = router.query.q;

	const fetchSearchResult = async() => {
		const data = await fetchBooks(q as string);
		setBooks(data);
	}
	useEffect(()=>{
		if (q) {
			fetchSearchResult();
		}
	},[q])

  return (
		<>
			<Head>
				<title>한입북스 - 검색결과</title>
				<meta property="og:image" content="https://img-c.udemycdn.com/user/50x50/175818512_d417.jpg" />
				<meta property="og:title" content="한입북스 - 검색결과" />
				<meta property="og:description" content="한입북스에 등록된 도서들을 만나보세요" />
				<meta property="og:keyword" content="한입북스" />
			</Head>
			
    	<div>
				{books.map((book) => (
					<BookItem key={book.id} {...book} />
				))}
			</div>
		</>
  );
}

Page.getLayout = (page:ReactNode) => {
	return <SearchableLayout>{page}</SearchableLayout>
}
