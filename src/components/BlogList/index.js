import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {listOf: [], status: true}

  componentDidMount() {
    this.getBlog()
  }

  getBlog = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({listOf: updatedData, status: false})
  }

  render() {
    const {listOf, status} = this.state
    console.log(listOf)
    console.log(status)
    return (
      <div>
        {status ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="card-cont">
            {listOf.map(each => (
              <BlogItem key={each.id} item={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
