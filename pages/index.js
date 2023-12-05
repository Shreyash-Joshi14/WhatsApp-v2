import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Connect</title>
        <meta name="description" content="Generated Shreyash Joshi" />
        <link rel= "icon" href="https://i.ibb.co/Nt7MZG5/Logo.png" />
      </Head>

      <Sidebar></Sidebar>
    </div>
  );
}
