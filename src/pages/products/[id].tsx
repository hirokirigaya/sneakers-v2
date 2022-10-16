import { api } from "../../api/Api";
import { useRouter } from "next/router";
import { Product } from "../../interfaces/Product";
import * as Styled from "../../styles/pages/Products/product";
import { FiArrowLeft, FiArrowRight, FiMinus, FiPlus } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";
import Swiper, { Navigation, Pagination } from "swiper";
import { Swiper as SwiperV1, SwiperSlide } from "swiper/react";
import { useEffect, useState, useRef, useContext } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../../components/reusable/Button";
import { cartStore } from "../../services/useProduct";

const ProductPage = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [product, setProduct] = useState<Product>();
  const [productQtd, setProductQtd] = useState(1);
  const [selectedSize, setSelectedSize] = useState<number>();
  const { addItemCart } = useContext(cartStore);
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { id } = router.query;
  Swiper.use([Navigation, Pagination]);

  useEffect(() => {
    const fecthProduct = async () => {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    };
    fecthProduct();
  }, [id]);

  const handleSumValue = () => {
    if (product?.countInStock) {
      if (productQtd === product.countInStock) {
        return;
      }
    }
    setProductQtd(productQtd != 0 ? productQtd + 1 : productQtd + 1);
  };
  const handleSubValue = () => {
    setProductQtd(productQtd === 1 ? 1 : productQtd - 1);
  };

  const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    let change = e.target.value;
    setProductQtd(parseInt(change));
  };

  useEffect(() => {
    const animatedContainer = async () => {
      if (container.current) {
        const scrollReveal = (await import("scrollreveal")).default;
        scrollReveal().reveal(container.current, {
          duration: 1000,
          delay: 300,
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
    <Styled.Container ref={container}>
      {product && (
        <>
          <Styled.FirstSection>
            <div className="box-product">
              <div className="container-slider">
                <button className="prev" ref={prevRef}>
                  <FiArrowLeft />
                </button>
                <SwiperV1
                  resizeObserver={false}
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  observer={true}
                  observeParents={true}
                  parallax={true}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                >
                  {product &&
                    product.images.map((image) => (
                      <SwiperSlide key={image.id}>
                        <Styled.SliderImages>
                          <img src={image.url} alt="produto" />
                        </Styled.SliderImages>
                      </SwiperSlide>
                    ))}
                </SwiperV1>
                <button className="next" ref={nextRef}>
                  <FiArrowRight />
                </button>
              </div>
              <Styled.DescribreProduct>
                <h1>{product.name}</h1>
                <p className="desc">{product.description}</p>
                <p>
                  {product.countInStock <= 1
                    ? `Disponível: ${product.countInStock}`
                    : `Disponíveis: ${product.countInStock}`}
                </p>
                <Styled.Sizes>
                  {product.sizes.map((size, i) => (
                    <Styled.Size
                      key={String(i + 1)}
                      onClick={() => setSelectedSize(i)}
                      className={selectedSize === i ? "active" : ""}
                    >
                      <p>{size}</p>
                    </Styled.Size>
                  ))}
                </Styled.Sizes>
                <div className="price">
                  <p className="old-price">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.oldPrice)}
                  </p>
                  <p>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                  </p>
                </div>
                <div className="frete">
                  <input type="number" placeholder="Calcular frete" />
                  <Button
                    variant="secondary"
                    padding="0.5rem 1rem"
                    fontSize="1.275rem"
                  >
                    <FiArrowRight />
                  </Button>
                </div>
                {product.countInStock ? (
                  <div className="add-cart">
                    <Button
                      variant="secondary"
                      onClick={() =>
                        addItemCart({
                          id: Number(product.id),
                          quant: productQtd,
                          title: product.name,
                          price: product.price,
                          oldPrice: product.oldPrice,
                          images: product.images,
                          slug: product.slug,
                          countInStock: product.countInStock,
                        })
                      }
                    >
                      <BiCartAlt />
                      Adicionar ao carrinho
                    </Button>
                    <div className="button-amount">
                      <Button onClick={handleSubValue} variant="tertiary">
                        <FiMinus />
                      </Button>
                      <input
                        type="number"
                        min="0"
                        value={productQtd}
                        onChange={Change}
                      />
                      <Button onClick={handleSumValue} variant="tertiary">
                        <FiPlus />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="product-out">
                    <p>Produto indisponivel</p>
                  </div>
                )}
              </Styled.DescribreProduct>
            </div>
          </Styled.FirstSection>
          <Styled.SecondSection>
            <div className="sumary">
              <h2>Detalhes</h2>
              <p>{product.sumary}</p>
            </div>
          </Styled.SecondSection>
        </>
      )}
    </Styled.Container>
  );
};

export default ProductPage;
