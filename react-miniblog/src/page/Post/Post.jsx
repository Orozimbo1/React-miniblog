import style from './Post.module.css'

import { useParams } from 'react-router-dom'

// hook
import { useFetchDocument } from '../../hooks'

const Post = () => {
  const { id } = useParams()
  const { document: post, loading, error } = useFetchDocument('posts', id)

  return (
    <div>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Post