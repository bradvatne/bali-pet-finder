import Head from "next/head";
import { GoogleMap, Menu, Nav, Footer } from "../components";
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()
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
      `}</style>
    </>
  );
}
