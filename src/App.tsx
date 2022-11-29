import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import styles from './styles/Flekin.module.css'

function App() {

  return (
    <div className={styles.flekin}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
