import { BookData } from '@/types';
import Link from 'next/link';

export default function BookItem({ id, title, subTitle, description, author, publisher, coverImgUrl }: BookData) {
	return <Link className='py-[15px] flex gap-[15px] border-b border-b-[rgb(220,220,220)]' href={`/book/${id}`}>
		<img className='w-[80px]' src={coverImgUrl} alt={title} />
		<div>
			<b>{title}</b>
			<p className='break-words'>{subTitle}</p>
			<br />
			<div className='text-gray-500'>{author} | {publisher}</div>
		</div>
	</Link>
}