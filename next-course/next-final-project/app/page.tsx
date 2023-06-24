import Posts from './components/Posts'

export const revalidate = 10

export default function Home() {
  return (
    <main className="mx-auto px-6">
      <p className="mb-12 mt-12 text-center text-3xl dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Jorge</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}
