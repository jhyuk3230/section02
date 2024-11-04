import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import books from '@/mock/books.json';
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getServerSideProps = async() => {
	const [allBooks, recoBooks] = await Promise.all([
		fetchBooks(),
		fetchRandomBooks(),
	])
	
	return{
		props: {
			allBooks,
			recoBooks
		},
	}
};

export default function Home({ allBooks, recoBooks }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
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
  );
}

Home.getLayout = (page: ReactNode) => {
	return <SearchableLayout>{page}</SearchableLayout>;
}