import styles from './Search.module.css'

import { Link } from 'react-router-dom'

// hooks
import { useFetchDocuments, useQuery } from '../../hooks'

// componentes
import { PostDetail } from '../../components'

const Search = () => {
  const query = useQuery()
  const search = query.get('q')

  const { documents: posts } = useFetchDocuments('posts', search)

  return (
    <div className={styles.search_container}>
      <h1>Search</h1>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Nenhum resultado encontrado a partir da busca <span>"{search}"</span>.</p>
            <Link to='/' className='btn btn-dark'>
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Search