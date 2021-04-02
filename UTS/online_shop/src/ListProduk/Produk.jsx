import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Produk = (props) => {
    return (
        <div className="form">
            <table border="1">
                <thead>
                    <tr>
                        <th style={{ width: 400, textAlign: "center" }}>Image Product</th>
                        <th colSpan="2" style={{ textAlign: "center" }}>Detail Product</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="4"><img src={props.gambar} className="image_center"></img></td>
                    </tr>
                    <tr>
                        <td style={{ width: 580 }}>ID : {props.id}</td>
                        <td>Stok : {props.stok}</td>
                    </tr>
                    <tr>
                        <td>Nama : {props.namaproduk} </td>
                        <td rowSpan="2">
                            <button type="submit" style={{ display: "block", marginTop: 10 }} onClick={() => props.beli(props.id)} className="button_cart">Beli</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Harga : Rp. {props.harga}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Produk;