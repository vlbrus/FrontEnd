import React from 'react';
import Header from './components/header';
import Articles from './components/Articles';
import AddArticle from './components/AddArticle';
import axios from 'axios';


const article_samples = "/news_sample.json"


class App extends React.Component {
  constructor(props) {
    super(props)
    
    axios.get(article_samples).then((res) => {
      this.setState({articles: res.data.results})
    })

    this.state = {
      articles: []
    }
    console.log(this.articles)
    this.addArticle = this.addArticle.bind(this)
    this.deleteArticle = this.deleteArticle.bind(this)
    this.editArticle = this.editArticle.bind(this)
    this.commentArticle = this.commentArticle.bind(this)

  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <Articles  articles={this.state.articles} onDelete={this.deleteArticle} onEdit={this.editArticle} onComment={this.commentArticle}/>
        </main>
        <aside>
          <AddArticle onAdd={this.addArticle}/>
        </aside>
      </div>)
      
  }

  deleteArticle(id){
    this.setState({
        articles: this.state.articles.filter((el) => el.id !== id)
    })
  }

  editArticle(article){
    let allArticles = this.state.articles
    allArticles[article.id - 1] = article

    this.setState({articles: []}, () =>{
      this.setState({articles: [...allArticles]})
    })
  }
  
  commentArticle(article){
    let allArticles = this.state.articles
    allArticles[article.id - 1] = article

  }

  addArticle(article){
    const id = this.state.articles.length + 1
    this.setState({articles: [...this.state.articles, {id, ...article}]})
  }
  

}


export default App