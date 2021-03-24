import Head from "next/head";
import { GoogleMap, Menu, Nav, Footer, Modal } from "../components";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";

export default function Home() {
  const [session, loading] = useSession();
  const [email, setEmail] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  function toggleAddModal(e) {
    e.preventDefault();
    setShowAddModal(!showAddModal);
  }

  function toggleLogin() {
    setShowLogin(!showLogin);
  }
  return (
    <>
      <Head>
        <title>Bali Pet Finder | Rescue, Adopt, and Love</title>
      </Head>

      <Nav toggleLogin={toggleLogin} toggleAddModal={toggleAddModal} />

      <Modal toggle={toggleAddModal} show={showAddModal} />

      <main>
        <Menu />
        <div className="login" style={{ display: showLogin ? "flex" : "none" }}>
          <label htmlFor="email">Sign in Passwordless with your Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => signIn("email", { email })}>Ok</button>{" "}
          <span>or</span>
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        </div>
        <GoogleMap showLogin={showLogin} />
      </main>
      <Footer />
      <style jsx>{`
        main {
          display: flex;
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
        span {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        label {
          margin-right: 1rem;
        }

        input {
          margin-right: 1rem;
        }
        .anchor {
          position: fixed;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;
        }
      `}</style>
    </>
  );
}
