import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from "next/head";

export const getStaticProps = async() => {
	const [allBooks, recoBooks] = await Promise.all([
		fetchBooks(),
		fetchRandomBooks(),
	])
	
	return{
		props: {
			allBooks,
			recoBooks
		},
		revalidate: 3,
	}
};

export default function Home({ allBooks, recoBooks }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
		<>
		<Head>
			<title>한입북스</title>
			<meta property="og:image" content="https://img-c.udemycdn.com/user/50x50/175818512_d417.jpg" />
			<meta property="og:title" content="한입북스" />
			<meta property="og:description" content="한입북스에 등록된 도서들을 만나보세요" />
			<meta property="og:keyword" content="한입북스" />
		</Head>
			<main className="flex flex-col gap-[20px]">
				<section>
					<h3>지금 추천하는 도서</h3>
					{recoBooks.map((book) => (
						<BookItem key={book.id} {...book} />
					))}
				</section>
				<section>
					<h3>등록된 모든 도서</h3>
					{allBooks.map((book) => (
						<BookItem key={book.id} {...book} />
					))}
				</section>
			</main>
		</>
  );
}

Home.getLayout = (page: ReactNode) => {
	return <SearchableLayout>{page}</SearchableLayout>;
}