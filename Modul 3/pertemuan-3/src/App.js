import React, { Component } from 'react';
// import Header from './Header';
import Footer from './Component/Footer';
import Image from './Component/List';
import Test from './Component/Test';
import HelloComponent from './Component/HelloComponent';
import Login from './Component/Login';

class App extends Component {
  render() {
    return (
      <div>
        <HelloComponent/>
        <Test />
        <h1>Component dari Class App</h1>
        <Footer judul='Halaman Footer' nama='Aufa' />
      </div>
    );
  }
}

class Form extends Component{
  render(){
    return(
      <div>
        <Login/>
      </div>
    );
  }
}
class List extends Component {
  render() {
   return (
    <div>
     <ol>
      <li>
       Satu
       <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg' />
      </li>
      <li>
       Dua
       <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg' />
      </li>
      <li>
       Tiga
       <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png' />
      </li>
      <li>
       Empat
       <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png' />
      </li>
     </ol>
    </div>
   );
  }
 }
 export default Form;