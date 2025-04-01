import "./header.css"
import cart from "../../assets/svg/cart.svg"
import { useSelector } from "react-redux"
import { Link } from "react-router";
function Header() {
    const selector = useSelector((state: any) => state.cart)
    console.log(selector);
    return (
        <header className="header-container">
            <section className="logo-sec">Logo</section>
            <section className="nav-links-sec">
                <div><Link className="nav-link" to="./"> Home</Link> </div>
                <div><Link className="nav-link" to="/about"> About</Link> </div>
                <div><Link className="nav-link" to="/product"> contact</Link> </div>
                <div><Link className="nav-link nav-icon" to="/cart">
                    <img src={cart} style={{ width: 30 }}></img>
                    <div className="icon">{selector.selectedProducts.length}</div>
                </Link>
                </div>
            </section>
        </header>


    );

}
export default Header;
