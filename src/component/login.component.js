
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
// import User from './src/User.js';
import axios from'axios';
import icuser from './image/user.png';
import icpass from './image/pass.png';
import './style/body.css';

const url = localStorage.getItem("url");
class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }


    singUp() {
        if (this.state.email!=="" && this.state.password !=="") {
          this.props.setUser(this.state.email,this.state.password)
            console.log("ddd");
            //console.log(dec.name);


            console.log('this.state', this.state);
        }else if(this.state.email !== "") {
            alert('error Please input Password');
        }else if(this.state.password !== "") {
            alert('error Please input Username');
        }else {
            alert('error Please input Data');
        }
        // componentDidMount() {
        //   Axios({
        //         method : 'post',
        //         url    : '',
        //         data   : {
        //           this.state.email,
        //           this.state.password,
        //         }
        //     })
        // }

    }


    render() {
        if( localStorage.getItem("session") !== (this.props.user.resultuser.results) ){
            console.log("ok");
            localStorage.setItem("url","http://103.253.72.69:10001/api");
            localStorage.setItem("session", (this.props.user.resultuser.results) );
            window.location.reload();
            //this.props.setDataUser(localStorage.getItem("session"));
        }
        return (
            <div className="body1">
                <div className="form-2" style={{margin: 'center'}}>
                    <h1 className="log-in">Login</h1>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><img src={icuser} width={15} height={15} /></span>
                        <input className="form-control"
                               id="email"
                               type="text"
                               style={{marginRight: '5px'}}
                               placeholder="username"
                               onChange={event => this.setState({email: event.target.value})}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon2"><img src={icpass} width={15} height={15} /></span>
                        <input className="form-control"
                               id="password"
                               type="password"
                               style={{marginRight: '5px'}}
                               placeholder="password"
                               onChange={event => this.setState({password: event.target.value})}
                        />
                    </div>
                    <br />
                    <div>
                        <button
                            className="submit"
                            type="button"
                            onClick={() => this.singUp()}
                        >Submit
                        </button><br />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        user: state.user,
        math: state.math,
        data: state.db,
        realtimedata: state.real
    };
};
const mapDispatchToprops = (dispatch) =>{
    return{
        setUser : (username,password) =>{
            dispatch({
                type: "FETCH_USER",
                payload :new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        // resolve(axios.get('http://unmannerly-fence.000webhostapp.com/00webhost_farmpassion/apilogin.php', {
                        resolve(axios.get('http://103.253.72.69:10001/api/login', {
                            params: {
                                uname: username,
                                pass: password
                            }
                        })
                            .then(res => {
                                console.log(JSON.stringify(res.data.results));
                                var obj = JSON.parse(JSON.stringify(res.data));
                                console.log(obj.results);
                                obj.results
                                var jwtDecode = require('jwt-decode');
                                var deco = jwtDecode(obj.results);
                                var json_deco = JSON.parse(JSON.stringify(deco));
                                if(json_deco.status === "0"){
                                    alert("รหัสผ่านไม่ถูกต้อง");
                                }
                                return res.data })
                            .catch(err => { throw err; }));
                    },500);
                })
            });

        },

        setDataUser : (jwtcode) =>{
            var jwtDecode = require('jwt-decode');
            dispatch({
                type: "FETCH_DATAUSER",
                payload : jwtDecode(jwtcode)
            });

        }
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToprops)(LoginComponent));

