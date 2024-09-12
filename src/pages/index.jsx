import Button from "@/components/Button";
import FAQ from "@/components/Faq";
import Herosection from "@/components/Herosection";
import Productcategoryslidder from "@/components/Productcaategotyslider";

export default function Home() {
  return (
    <>
      <Productcategoryslidder />

      <FAQ />

      <Button text="Send Message" />
    </>
  );
}
