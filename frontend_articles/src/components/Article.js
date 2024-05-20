import React from 'react';
import AddArticle from './AddArticle';
import NewComment from './newComment';
import { IoCloseCircleSharp, IoHammerSharp, IoChatbubbleSharp  } from 'react-icons/io5';


class Article extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false,
            commentForm: false
        }
    }
    article = this.props.article
    render() {
        return (
            <div className='article' >
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.article.id)} className='delete-icon'/>
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className='edit-icon'/>
                <IoChatbubbleSharp onClick={() => {
                    this.setState({
                        commentForm: !this.state.commentForm
                    })
                }} className='comment-icon'/>
                <h3 className='articleTitle'>{this.article.title}</h3>
                <p className='description'>{this.article.description}</p>
                <img src ={this.article.image_url} alt='NoImage' className='articleImage'></img>
                <p className='author'>Author: {this.article.creator}</p>
                <b className='category'>Category tags: {this.article.category}</b>

                {this.state.editForm && <AddArticle article={this.article} onAdd={this.props.onEdit}/>}
                {this.state.commentForm && <NewComment article={this.article}/>}
            </div>
        )
    }


}


export default Article