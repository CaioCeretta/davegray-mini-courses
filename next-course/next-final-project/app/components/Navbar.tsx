import Link from 'next/link'
import { FaYoutube, FaGithub, FaTwitter, FaLaptop } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-slate-600 p-4 drop-shadow-xl">
      <div className="prose prose-xl mx-auto flex flex-col justify-between sm:flex-row md:px-6">
        <h1 className="mb-2 grid place-content-center text-3xl font-bold text-white md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Jorge
          </Link>
        </h1>
        <div className="flex flex-row justify-center gap-4 align-middle text-4xl text-white sm:justify-evenly lg:text-5xl">
          <Link
            href="https://www.youtube.com/channel/UCL64gn1KZ1C-u87BGQv3b6w"
            className="text-white/90 hover:text-white"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCL64gn1KZ1C-u87BGQv3b6w"
            className="text-white/90 hover:text-white"
          >
            <FaLaptop />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCL64gn1KZ1C-u87BGQv3b6w"
            className="text-white/90 hover:text-white"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCL64gn1KZ1C-u87BGQv3b6w"
            className="text-white/90 hover:text-white"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  )
}
