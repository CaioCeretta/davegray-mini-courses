import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './styles'

export default function NavBar() {
  return (
    <Nav>
      <Link to={'/'}>
        Home
      </Link>
      <Link to='useCallback'>
        useCallback
      </Link>
      <Link to='useMemo'>
        useMemo
      </Link>
    </Nav>
  )
}
