import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {newItem: {}, running: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({newItem: updatedData, running: false})
  }

  render() {
    const {newItem, running} = this.state
    const {author, avatarUrl, content, imageUrl, title} = newItem
    return running ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="cont">
        <h1 className="blog-head">{title}</h1>
        <div className="inner-cont">
          <div className="img-cont">
            <img src={avatarUrl} alt="auth" className="auth-image" />
            <pc className="author">{author}</pc>
          </div>
          <img src={imageUrl} alt={title} className="main-img" />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }
}
export default BlogItemDetails
