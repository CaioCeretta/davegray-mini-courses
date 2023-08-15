import React, { ReactNode, useState } from 'react'

type ChildrenType = {
  children: (num: number) => ReactNode
}

export default function Counter() {
  const [count, setCount] = useState<number>(1)

  const increment = () => setCount(prev => prev + 1)

  return (
    <div></div>
  )
}
