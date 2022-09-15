import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
  return (
    <div>
        <Layout pagina={Nosotros}>
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre Nosotros' />
          <div>
            <p>Vestibulum et sagittis lectus, quis molestie leo. Ut in enim eget sapien malesuada malesuada sed ac sem. Morbi lectus sem, dapibus sit amet consequat id, vulputate eu ligula. Fusce volutpat a diam vel vestibulum. Quisque gravida risus ipsum, at dignissim lectus pulvinar at. Etiam id quam et purus elementum vestibulum sit amet non massa. Vivamus faucibus imperdiet tempor. Vivamus sagittis commodo nunc eu faucibus. Nunc ultrices convallis sapien at convallis.</p>
            <p>Vestibulum et sagittis lectus, quis molestie leo. Ut in enim eget sapien malesuada malesuada sed ac sem. Morbi lectus sem, dapibus sit amet consequat id, vulputate eu ligula. Fusce volutpat a diam vel vestibulum. Quisque gravida risus ipsum, at dignissim lectus pulvinar at. Etiam id quam et purus elementum vestibulum sit amet non massa. Vivamus faucibus imperdiet tempor. Vivamus sagittis commodo nunc eu faucibus. Nunc ultrices convallis sapien at convallis.</p>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  )
}

export default Nosotros
