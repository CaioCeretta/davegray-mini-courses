import React, { ReactNode } from "react";

import styles from './styles.module.css'

export default function AboutLayout({
  children 
}: { 
  children: ReactNode
}) {
  return (
  <>
    <nav>
      About Navbar
    </nav>

    <main className={styles.main}>
      {children}
    </main>
  </>
  )
}
