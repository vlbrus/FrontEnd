import React from 'react';
import SignUp from './signUp';
import SignIn from './signIn';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: null // 'signUp' or 'signIn'
        };
    }

    setActiveForm = (formName) => {
        this.setState({ activeForm: formName });
    }
    render() {
      return (
        <header className='header'>
            <SignUp isOpen={this.state.activeForm === 'signUp'}
                    setActiveForm={() => this.setActiveForm('signUp')}
                    closeForm={() => this.setActiveForm(null)}/>
            <SignIn isOpen={this.state.activeForm === 'signIn'}
                    setActiveForm={() => this.setActiveForm('signIn')}
                    closeForm={() => this.setActiveForm(null)}/>
        </header>
      )
    }


  }


export default Header