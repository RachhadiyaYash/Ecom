import Button from "@/components/Button";
import Herosection from "@/components/Herosection";
import Productcategoryslidder from "@/components/Productcaategotyslider";

export default function Home() {
  return (
    <>
      <Herosection />
      <br />
      <br />
      <Productcategoryslidder />
      <div className="container mx-auto p-4"></div>
      <Button />
    </>
  );
}
