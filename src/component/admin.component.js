
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
// import User from './src/User.js';
import axios from'axios';
import {Button,Grid, Row, Col, Clearfix,Label} from 'react-bootstrap';
import icuser from './image/user.png';
import icpass from './image/pass.png';
//import Dialog from 'react-dialog';

import Dialog from 'react-bootstrap-dialog'

import './style/body.css';
const url = localStorage.getItem("url");
// const fromedit = (
//     <div>
//         ชื่อ :<input className="form-control"
//                      id="email"
//                      type="text"
//                      style={{marginRight: '5px'}}
//                      placeholder="username"
//                      value = "fdfdf"
//                      onChange={event => this.setState({data : {name : event.target.value}})}
//             />
//         นามสกุล :<input/>
//     </div>
// );
class AdminComponent extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            data:'',
            name:'',
            id:'',
            lastname:'',
            email: '',
            address:'',
            username:'',
            password: '',
            type: '',
            isDialogOpen: false,

        }
        this.onClickOkCancel = this.onClickOkCancel.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    insert_update(path){
        axios.get(url+ path, {
            params: {
                id: this.state.id,
                name : this.state.name,
                lastname : this.state.lastname,
                email: this.state.email,
                address:this.state.address,
                username:this.state.username,
                password: this.state.password,
                type: this.state.type,

            }
        }).then(res => {
            console.log(res.data.status);

            if (res.data.status === "sucess") {
                window.location.reload();
            } else {
                alert("ไม่สำเร็จ");
            }

        })
            .catch(err => {
                alert("ไม่สำเร็จ");
            });
    }


    onClickOkCancel () {
        var fromedit = (
            <div className="dialog" >
                ชื่อ : <input     className="form-control"
                                type="text"
                                style={{marginRight: '5px'}}
                                defaultValue = {this.state.name}
                                onChange={event => this.setState({name : event.target.value})}
            />
                นามสกุล : <input className="form-control"
                                 type="text"
                                 style={{marginRight: '5px'}}
                                 placeholder="username"
                                 defaultValue = {this.state.lastname}
                                 onChange={event => this.setState({lastname : event.target.value})}
            />
                Email : <input className="form-control"
                               type="email"
                               style={{marginRight: '5px'}}
                               placeholder="username"
                               defaultValue = {this.state.email}
                               onChange={event => this.setState({email : event.target.value})}
            />
                ที่อยู่ : <input className="form-control"
                               type="email"
                               style={{marginRight: '5px'}}
                               placeholder="username"
                               defaultValue = {this.state.address}
                               onChange={event => this.setState({address : event.target.value})}
            />
                ชื่อผู้ใช้ : <input className="form-control"
                               type="email"
                               style={{marginRight: '5px'}}
                               placeholder="username"
                               defaultValue = {this.state.username}
                               onChange={event => this.setState({username : event.target.value})}
            />
                รหัสผ่าน : <input className="form-control"
                               type="email"
                               style={{marginRight: '5px'}}
                               placeholder="username"
                               defaultValue = {this.state.password}
                               onChange={event => this.setState({password : event.target.value})}
            />
                ประเภทผู้ใช้ : <input className="form-control"
                               type="email"
                               style={{marginRight: '5px'}}
                               placeholder="username"
                               defaultValue = {this.state.type}
                               onChange={event => this.setState({type : event.target.value})}
            />
            </div>
        );
        // this.dialog.show({
        //     body: fromedit,
        //     actions: [
        //         Dialog.CancelAction(),
        //         Dialog.OKAction(() => {
        //             alert(1);
        //         })
        //     ]
        // })
        this.dialog.show({
            title: 'แก้ไขข้อมูล',
            body: fromedit,
            actions: [
                Dialog.CancelAction(),
                Dialog.OKAction(() => {
                    //alert("ok update");
                    this.insert_update("/update")
                   })
            ],
            bsSize: 'md',
            onHide: (dialog) => {
                dialog.hide()
                console.log('closed by clicking background.')
            }
        })
    }
    onClickregister () {
        var fromedit = (
            <div className="dialog" >
                ชื่อ : <input     className="form-control"
                                  type="text"
                                  style={{marginRight: '5px'}}
                                  placeholder="name"

                                  onChange={event => this.setState({name : event.target.value})}
            />
                นามสกุล : <input className="form-control"
                                 type="text"
                                 style={{marginRight: '5px'}}
                                 placeholder="lastname"

                                 onChange={event => this.setState({lastname : event.target.value})}
            />
                Email : <input className="form-control"
                               type="email"
                               style={{marginRight: '5px'}}
                               placeholder="Email"

                               onChange={event => this.setState({email : event.target.value})}
            />
                ที่อยู่ : <input className="form-control"
                                 type="email"
                                 style={{marginRight: '5px'}}
                                 placeholder="address"

                                 onChange={event => this.setState({address : event.target.value})}
            />
                ชื่อผู้ใช้ : <input className="form-control"
                                    type="email"
                                    style={{marginRight: '5px'}}
                                    placeholder="username"

                                    onChange={event => this.setState({username : event.target.value})}
            />
                รหัสผ่าน : <input className="form-control"
                                  type="email"
                                  style={{marginRight: '5px'}}
                                  placeholder="password"

                                  onChange={event => this.setState({password : event.target.value})}
            />
                ประเภทผู้ใช้ : <input className="form-control"
                                      type="email"
                                      style={{marginRight: '5px'}}
                                      placeholder="type"

                                      onChange={event => this.setState({type : event.target.value})}
            />
            </div>
        );
        // this.dialog.show({
        //     body: fromedit,
        //     actions: [
        //         Dialog.CancelAction(),
        //         Dialog.OKAction(() => {
        //             alert(1);
        //         })
        //     ]
        // })
        this.dialog.show({
            title: 'เพิ่มสมาชิก',
            body: fromedit,
            actions: [
                Dialog.CancelAction(),
                Dialog.OKAction(() => {
                    this.insert_update("/insert")
                })
            ],
            bsSize: 'md',
            onHide: (dialog) => {
                dialog.hide()
                console.log('closed by clicking background.')
            }
        })
    }


    onClick () {
        this.dialog.showAlert('Hello Dialog!')
    }
    setdata(id) {
        console.log(id);
        console.log(this.props.admin.resultAdmin[id].name);
        this.setState({data : this.props.admin.resultAdmin[id]});
        this.setState({name : this.props.admin.resultAdmin[id].name,
                        id : this.props.admin.resultAdmin[id].id,
                       lastname: this.props.admin.resultAdmin[id].lastname,
                        email: this.props.admin.resultAdmin[id].email,
                        address:this.props.admin.resultAdmin[id].address,
                        username:this.props.admin.resultAdmin[id].username,
                        password: this.props.admin.resultAdmin[id].password,
                        type: this.props.admin.resultAdmin[id].type,})

        setTimeout(this.onClickOkCancel,200);
    }
    deletedata(id){

        this.setState({name : this.props.admin.resultAdmin[id].name,
            id : this.props.admin.resultAdmin[id].id,
            lastname: this.props.admin.resultAdmin[id].lastname,
            email: this.props.admin.resultAdmin[id].email,
            address:this.props.admin.resultAdmin[id].address,
            username:this.props.admin.resultAdmin[id].username,
            password: this.props.admin.resultAdmin[id].password,
            type: this.props.admin.resultAdmin[id].type,})
        setTimeout(()=>this.insert_update("/delete"),200);
    }
    insertdata() {

        this.setState({name : '',
            lastname: '',
            email: '',
            address:'',
            username:'',
            password: '',
            type: ''});

        setTimeout(this.onClickregister.bind(this),200);
    }
    componentDidMount(){


        this.props.setAdmin();

            Dialog.setOptions({
                defaultOkLabel: 'ตกลง',
                defaultCancelLabel: 'ยกเลิก',
                primaryClassName: 'btn-success',
                bsSize: 'md',
            })




    }
    componentWillUnmount () {
        Dialog.resetOptions()
    }
    handleChange(event) {
        this.setState({name: event.target.value});
    }




    render() {
        if(this.props.user.datauser.type !== "admin"){
            window.location.href = 'http://103.253.72.69:3001';
        }else{

        }
        // if( localStorage.getItem("session") !== (this.props.user.resultuser.results) ){
        //     console.log("ok");
        //     localStorage.setItem("url","http://103.253.72.69:10001/api");
        //     localStorage.setItem("session", (this.props.user.resultuser.results) );
        //     window.location.reload();
        //     //this.props.setDataUser(localStorage.getItem("session"));
        // }
        let content;

        if (this.state.loading) {
            content = <div>Loading...</div>;
        } else {

            content = this.props.admin.resultAdmin.map((admin,index) => {

                return (
                    <tr key={index} className="tr">
                        <td  className="td">{admin.id}</td>
                        <td  className="td">{admin.name}</td>
                        <td  className="td">{admin.lastname}</td>
                        <td  className="td">{admin.email}</td>
                        <td  className="td">{admin.address}</td>
                        <td  className="td">{admin.username}</td>
                        <td  className="td">{admin.password}</td>
                        <td  className="td">{admin.type}</td>
                        <td  className="td"><button className="buttonactive" onClick={()=>this.setdata(index)}>แก้ไข</button></td>
                        <td  className="td"><button className="buttonactive" onClick={()=>this.deletedata(index)}>ลบ</button></td>
                    </tr>
                );
            });
        }
        return (
            <div >
                <Grid>
                    <Row sm={12} lg={12}>
                        <div className="header">จัดการข้อมูลผู้ใช้งาน</div>
                    </Row >
                    <Row sm={12} lg={12}>
                        <div className="header"><button className="buttonactive" onClick={()=>this.insertdata()} >เพิ่มสมาชิก</button></div>
                    </Row >

                    <br/>
                    <Col sm={12} lg={12}>
                        <table className="table">
                            <tr className="tr">
                                <th className="th">id</th>
                                <th className="th">ชือ</th>
                                <th className="th">นามสกุล</th>
                                <th className="th">email</th>
                                <th className="th">ที่อยู่</th>
                                <th className="th">ชื่อผู้ใช้</th>
                                <th className="th">รหัสผ่าน</th>
                                <th className="th">ชนิดสมาชิก</th>
                                <th className="th"/>
                                <th className="th"/>
                            </tr>
                            {content}
                        </table>
                    </Col>
                </Grid>
                <div>

                    <Dialog className="dialog"ref={(el) => { this.dialog = el }} />

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        admin: state.admin,
        user : state.user
    };
};
const mapDispatchToprops = (dispatch) =>{
    return{
        setAdmin : () =>{
            dispatch({
                type: "FETCH_ADMIN",
                payload :new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        resolve(axios.get(url+'/admin')
                            .then(res => {
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


export default withRouter(connect(mapStateToProps, mapDispatchToprops)(AdminComponent));

