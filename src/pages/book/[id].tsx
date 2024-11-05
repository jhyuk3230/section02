import fetchOneBook from "@/lib/fetch-one-book";
import { GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
	return {
		paths: [
			{ params: { id : "1" } },
			{ params: { id : "2" } },
			{ params: { id : "3" } },
		],
		fallback: true,
	}
}

	export const getStaticProps = async (context: GetStaticPropsContext) => {
		const id = context.params!.id;
		const book = await fetchOneBook(Number(id));

		return {
			props: {book},
		}
	}

export default function Page({book} : InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();
	console.log(router.isFallback);
	if (router.isFallback) {
		return (
			<>
				<Head>
					<title>한입북스</title>
					<meta property="og:image" content="https://img-c.udemycdn.com/user/50x50/175818512_d417.jpg" />
					<meta property="og:title" content="한입북스" />
					<meta property="og:description" content="한입북스에 등록된 도서들을 만나보세요" />
					<meta property="og:keyword" content="한입북스" />
				</Head>
				<div>로딩중</div>
			</>
		)
	}

	if (!book) return
	const {id, title, subTitle, description, author, publisher, coverImgUrl} = book
	
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta property="og:image" content="https://img-c.udemycdn.com/user/50x50/175818512_d417.jpg" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:keyword" content="한입북스" />
			</Head>
			<div className="flex flex-col gap-[10px]">
				<div className="p-5 flex justify-center items-center bg-center bg-no-repeat bg-cover relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,.7)]" style={{backgroundImage: `url('${coverImgUrl}')`}}>
					<img className="max-h-[350px] h-full relative" src={coverImgUrl} alt={title} />
				</div>
				<b className="text-[20px]">{title}</b>
				<p className="text-gray-500">{subTitle}</p>
				<div className="text-gray-500">
					{author} | {publisher}
				</div>
				<div className="p-[15px] rounded-[5px] bg-[rgb(245,245,245)] leading-[1.3] whitespace-pre-line">
					{description}
				</div>
			</div>
		</>
	)
}