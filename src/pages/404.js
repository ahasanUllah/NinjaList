import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ErrorPage = () => {
   const router = useRouter();
   useEffect(() => {
      setTimeout(() => {
         router.push('/');
      }, 3000);
   }, []);
   return (
      <>
         <Head>
            <title>Netninja | 404</title>
         </Head>
         <div>
            <h1>Page not found</h1>
            <p>Redirecting to homepage</p>
         </div>
      </>
   );
};

export default ErrorPage;
