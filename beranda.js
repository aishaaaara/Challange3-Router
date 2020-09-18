import React from 'react'
import { Link } from 'react-router-dom'
import Dokter from '../images/dokter.jpg'
import '../style.css'
import Button from 'react-bootstrap/Button'


class beranda extends React.Component{
    render(){
        return(
           
        <div class="bg" id="beranda"> 
        <br></br><br></br><br></br><br></br><br></br>
        <center><p>
        <ul>
        <h1 style={{fontFamily: 'Noto',fontSize: '80px' ,color:'#8B0000'}}> COVID-19</h1>
        <h4 style={{fontFamily: 'Arial',fontSize: '20px' ,color:'white'}}>
            Coronavirus adalah kumpulan virus yang bisa menginfeksi sistem pernapasan.<br></br>
            Pada banyak kasus, virus ini hanya menyebabkan infeksi pernapasan ringan, seperti flu.<br></br>
            Namun, virus ini juga bisa menyebabkan infeksi pernapasan berat.</h4>
        </ul>
        <Button variant="primary" size="lg" href="https://www.alodokter.com/virus-corona" >Pelajari Lebih Lanjut</Button>
       </p> </center>
        </div>


        )
    }
}
export default beranda;
