import Head from "next/head"
import Header from "./Header"

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio web de venta d eguitarras" />
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout
