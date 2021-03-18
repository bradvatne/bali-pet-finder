import Head from "next/head";
import dynamic from "next/dynamic";
import { Header } from "../components";

const LeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Bali Pet Finder | Rescue, Adopt, and Love</title>
      </Head>
      <Header />
      <LeafletMap />
    </>
  );
}
