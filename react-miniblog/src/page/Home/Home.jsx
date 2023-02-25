// CSS
import styles from './Home.module.css'

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

// hooks
import { useFetchDocuments } from '../../hooks'

// componentes
import { PostDetail } from '../../components'

const Home = () => {
  const navigate = useNavigate()

  const [query, setQuery] = useState('')
  const { documents: posts, loading } = useFetchDocuments('posts')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(query) {
      navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles ? styles.home : undefined}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form 
        className={styles ? styles.search_form : undefined}
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          placeholder='Ou busque por tags...'
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando ...</p>}
        {posts && posts.map((post) => (
          <PostDetail post={post} key={post.id}/>
        ))}
        {posts && posts.length === 0 && (
          <div className={styles ? styles.noposts : undefined}>
            <p>Não foram encontrados posts.</p>
            <Link to='/posts/create' className='btn'>Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home