import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NestingExample() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">HappyShop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/private">Home</Nav.Link>
          <Nav.Link href="/kategori">Kategori</Nav.Link>
          {/* <Nav.Link href="/private">Login</Nav.Link> */}
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
          <Route path="/kategori">
            <Kategori />
          </Route>
          <Route path="/login">
            <AuthButton />
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <AuthButton />
            <Home />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h5 className="text-center mt-4 mb-4">Welcome To HappyShop!</h5>
      <h5 className="text-center mt-4 mb-4">And Happy Shopping</h5>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/e5/4a/18/e54a18c6e782e6fb54977c9ae9457139.jpg" />
            <Card.Title>Backpack Wanita</Card.Title>
            <Card.Text>
              Bahan : Canvas D300 <br />
              Ukuran : 41x13x29 cm<br />
              <br />
              Jahitan Rapi<br />
              Real Pict, Barang sama dengan di foto<br />
              <br />
              Reseller welcome!<br />
              Best seller,<br />
              menerima dropship, reseller wajib mencantumkan nama toko di kolom dropshipper ;)<br />
              <br />
              Pesanan wajid di sertai keterangan warna dan pilihan warna lain jika pilihan pertama kosong. Agar mempercepat proses transaksi.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ac/86/2f/ac862fe23d722618da1d43e8afcfa271.jpg" />
            <Card.Title>Jam Tangan Pria</Card.Title>
            <Card.Text>
              Jam Tangan Pria Guess W1168G4 Rubber Karet Blue Original Murah<br />
            Harga Rp. 2.580.000 <br /><br />
            hub : <br />
            - No hp/wa : 081293658909 <br />
            - pin bbm : VIKAR830 <br /><br />
            Merk : Guess <br />
            type : W1168G4 <br />
            Gender : Pria <br />
            Diameter : 4.6cm <br />
            Tali : Rubber ( Karet ) Blue <br />
            warna case : Blue Bentuk <br />
            Case : Round & Oval <br />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/dc/8a/d7/dc8ad77add180a74f2685ec382ed7b95.jpg" />
            <Card.Title>Baju Batik Wanita</Card.Title>
            <Card.Text>
              Bahan : Canvas D300 <br />
              Ukuran : 41x13x29 cm<br />
              <br />
              Jahitan Rapi<br />
              Real Pict, Barang sama dengan di foto<br />
              <br />
              Reseller welcome!<br />
              Best seller,<br />
              menerima dropship, reseller wajib mencantumkan nama toko di kolom dropshipper ;)<br />
              <br />
              Pesanan wajid di sertai keterangan warna dan pilihan warna lain jika pilihan pertama kosong. Agar mempercepat proses transaksi.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

function Kategori() { 
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Kategori</h2>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link href={`${url}/Tas Backpack Wanita`}>Tas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`${url}/Jam Tangan Pria`}>Jam Tangan</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`${url}/Baju Batik Wanita`}>Pakaian</Nav.Link>
        </Nav.Item>
      </Nav>
      <Switch>
        <Route exact path={path}>
          <h3>Please Select a Catagory.</h3>
        </Route>
        <Route path={`${path}/:kategoriID`}>
          <Kategoris />
        </Route>
      </Switch>
    </div>
  );
}

function Kategoris() {
  let { kategoriID } = useParams();
  return (
    <div>
      <h3>{kategoriID}</h3>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      {/* Welcome!{" "} */}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/login"));
        }}
      >Sign Out</button>
    </p>
  ) : (
    <h2 class="text-center">You are not logged in.</h2>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <h2 class="text-center">Form Login</h2>
        <br></br>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card p-4">
                <div className="card-body">
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Masukkan Username" className="form-control"></input>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Masukkan Password Anda" className="form-control"></input>
                  </div>
                  <br></br>
                  <div class="d-grid gap-2">
                    <button onClick={login}>LogIn</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}