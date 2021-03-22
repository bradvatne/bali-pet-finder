import Head from "next/head";
import { GoogleMap, Menu, Nav, Footer } from "../components";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";

export default function Home() {
  const [session, loading] = useSession();
  const [email, setEmail] = useState('');
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
        <div className="login" style={{ display: showLogin ? "flex" : "none" }}>
          <label htmlFor="email" >
            Sign in Passwordless with your Email
          </label>
          <input type="email" name="email" onChange={e=> setEmail(e.target.value)}/>
          <button onClick={()=> signIn('email', {email})}>Ok</button>
        </div>
        <GoogleMap showLogin={showLogin} />
      </main>

      <Footer />
      <style jsx>{`
        main {
          display: flex;
          position: relative;
        }

        .login {
          top: 63px;
          display: flex;
          width: 60%;
          height: calc(100vh - 63px);
          position: sticky;
          justify-content: center;
          align-items: center;
        }

        label {
          margin-right: 2rem;
        }

        input {
          margin-right: 1rem;
        }
      `}</style>
    </>
  );
}
