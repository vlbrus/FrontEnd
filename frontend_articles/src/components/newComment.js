import React from 'react';


class NewComment extends React.Component {
    commentAdd = {
    }
    constructor(props){
        super(props)
        this.state = {
            comment: ""
        }
    }
    render() {
      return (
        <form ref={(el) => this.myComment = el}>
            <input placeholder='Comment' onChange={(e) => this.setState({comment: e.target.value})}></input>
            <button type='button' onClick={() => {
                this.myComment.reset()
                this.commentAdd ={
                    comment: this.state.comment,
                }
                console.log(this.commentAdd)}  
                }>Add</button>
        </form>
      )
    }


  }


export default NewComment