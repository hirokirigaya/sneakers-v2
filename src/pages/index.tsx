import * as Styled from "../styles/pages/Home/styles";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../api/Api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import { Product } from "../interfaces/Product";
import Link from "next/link";
import { CardProduct } from "../components/reusable/CardProduct";
import { CardPromotion } from "../components/reusable/CardPromotion";

const Home: NextPage = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const firstSection = useRef<HTMLDivElement>(null);
  const secondSection = useRef<HTMLDivElement>(null);
  const thirdSection = useRef<HTMLDivElement>(null);
  SwiperCore.use([Navigation])

  useEffect(() => {
    const fetchData = async () => {
      await api.get("/products").then((response) => {
        return setProducts(response.data);
      });
    };
    fetchData();
  }, []);


  useEffect(() => {
    const animatedContainer = async () => {
      if (
        firstSection.current &&
        secondSection.current &&
        thirdSection.current
      ) {
        const scrollReveal = (await import("scrollreveal")).default;
        scrollReveal().reveal(firstSection.current, {
          duration: 800,
          delay: 300,
          easing: "ease-in-out",
          reset: false,
          origin: "bottom",
          distance: "10px",
        });
        scrollReveal().reveal(secondSection.current, {
          duration: 800,
          delay: 500,
          easing: "ease-in-out",
          reset: false,
          origin: "bottom",
          distance: "10px",
        });
        scrollReveal().reveal(thirdSection.current, {
          duration: 800,
          delay: 700,
          easing: "ease-in-out",
          reset: false,
          origin: "bottom",
          distance: "10px",
        });
      }
    };
    animatedContainer();
  }, []);

  return (
    <Styled.Container>
      <Styled.FirstSection ref={firstSection}>
        <button className="prev" ref={prevRef}>
          <FiArrowLeft />
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          <SwiperSlide>
            <Styled.SliderImages>
              <div className="drop-gradient">
                <Link href="/products">
                  <h2>Coleção Casual</h2>
                </Link>
              </div>
              <img src="/images/products/slider1.jpg" alt="arara-com-roupas" />
            </Styled.SliderImages>
          </SwiperSlide>
          <SwiperSlide>
            <Styled.SliderImages>
              <div className="drop-gradient">
                <Link href="/products">
                  <h2>Coleção Esportes</h2>
                </Link>
              </div>
              <img src="/images/products/slider2.jpg" alt="arara-com-roupas" />
            </Styled.SliderImages>
          </SwiperSlide>
        </Swiper>
        <button className="next" ref={nextRef}>
          <FiArrowRight />
        </button>
      </Styled.FirstSection>
      <Styled.SecondSection ref={secondSection}>
        <CardPromotion product={products[3]} title="Oferta Especial" />
        <CardPromotion product={products[4]} title="Melhor Oferta" />
      </Styled.SecondSection>
      <Styled.ThirdSection ref={thirdSection}>
        <header className="header">
          <p>Ofertas incríveis para você aproveitar.</p>
          <Link href="/products">Ver mais</Link>
        </header>
        <div className="box-slider">
          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={0}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            navigation
          >
            {products &&
              products.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <CardProduct product={product} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </Styled.ThirdSection>
    </Styled.Container>
  );
};

export default Home;
