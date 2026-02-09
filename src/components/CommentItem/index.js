// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {details, color} = props
  const {id, comment, name} = details
  const time = formatDistanceToNow(new Date())
  const number = Math.ceil(Math.random() * (color.length - 1))

  const colorClassName = color[number]

  return (
    <li className="list">
      <div className="name-commnts-container">
        <p className={`name-icon ${colorClassName}`}>{name.slice(0, 1)}</p>
        <div className="name-commnts-time-container">
          <div className="name-time-container">
            <h1 className="name-heading">{name}</h1>
            <p className="time-para">{time}</p>
          </div>
          <p className="cmnt-para">{comment}</p>
        </div>
      </div>
      <div className="like-container">
        <button type="button" className="like-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
            className="like-img"
          />
          <p className="like-button-para">Like</p>
        </button>
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CommentItem
