import React from 'react';


class AddArticle extends React.Component {
    articleAdd = {
    }
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            creator: "",
            image_url: "",
            category: []
        }
    }
    render() {
      return (
        <form ref={(el) => this.myForm = el}>
            <input placeholder='title' onChange={(e) => this.setState({title: e.target.value})}></input>
            <textarea placeholder='description' onChange={(e) => this.setState({description: e.target.value})}></textarea>
            <input placeholder='creator' onChange={(e) => this.setState({creator: e.target.value})}></input>
            <input placeholder='image_url' onChange={(e) => this.setState({image_url: e.target.value})}></input>
            <input placeholder='category' onChange={(e) => this.setState({category: e.target.value})}></input>
            <button type='button' onClick={() => {
                this.myForm.reset()
                this.articleAdd ={
                    title: this.state.title, 
                    description: this.state.description,
                    creator: this.state.creator,
                    image_url: this.state.image_url,
                    category: this.state.category,
                }
                console.log(this.articleAdd)
                if(this.props.article)
                    this.articleAdd.id = this.props.article.id
                this.props.onAdd(this.articleAdd)}
                

                }>Add</button>
        </form>
      )
    }


  }


export default AddArticle