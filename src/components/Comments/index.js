import {Component} from 'react'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="comments-img-card-container">
          <div className="comments-card-container">
            <h1 className="heading">Comments</h1>
            <p className="para">Say somithing about 4.0 Technologies</p>
            <input className="input" type="text" placeholder="Your Name" />
            <textarea
              className="textarea"
              rows="10"
              cols="8"
              placeholder="Your Comment"
            />
            <button className="button" type="submit">
              Add Comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="img"
          />
        </div>

        <hr className="hr-line" />
        <div className="entered-comments-container">
          <div className="comment-count-container">
            <p className="count-para">0</p>
            <p className="count-cmmts-para">Comments</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
