import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';

import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamShow from './Streams/StreamShow';
import StreamList from './Streams/StreamList';
import Header from './Header';
import history from '../history';

const App = () =>{
    return (
        <div  className="ui container">
           
            <Router history={history}>
                <div>
                   <Header/>
                   <Switch>
                    <Route path = '/' exact component = {StreamList}/>
                    <Route path = '/streams/new' exact component = {StreamCreate}/>
                    <Route path = '/streams/delete/:id' exact component = {StreamDelete}/>
                    <Route path = '/streams/:id' exact component = {StreamShow}/>
                    <Route path = '/streams/edit/:id' exact component = {StreamEdit}/>
                   </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
