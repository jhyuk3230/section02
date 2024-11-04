import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import books from '@/mock/books.json'
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async(context : GetServerSidePropsContext) => {
	console.log(context)
	
	return{
		props: {},
	}
};

export default function Page() {
  return (
    <div>
			{books.map((book) => (
				<BookItem key={book.id} {...book} />
			))}
		</div>
  );
}

Page.getLayout = (page:ReactNode) => {
	return <SearchableLayout>{page}</SearchableLayout>
}
