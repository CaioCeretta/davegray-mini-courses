import getFormattedDate from '@/lib/getFormattedDate'
import { getPostByName } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

import 'highlight.js/styles/github-dark.css'

export const revalidate = 0

type Props = {
  params: {
    postId: string
  }
}

// export async function generateStaticParams() {
//   const posts = await getPostsMeta()

//   if (!posts) return []

//   return posts.map((post) => ({
//     postId: post.id,
//   }))
// }

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`) // deduped!

  if (!post) {
    return {
      title: 'Posts not found',
    }
  }

  return {
    title: post.meta.title,
  }
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`) // deduped!

  if (!post) notFound()

  const { meta, content } = post

  const pubDate = getFormattedDate(meta.date)

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}/`}>
      {tag}
    </Link>
  ))

  return (
    <>
      <h1 className="mb-0 mt-4 text-3xl">{meta.title}</h1>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related: </h3>
        <div className="flex flex-grow gap-4">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/">
          <FaArrowLeft /> Back to home
        </Link>
      </p>
    </>
  )
}
