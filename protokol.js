import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Home from '../images/home.jpg';
import Mask from '../images/mask.jpg';
import Vitamin from '../images/vitamin.jpg';
import Data from './data';
import '../style.css'



class protokol extends React.Component{
    render(){
        return(
        <div class="row" > 
        <div  class="container" id="protokol" >
    <br></br>
    <CardDeck>
    <Card>
    <Card.Img variant="top" src={Home} style={{ height: '16rem'}} />
    <Card.Body>
    <Card.Title style={{fontFamily: 'Noto'}}>Tetaplah Dirumah</Card.Title>
    <Card.Text >
        Untuk menghindari tertularnya virus Covid-19.  <mark>Sangat dianjurkan oleh
        semua orang untukdiam dirumah</mark> untuk mrngurangi adanya resiko. Keluar rumah 
        dilakukan saat dalam keadaan darurat saja
    </Card.Text>
    </Card.Body>
    
  </Card>

  <Card>
  <Card.Img variant="top" src={Mask} style={{ height: '16rem'}} />
  <Card.Body>
  <Card.Title style={{fontFamily: 'Noto'}}>Memakai Masker</Card.Title>
  <Card.Text>
      Bagi Anda yang memiliki gejala gangguan pernapasan, kenakanlah masker medis ke mana pun saat Anda keluar rumah atau
       berinteraksi dengan orang lain. Setelah digunakan (masker medis hanya bisa digunakan 1 kali dan harus segera diganti), 
       jangan lupa cuci tangan setelah itu.{' '}
  </Card.Text>
  </Card.Body>
  </Card>

  <Card>
  <Card.Img variant="top" src={Vitamin} style={{ height: '16rem'}} />
  <Card.Body>
  <Card.Title style={{fontFamily: 'Noto'}}>Jaga kesehatan</Card.Title>
  <Card.Text>
      Selama berada di dalam rumah atau berkegiatan di luar rumah, pastikan kesehatan fisik tetap terjaga.
      Berjemur sinar matahari pagi selama beberapa menit, mengonsumsi makanan bergizi seimbang,
      dan melakukan olahraga ringan. Istirahat yang cukup juga sangat dibutuhkan dalam upaya 
      menjaga kesehatan selama masa pandemi ini.
  </Card.Text>
  </Card.Body>
  </Card>
  
</CardDeck>

         </div>
         </div>
  
        )
    }
}
export default protokol;

