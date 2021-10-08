import React from 'react';

class GoogleAuth1 extends React.Component{
    state = {isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'191140515243-3q4tvk25qbg8scg5hpjdh4b6aip5fl1t.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = () =>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    onSignIn=()=>{
        this.auth.signIn();
    }
    onSignOut=()=>{
        this.auth.signOut();
    }

    renderAuth(){
        if(this.state.isSignedIn===null){
            return null;
        }else if(this.state.isSignedIn){
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

export default GoogleAuth1;