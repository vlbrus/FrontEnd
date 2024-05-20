import React from 'react';


class AddUser extends React.Component {
    userAdd = {
    }
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder='First name' onChange={(e) => this.setState({first_name: e.target.value})}></input>
                <input placeholder='Last name' onChange={(e) => this.setState({last_name: e.target.value})}></input>
                <input type="email" placeholder='Email' onChange={(e) => this.setState({email: e.target.value})}></input>
                <input type='password' placeholder='Password' onChange={(e) => this.setState({password: e.target.value})}></input>
                <input type='password' placeholder='Confirm password' onChange={(e) => this.setState({confirmPassword: e.target.value})}></input>
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd ={
                        first_name: this.state.first_name, 
                        last_name: this.state.last_name,
                        email: this.state.email,

                        password: this.state.password,
                        confirmPassword: this.state.confirmPassword,
                    }
                    console.log(this.userAdd)
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    }
                    }>Sign up</button>
            </form>
        )
    }


}


export default AddUser