import Image from 'next/image'
import React from 'react'

export default function MyProfilePic() {
  return (
    <section className="mx-auto w-full">
      <Image
        className="mx-auto mt-8 rounded-full border-4 border-black shadow-black drop-shadow-xl dark:border-slate-500"
        src="/images/eu.jpeg"
        width={200}
        height={200}
        alt="Jorge"
        priority={true}
      />
    </section>
  )
}
