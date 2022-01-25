import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Directora de Arte Jr - Frah Souza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Directora de Arte Jr."/>
        <p className="description">
          ¡Hola! Que bueno verte acá :)
          Mi nuevo domínio es: <a href="http://souzafrah.com.ar" target="_blank">souzafrah.com.ar</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
