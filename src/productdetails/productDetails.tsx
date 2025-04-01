import { useParams } from "react-router";
import "./productDetails.css"
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
function ProductDetails() {
  const [product, setProduct] = useState<any>({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => { getProductById() }, []);

  function getProductById() {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        setLoading(false);
      });
  }


  return (
    <>
      {loading ? (
        <section className="loader">
          <Spinner animation="border" variant="primary" />
        </section>
      ) : (
        <section className="product-details-container">
          <section className="product-image">
            <img
              src={product.images[0]}
              className="product-details-image-listing"
              alt={product.title}></img>
          </section>
          <section className="product-details">
            <p style={{ padding: 5 }}></p>
            <h2> {product.title}</h2>
            <h4>{Math.round(product.price)}</h4>
            <p style={{ textAlign: "justify" }}>{product.description}</p>
          </section>
        </section>
      )
      }
    </>
  )

}
export default ProductDetails;
