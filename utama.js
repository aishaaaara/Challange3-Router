import React from 'react';
import {Switch, Route} from 'react-router-dom';

import beranda from './beranda';
import protokol from './protokol';
import data from './data';


const utama = () =>(
    <Switch>
        <Route exact path="/beranda" component={beranda} />
        <Route path="/protokol" component={protokol} />
        <Route path="/data" component={data} />
    </Switch>
)
export default utama;