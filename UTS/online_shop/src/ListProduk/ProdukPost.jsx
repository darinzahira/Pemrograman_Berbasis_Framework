import React, {Component} from "react";
import Produk from "./Produk";
// import './BlogPost.css';

class ProdukPost extends Component{
    state = {
        listProduk:[],
        insertProduk: {
            userId: 1,
            id: 1,
            namaproduk: "",
            harga: "",
            gambar: "",
            stok: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/produk?_sort=id&_order=asc')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listProduk: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleBeliBarang = (data) => {
        fetch(`http://localhost:3001/produk/${data}`)
          .then((response) => response.json()) // ubah response data dari URL API menjadi sebuah data JSON
          .then((ambilDataDariServerAPI) => {
            // data JSON hasil ambil dari API kita masukkan ke dalam listArtikel pada state
            this.setState({
              insertProduk: ambilDataDariServerAPI,
            });
          })
          .then(this.handleTambahKeranjang);
      };
    
      handleTambahKeranjang = () => {
        fetch("http://localhost:3002/keranjang", {
          method: "POST",
          body: JSON.stringify({
            id: this.state.insertProduk["id"],
            namaproduk: this.state.insertProduk["namaproduk"],
            harga: this.state.insertProduk["harga"],
            gambar: this.state.insertProduk["gambar"],
            stok: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
      }


    render(){
        return(
            <div className="post-artikel">
                
                <h2 style={{ textAlign: "center" }}>Daftar Produk</h2>
                {
                    this.state.listProduk.map(produk => {
                        return <Produk key={produk.id} 
                        id={produk.id}
                        namaproduk={produk.namaproduk} 
                        harga={produk.harga} 
                        stok={produk.stok} 
                        gambar={produk.gambar} 
                        beli={this.handleBeliBarang}/>
                    })
                }
                <br/>
                <br />
                <br />
            </div>
        )
    }
}

export default ProdukPost;