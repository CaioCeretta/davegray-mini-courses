import Posts from './components/Posts'
import MyProfilePic from './components/MyProfilePic'

export const revalidate = 86400

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mb-12 mt-12 text-center text-3xl dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Jorge</span>
        </span>
      </p>

      <Posts />
    </div>
  )
}
