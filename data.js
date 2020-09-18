import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Peta from  '../images/peta.png'
import '../style.css'

class data extends React.Component{
    render(){
        return(
           <div id="data"> 
           <br></br>     
           <br></br>
         <center>
          <Card style={{width: 800, height: 150, backgroundColor: 'steelblue', color: 'white' ,fontFamily: 'Arial Black'}} >
           <ul>
           <h1>232,628</h1>
           <h2>TERKONFIRMASI</h2>
           <h4>+3,635</h4>
           </ul>
          </Card>
          <br></br>
          <Card style={{width: 800, height: 150, backgroundColor: '#FF8C00', color: 'white' ,fontFamily: 'Arial Black' }} >
           <ul>
           <h1>56,720</h1>
           <h2>KASUS AKTIF</h2>
           <h4>24.4% Dari Terkonfirmasi</h4>
           </ul>
          </Card>
          <br></br>
           <Card style={{width: 800, height: 150, backgroundColor: '#008B8B', color: 'white',fontFamily: 'Arial Black' }} >
           <ul>
           <h1>166,686</h1>
           <h2>SEMBUH</h2>
           <h4>71.7% Dari Terkonfirmasi</h4>
           </ul>
          </Card>
          <br></br>
          <Card style={{width: 800, height: 150, backgroundColor: '#FF7F50', color: 'white',fontFamily: 'Arial Black' }} >
           <ul>
           <h1>9.222</h1>
           <h2>MENINGGAL</h2>
           <h4>4.0% Dari Terkonfirmasi</h4>
           </ul>
          </Card>
          <br></br> 

            <div class="alert alert-primary" role="alert" style={{width: "790px", fontFamily: 'Noto'}}>
            <h3>Peta Persebaran</h3>
            </div>
            <br></br>
            <img src={Peta} style={{width:'1100px'}} />
            <br></br>
            <br></br>
            <div class="alert alert-danger" role="alert" position="bootom">
            <h4>Data diambil dari Website <a href="https://www.alodokter.com/virus-corona" class="alert-link">Covid19.go.id</a>
            </h4></div>
</center>
</div>
        
        )
    }
}
export default data;
