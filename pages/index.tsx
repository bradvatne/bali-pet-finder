import Head from "next/head";
import { GoogleMap, Menu, Nav, Footer } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bali Pet Finder | Rescue, Adopt, and Love</title>
      </Head>

      <main>
        <Nav />
        <Menu />
        <GoogleMap />
      </main>

      <Footer />
      <style jsx>{`
        main {
          display: flex;
          position: relative;
        }

        footer {
          width: 100%;
          padding-top: 4rem;
          padding-bottom: 1rem;
          padding-left: 1rem;
          padding-right: 1rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        footer > div {
          display: flex;
          flex-direction: column;
        }

        .footer {
          flex-basis: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
