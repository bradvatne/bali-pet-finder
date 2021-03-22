import Head from "next/head";
import dynamic from "next/dynamic";
import { GoogleMap, Menu, Nav } from "../components";

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
      <footer>
        <div>
          <h4>About</h4>
          <a href="#">Mission</a>
          <a href="#">Volunteer</a>
          <a href="#">Donate</a>
        </div>
        <div>
          <h4>Adopt an animal</h4>
          <a href="#">Adopt a dog</a>
          <a href="#">Adopt a cat</a>
          <a href="#">Adopt a unique pet</a>
        </div>
        <div>
          <h4>Put up an animal for adoption</h4>
          <a href="#">Post a dog for adoption</a>
          <a href="#">Post a cat for adoption</a>
          <a href="#">Post a unique pet</a>
        </div>
        <div>
          <h4>Blog</h4>
          <a href="#">Articles about pet care</a>
          <a href="#">Articles about this website's construction</a>
          <a href="#">Articles about Bali</a>
        </div>
        <div style={{display: "flex", flexBasis: "100%", justifyContent: "space-between", flexDirection: "row"}}>
          <p>© 2021 Bali Pet Finder, Inc. Privacy | Terms and Conditions</p>
          <p>English Facebook Instagram Twitter</p>
        </div>
      </footer>
      <style jsx>{`
        main {
          display: flex;
          position: relative;
        }

        footer {
          width: 100%;
          padding-top: 4rem;
          padding-bottom: 2rem;
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
