import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Cart = (props) => {
  return (
    <div className="form">
      <table border="1">
        <thead>
          <tr>
            <th style={{ width: 270, textAlign: "center" }}>Image Product</th>
            <th colSpan="2" style={{ textAlign: "center" }}>Detail Product</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="4"><img src={props.gambar} className="image_center"></img></td>
          </tr>
          <tr>
            <td style={{ width: 580 }}>ID : {props.id}</td>
            <td>Qty : {props.stok}</td>
          </tr>
          <tr>
            <td style={{ width: 580 }}>Nama : {props.namaproduk} </td>
            <td>Harga : Rp. {props.harga}</td>
          </tr>
          <tr>
            <td style={{ width: 580 }}></td>
            <td><button className="btn btn-sm btn-danger" onClick={() => props.hapusCart(props.id)}>Hapus</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Cart;