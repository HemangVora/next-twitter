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
        <meta name="twitter:site" content="piece.gg" />
        <meta
          name="twitter:title"
          content="Piece - Turn Tweets into collectibles"
        />
        <meta name="twitter:creator" content="piece.gg" />
        <meta property="og:image" content={`https://piece2.herokuapp.com/piece/previewImage/`+id} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://piece.gg" />
        <meta
          property="og:title"
          content="Piece - Turn Tweets into collectibles"
        />
        <meta name="twitter:site" content="piece.gg" />
        <meta property="og:description" content="__DESCRIPTION__" />
        <meta property="og:image" content={`https://piece2.herokuapp.com/piece/previewImage/`+id} />
      </Head>
       
    </>
  );
}

export async function getServerSideProps({ params }) {
  const req = `https://piece2.herokuapp.com/piece/previewImage/${params.id}`.toString()

  return {
    props: { car: req },
  };
}
