import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function cars({ car }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{id}</title> 
        <meta name="twitter:card" content="summary_large_image" /> 
        <meta
          property="og:title"
          content="Piece - Turn Tweets into collectibles"
        /> 
        <meta property="og:description" content={"https://piece2.herokuapp.com/piece/previewImage/"+id} />
        <meta property="og:image" content={"https://piece2.herokuapp.com/piece/previewImage/"+id} />
      </Head>
       
    </>
  );
}

export async function getServerSideProps({ params }) {
  const req = `https://piece2.herokuapp.com/piece/previewImage/${params.id}`

  return {
    props: { car: req },
  };
}
