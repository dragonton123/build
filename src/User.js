import React, {Component} from 'react';
import axios from 'axios';
class User extends Component{

  constructor() {
    super();
    this.state = {
     data: '',
     loading: true
    };
    }
    componentDidMount () {
    // const url = 'https://jsonplaceholder.typicode.com/users';
    //
    // // in axios access data with .data
    // axios.get(url)
    //   .then(response => {
    //     this.setState({
    //       data: response.data,
    //       loading: false
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

this.setState({

      data:this.props.data,
      loading: false
});
    // in jquery you don't need .data, the rest is identical
    // $.get(url)
    //   .then(response => {
    //     this.setState({
    //       data: response,
    //       loading: false
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

  }
          render(){

            let content;

          if (this.state.loading) {
          content = <div>Loading...</div>;
          } else {
          content = this.state.data.map((user, index) => {
            return (
              <div key={index}>
                <b>Username:</b>&nbsp;{user.username},&nbsp;
                <b>Email:</b>&nbsp;{user.email}&nbsp;
              </div>
            );
          });
          }



        return(
          <div>
          <p>We have Nomkolng for every one</p>
          <p>{this.props.data}</p>
          {content}


          </div>
        );
      }


}
export default User;
