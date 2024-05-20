import React from 'react';
import LogInUser from './logInUser';

class SignIn extends React.Component {

    render() {
        return (
            <div >
                <h3 className='authButton' onClick={() => {
                    this.props.isOpen ? this.props.closeForm() : this.props.setActiveForm();
                }} >Sign in </h3>
                {this.props.isOpen && <LogInUser />}
            </div>


        )
    }


}


export default SignIn