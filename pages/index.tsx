import Head from "next/head";
import { GoogleMap, Menu, Nav, Footer } from "../components";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";

export default function Home() {
  const [session, loading] = useSession();
  const [showLogin, setShowLogin] = useState(false);

  function toggleLogin() {
    setShowLogin(!showLogin);
  }
  return (
    <>
      <Head>
        <title>Bali Pet Finder | Rescue, Adopt, and Love</title>
      </Head>
      <Nav toggleLogin={toggleLogin} />
      <main>
        <Menu />
        <div className="login"></div>
        <GoogleMap showLogin={showLogin} />
      </main>

      <Footer />
      <style jsx>{`
        main {
          display: flex;
          position: relative;
        }

        .login {
        }
      `}</style>
    </>
  );
}
