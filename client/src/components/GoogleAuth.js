import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions'

class GoogleAuth extends React.Component{
   
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'191140515243-3q4tvk25qbg8scg5hpjdh4b6aip5fl1t.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignIn) =>{
       if(isSignIn){
        this.props.signIn(this.auth.currentUser.get().getId());
       }else{
        this.props.signOut();
       }
    }
    onSignIn=()=>{
        this.auth.signIn();
    }
    onSignOut=()=>{
        this.auth.signOut();
    }

    renderAuth(){
        if(this.props.isSignedIn===null){
            return null;
        }else if(this.props.isSignedIn){
            return(
                <button onClick ={this.onSignOut} className ="ui white google button">
                    <i className ="google icon"/>
                    Sign Out
                </button>
            )
        }else{
            return(
                <button onClick ={this.onSignIn} className ="ui white google button">
                    <i className ="google icon"/>
                    Sign In
               </button>
            )
        }
    }
    render(){
        return(
            <div>{this.renderAuth()}</div>
        );
    }
}

const mapStateToProps = (state) =>{
 return {isSignedIn:state.auth.isSignIn};
}
export default connect(mapStateToProps,{signIn,signOut}) (GoogleAuth);