import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, author, avatarUrl, imageUrl, topic, id} = item
  return (
    <Link to={`/blogs/${id}`}>
      <div className="item-cont">
        <img src={imageUrl} alt={title} className="image" />
        <div className="text-cont">
          <h1 className="title-para">{title}</h1>
          <p className="topic-para">{topic}</p>
          <div className="author-cont">
            <img src={avatarUrl} alt={title} className="auth-image" />
            <p className="title-para">{author}</p>
          </div>
        </div>
        <div />
      </div>
    </Link>
  )
}

export default BlogItem
