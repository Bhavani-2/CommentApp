import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
// import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

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
  state = {
    commentList: [],
    name: '',
    comment: '',
  }

  inputValue = event => {
    this.setState({name: event.target.value})
  }

  cmmntValue = event => {
    this.setState({comment: event.target.value})
  }

  onAddCmmnt = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newCommnet = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
      // time: formatDistanceToNow(new Date()),
    }
    this.setState(prev => ({
      commentList: [...prev.commentList, newCommnet],
    }))
  }

  render() {
    const {name, comment, commentList} = this.state

    return (
      <div className="maincontainer">
        <div className="comments-img-card-container">
          <div className="comments-card-container">
            <h1 className="heading">Comments</h1>
            <p className="para">Say somithing about 4.0 Technologies</p>
            <form className="form" onSubmit={this.onAddCmmnt}>
              <input
                onChange={this.inputValue}
                className="input"
                type="text"
                placeholder="Your Name"
                value={name}
              />
              <textarea
                className="textarea"
                onChange={this.cmmntValue}
                rows="10"
                cols="8"
                placeholder="Your Comment"
                name={comment}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
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
          {commentList.length > 0 && (
            <ul className="unorder">
              {commentList.map(each => (
                <CommentItem
                  details={each}
                  key={each.id}
                  color={initialContainerBackgroundClassNames}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Comments
