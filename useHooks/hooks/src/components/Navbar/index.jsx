import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './styles'

export default function NavBar() {
  return (
    <Nav>
      <Link to={'/'}>
        Home
      </Link>
      <Link to='hooks/useCallback'>
        useCallback
      </Link>
      <Link to='hooks/useMemo'>
        useMemo
      </Link>
      <Link to='hooks/useRef'>
        useRef
      </Link>
      <Link to='hooks/useReducer'>
        useReducer
      </Link>
      <Link to='hooks/useLayout'>
        useLayout
      </Link>
      <Link to='hooks/useImperative'>
        useImperative
      </Link>
      <Link to='hooks/useContext'>
        useContext
      </Link>
      
    </Nav>
  )
}
