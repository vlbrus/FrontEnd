import React from 'react';
import Article from './Article';


class Articles extends React.Component {
    
    render() {
        if (this.props.articles.length > 0)
            return (
                <div>
                    {this.props.articles.map((el) => (
                        <Article onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} article = {el}/>
                        ))}
                </div>)
        else
            return (<div className='article'>
                <h3>No news</h3>
            </div>)
    }


}


export default Articles