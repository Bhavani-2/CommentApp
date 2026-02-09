// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {details, onClickLike, onClickDelete} = props
  const {id, comment, name, isLike, colorClass} = details
  const time = formatDistanceToNow(new Date())

  const onClickLikeButton = () => {
    onClickLike(id)
  }

  const onDelete = () => {
    onClickDelete(id)
  }

  const url = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const text = isLike ? 'Liked' : 'Like'
  const textClassName = isLike ? 'like-text' : 'like-button-para'
  return (
    <li className="list">
      <div className="name-commnts-container">
        <p className={`name-icon ${colorClass}`}>{name.slice(0, 1)}</p>
        <div className="name-commnts-time-container">
          <div className="name-time-container">
            <h1 className="name-heading">{name}</h1>
            <p className="time-para">{time}</p>
          </div>
          <p className="cmnt-para">{comment}</p>
        </div>
      </div>
      <div className="like-container">
        <button
          type="button"
          className="like-button"
          onClick={onClickLikeButton}
        >
          <img src={url} alt="like" className="like-img" />
          <p className={textClassName}>{text}</p>
        </button>
        <button type="button" className="delete-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="list-hr-line" />
    </li>
  )
}

export default CommentItem
