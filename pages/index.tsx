import Head from "next/head";
import dynamic from "next/dynamic";
import { GoogleMap, Menu } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bali Pet Finder | Rescue, Adopt, and Love</title>
      </Head>
      <div className="app-container">
        <Menu />
        <GoogleMap />
        <style jsx>{`
          .app-container {
            display: flex;
          }
          `}</style>
      </div>
    </>
  );
}
