import Button from "@/components/Button";
import FAQ from "@/components/Faq";
import Head from "next/head";
import Herosection from "@/components/Herosection";
import Productcategoryslidder from "@/components/Productcaategotyslider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | eCommerce</title>
      </Head>

      <Productcategoryslidder />

      <FAQ />
    </>
  );
}
