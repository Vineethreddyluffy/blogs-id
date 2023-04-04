import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div className="home-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      alt="profile"
      className="profile"
    />
    <h1 className="home-head">Wade Warren</h1>
    <p className="home-para">Software developer at UK</p>
    <BlogList />
  </div>
)

export default Home
