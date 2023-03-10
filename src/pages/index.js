import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
   return (
      <>
         <Head>
            <title>Netninja | Home</title>
         </Head>
         <div className={styles.content}>
            <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptatem iure cum voluptatum velit dolorum
               sint impedit rem repellendus, explicabo delectus possimus repudiandae. Labore alias vitae facere, optio
               sequi est.
            </p>
            <p className={styles.text}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptatem iure cum voluptatum velit dolorum
               sint impedit rem repellendus, explicabo delectus possimus repudiandae. Labore alias vitae facere, optio
               sequi est.
            </p>
            <Link href="/ninjas" className={styles.btn}>
               See Ninja Listing
            </Link>
         </div>
      </>
   );
}
