import { useContext, useEffect, useState } from "react";
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../../assets/img2.jpg";
import ProductCard from "../../common/productcard/ProductCard";
import Spinner from 'react-bootstrap/Spinner';
import ProductDetails from "../../productdetails/productDetails";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../redux/cart/cartSlice";
import Toast from 'react-bootstrap/Toast';
import { Selector } from "react-redux";

function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [showA, setShowA] = useState(false);
  const [showb, setShowb] = useState(false);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const selector: any = useSelector((state) => state);
  const toggleShowA = () => setShowA(!showA)
  const toggleShowb = () => setShowb(!showb)
  useEffect(() => {
    getAllproducts();
  }, []);

  function getAllproducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setLoading(false);
        console.log(res);
      });
  }
  return (
    <>
      <section className="slider">
        <Carousel>
          <Carousel.Item>
            <img src={Image1} alt="image1" className="slider-image"></img>
            <Carousel.Caption>
              <h3>1</h3>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Image1} alt="image1" className="slider-image"></img>
            <Carousel.Caption>
              <h3>2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Image1} alt="image1" className="slider-image"></img>
            <Carousel.Caption>
              <h3>3</h3>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="product-listing-sec">
        {loading ? (
          <section className="loader">
            <Spinner animation="border" variant="primary" />
          </section>
        ) : (
          <section className="product-listing-home">
            {products.map((item: any) => {
              return (
                <ProductCard
                  title={item.title}
                  description={item.description}
                  image={item.images[0]}
                  price={item.price}
                  btnText="add to cart"
                  onSelect={() => {
                    navigate(`/product/${item.id}`);
                  }}
                  addToCart={() => {
                    console.log();
                    if (
                      selector.cart.selectedProducts.filter(
                        (items: any) => items.id === item.id).length === 0
                    ) {
                      dispatch(cartSlice.actions.setProducts(item));
                      setSelectedItem(item.title);
                      toggleShowA();
                    } else {
                      setSelectedItem(item.title);
                      toggleShowb();
                    }
                  }}
                ></ProductCard>
              );
            })}
          </section >
        )}
      </section>
      <Toast
        delay={5000}
        bg="success"
        className="toast"
        show={showA}
        onClose={toggleShowA}
      >
        <Toast.Header>
          <strong className="me-auto">Cart</strong>
        </Toast.Header>
        <Toast.Body style={{ color: "white" }}>
          <strong>{selectedItem}</strong>added to Cart Successfully
        </Toast.Body>
      </Toast>
      <Toast
        delay={2000}
        bg="danger"
        className="toast"
        show={showb}
        onClose={toggleShowb}
      >
        <Toast.Header>
          <strong className="me-auto">Cart</strong>
        </Toast.Header>
        <Toast.Body style={{ color: "white" }}>
          <strong>{selectedItem}</strong>already exist to cart
        </Toast.Body>
      </Toast>
    </>
  );
}
export default Home;
