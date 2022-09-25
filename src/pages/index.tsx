import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";

import ShirtZero from "../assets/shirt-0.png";
import ShirtOne from "../assets/shirt-1.png";
import ShirtTwo from "../assets/shirt-2.png";
import ShirtThree from "../assets/shirt-3.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing:48, 
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={ShirtZero} width={520} height={480} alt="Camiseta" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={ShirtOne} width={520} height={480} alt="Camiseta" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={ShirtTwo} width={520} height={480} alt="Camiseta" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={ShirtThree} width={520} height={480} alt="Camiseta" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
