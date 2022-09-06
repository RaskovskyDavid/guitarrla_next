import Link from 'next/link'
import Layout from '../components/Layout'
const Nosotros = () => {
  return (
    <div>
        <Layout pagina={Nosotros}>
      <h1> desde nosotros</h1>
      <Link href='/'>Ir a inicio</Link>
      </Layout>
    </div>
  )
}

export default Nosotros
