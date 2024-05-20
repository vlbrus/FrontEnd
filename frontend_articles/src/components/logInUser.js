import React from 'react';


class LogInUser extends React.Component {
    userAdd = {
    }
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input type="email" placeholder='Email' onChange={(e) => this.setState({email: e.target.value})}></input>
                <input type='password' placeholder='Password' onChange={(e) => this.setState({password: e.target.value})}></input>
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd ={
                        email: this.state.email,
                        password: this.state.password,
                    }
                    console.log(this.userAdd)
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    }
                    }>Sign in</button>
            </form>
        )
    }


}


export default LogInUser