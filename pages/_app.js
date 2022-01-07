import Header from '../components/Header'
import About from '../components/About'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <About/>
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
