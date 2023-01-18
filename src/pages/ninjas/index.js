import Link from 'next/link';
import style from '../../styles/Ninja.module.css';

export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();
   return {
      props: { ninjas: data },
   };
};

const Ninjas = ({ ninjas }) => {
   return (
      <div>
         <h1>ninjas List</h1>
         {ninjas.map((ninja) => (
            <Link href={`/ninjas/${ninja.id}`} key={ninja.id} className={style.single}>
               <h3>{ninja.name}</h3>
            </Link>
         ))}
      </div>
   );
};

export default Ninjas;
