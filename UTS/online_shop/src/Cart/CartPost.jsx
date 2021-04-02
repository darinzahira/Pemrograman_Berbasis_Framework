import React, { Component } from "react";
import Cart from "./Cart";
import '../ListProduk/Style.css';

class CartPost extends Component {
    state = {
        listCart: [],
        insertCart: {
            userId: 1,
            id: "",
            namaproduk: "",
            harga: "",
            gambar: "",
            stok: ""
        },
        sum: 0,
    }

    ambilDataDariServerAPI = async () => {
        await fetch('http://localhost:3002/keranjang?_sort=id&_order=asc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listCart: jsonHasilAmbilDariAPI
                })
            })
        this.totalHarga();
    }

    totalHarga() {
        var sum2 = 0;
        console.log(this.state.listCart);
        this.state.listCart.forEach((obj) => {
            const map = new Map(Object.entries(obj));
            console.log(map.get("harga"));
            sum2 += parseInt(map.get("harga"));

        })

        this.setState({ sum: sum2 });
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusCart = (data) => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            }
            )
    }

    render() {
        return (
            <div className="post-artikel">

                <h2 style={{ textAlign: "center" }}>List Cart</h2>
                {
                    this.state.listCart.map(cart => {
                        return (
                            <Cart
                                key={cart.id}
                                namaproduk={cart.namaproduk}
                                harga={cart.harga}
                                stok={cart.stok}
                                gambar={cart.gambar}
                                id={cart.id}
                                hapusCart={this.handleHapusCart}
                                total={this.ambilDataDariServerAPI} />
                        )
                    })
                }
                <br />
                <table class="table">
                    <tbody>
                        <tr>
                            <td class="table-active" style={{ textAlign: "center" }}>
                                TOTAL HARGA :</td>
                            <td style={{ textAlign: "center" }}>Rp. {this.state.sum}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
            </div>
        )
    }
}

export default CartPost;