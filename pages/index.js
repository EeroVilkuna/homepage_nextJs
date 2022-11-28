import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Avatar} from '@nextui-org/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eero Vilkuna</title>
        <meta name="description" content="Eero Vilkuna homepage" />
        <link rel="icon" href="/favicon2.ico" />
       
      </Head>

      <main className={styles.main}>
      <Avatar
          size="lg"
          src="/testi.jpeg"
          color="gradient"
          bordered
          squared
          css={{size: "$60"}}
          zoomed
        />
        <h1 className={styles.title}>
           <a> Eero Vilkuna </a>
       
        </h1>
     
        <p className={styles.description}>
          Software developer, using{' '}
          <code className={styles.code}>Dart, Flutter, Swift, JavaScript, Python</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/EeroVilkuna" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Check out my Github-profile</p>
          </a>

          <a href="https://www.linkedin.com/in/eeroilmarivilkuna/" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>Check out my LinkedIn-profile</p>
          </a>
        </div>
      </main>

    </div>
  )
}
