import Link from 'next/link'
import Layout from '../components/Layout'
const tienda = () => {
  return (
    <div>
        <Layout pagina='Tienda Viertual'>
      <h1> Tienda</h1>
      <Link href='/'>Ir a inicio</Link>
      </Layout>
    </div>
  )
}

export default tienda
