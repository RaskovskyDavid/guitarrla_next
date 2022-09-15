import Link from 'next/link'
import Layout from '../components/Layout'
const blog = () => {
    return (
        <div>
            <Layout pagina='Blog'>
          <h1>Blog</h1>
          <Link href='/'>Ir a inicio</Link>
          </Layout>
        </div>
      )
    }

export default blog
