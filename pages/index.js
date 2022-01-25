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
        <Header title="'¡Hola, que bueno verte acá!" />
        <p className="description">
          Soy Frah Souza, brasileña, directora de arte. <br>
          Mi nuevo domínio es: <li class="#"> <a href="http://souzafrah.com.ar" target="_blank">souzafrah.com.ar</a></li>
        </p>
      </main>

      <Footer />
    </div>
  )
}
