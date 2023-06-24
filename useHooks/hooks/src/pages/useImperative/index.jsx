/* Parent component pass props to a child component, for a parent component to call a function it must be defined in 
the parent and pass down */

import { useRef } from "react"


export default function Imperative() {
  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.openModal()
  }

  console.log('parent rendered')

  return (
    <main className="container">
      <p>Parent Component</p>
      
    </main>
  )
}