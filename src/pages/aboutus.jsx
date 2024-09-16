import Testimonal from "@/components/Testimonial";
import Whyus from "@/components/Whyus";
import React from "react";
import Head from "next/head";

export default function aboutus() {
  return (
    <>
      <Head>
        <title>About | eCommerce</title>
        <link rel="icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <Whyus />
      <Testimonal />
    </>
  );
}
