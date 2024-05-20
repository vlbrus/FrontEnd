import React from 'react';
import AddUser from './addUser';


class SignUp extends React.Component {

    render() {
        return (
            <div>
                <h3 className='authButton' onClick={() => {
                    this.props.isOpen ? this.props.closeForm() : this.props.setActiveForm();
                }} >Sign up </h3>

                {this.props.isOpen && <AddUser />}
                
            </div>


        )
    }


}


export default SignUp