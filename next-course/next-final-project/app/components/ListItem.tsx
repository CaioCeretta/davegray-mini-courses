import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

import { Meta } from '@/lib/posts'

type Props = {
  post: Meta
}

export default function ListItem({ post }: Props) {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)
  return (
    <li className="mt-4 text-2xl dark:text-white">
      <Link
        className="hover:text-black70 underline dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="mt-1 text-sm">{formattedDate}</p>
    </li>
  )
}
