import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListProduk/Style.css';
import ProdukPost from "./ListProduk/ProdukPost";
import CartPost from "./Cart/CartPost";

export default function OnlineShop() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">HappyShop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/produk">List Product</Nav.Link>
          <Nav.Link href="/keranjang">Cart</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <div>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produk">
            <Produk />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/keranjang">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.bestadvisers.co.uk/reviews/3b/81/3b81f6c579d3883360e148b4d8e4120a.jpg"
            alt="First slide"
            height="500px"
          />
          <Carousel.Caption>
            <h1>Home</h1>
            <h4>Welcome To HappyShop!</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://learnmetrics.com/wp-content/uploads/types-of-air-conditioners.jpg"
            alt="Second slide"
            height="500px"
          />

          <Carousel.Caption>
            <h1>Home</h1>
            <h4>See Our Product,</h4>
            <h4>And Happy Shopping!</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

function AboutPage() {
  let { path, url } = useRouteMatch();
  return (
    <div className="wrapper">

      <br />
      <br />
      <br />
      <img src="foto.jpeg" className="image_biodata"></img>
      <br />
      <div className="main_cointainer">
        <div className="item">
          <table border="1" className="row justify-content-md-center">
            <tbody>
              <tr>
                <th style={{ width: 900, textAlign: "center" }}>Biodata</th>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <Switch>
                    <Route exact path={path}>
                      <h3>Please select a topic.</h3>
                      <br />
                    </Route>
                    <Route path={`${path}/:topicId`}>
                      <Abouts />
                    </Route>
                  </Switch>
                </td>
              </tr>
              <tr>
                <td ><Link to={`${url}/Darin Zahira`}>Nama</Link><br /></td>
              </tr>
              <tr>
                <td ><Link to={`${url}/TI-3E`}>Kelas</Link><br /></td>
              </tr>
              <tr>
                <td ><Link to={`${url}/1841720033`}>NIM</Link><br /></td>
              </tr>
              <tr>
                <td ><Link to={`${url}/D4 Teknik Informatika`}>Program Studi</Link><br /></td>
              </tr>
              <tr>
                <td ><Link to={`${url}/Teknologi Informasi`}>Jurusan</Link><br /></td>
              </tr>
              <tr>
                <td ><Link to={`${url}/zahiraaflah@gmail.com`}>Email</Link><br /></td>
              </tr>
              <tr>
                <td ><Link to={`${url}/darinzahira`}>GitHub</Link><br /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function Abouts() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

function Produk() {
  return (
    <ProdukPost />
  );
}

function Cart() {
  return (
    <CartPost />
  );
}
