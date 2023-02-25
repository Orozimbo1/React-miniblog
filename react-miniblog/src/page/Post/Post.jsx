import style from './Post.module.css'

import { useParams } from 'react-router-dom'

// hook

const Post = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Post</h1>
      <p>{id}</p>
    </div>
  )
}

export default Post