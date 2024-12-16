
import Dessert from "@/components/Dessert/Dessert";
import Drinks from '@/components/Drinks/Drinks';
import MainCourse from "@/components/MainCourse/MainCourse";
import StarterMenu from "@/components/Menu/StartMenu";
import PartnersAndClients from "@/components/PartnerClient/PartnerClient";
import Hero from "@/components/HeroSection/Hero";

export default function Menu() {
  return (
<div>
  <Hero/>
  <StarterMenu/>
  <MainCourse/>

  <Dessert/>
  <Drinks/>	
  <PartnersAndClients/>
</div>
  );
}