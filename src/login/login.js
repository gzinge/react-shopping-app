import React from 'react';
import './login.css';
import loginImage from '../image/loginUser.png';
import {Button, Grid,InputAdornment,TextField} from "@material-ui/core";
import {AccountCircle,LockRounded} from "@material-ui/icons";
import axios from 'axios';
import SignIn from './signup';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            username: "",
            password : ""
        }
        this.formChanged=this.formChanged.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    formChanged(e){
        const value = e.target.value;
         this.setState({
            [e.target.name]: value
        });
    }

    onSubmit(e){
        e.preventDefault()
        console.log(this.state);
        console.log("Username: ",this.state.username);
        console.log("Password:",this.state.password);

        const body = {
            email: this.state.username,
            password: this.state.password
        }

        axios.post("/user/validateUser",body)
            .then(response =>{
                if(response.data){
                    alert("Login Successful.!!")
                    console.log("Response: ",response.data)
                }else{
                    alert("username/password is incorrect")
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            })
    }




    render(){
        return (
            <div className="continerBox">
               <Grid item xs={3} sm={6} className="imgcontainer">
                    <img src={loginImage} className="avatar" alt="demo"/>
               </Grid>
               <Grid  item xs={3} sm={6}>            
                    <div className="rightBox">
                        <div className="titleAuth">User Login</div>
                        <TextField label="Username" margin ="normal" InputProps ={{startAdornment:(
                            <InputAdornment position="start"><AccountCircle /></InputAdornment>
                        ),}} name="username"  value={this.state.username} onChange = {this.formChanged}/>

                        <TextField label="Password" margin ="normal" InputProps ={{startAdornment:(
                            <InputAdornment position="start"><LockRounded /></InputAdornment>
                        ),}} type ="password" name= "password" value={this.state.password} onChange = {this.formChanged}/>
                        <div style={{height:20}}/>
                        <Button color="primary" variant="contained" onClick ={this.onSubmit}>
                            Log in
                        </Button>
                        <div style={{height:10}}/>
                        <Grid item>
                            <Button >
                                Forgot Password?
                            </Button>
                        </Grid>
                    <div>
                       <span>Don't have account? <a href ="">SignUp</a></span>
                    </div>    
                    </div>          
               </Grid>
           </div>
        )}
}

export default Login;