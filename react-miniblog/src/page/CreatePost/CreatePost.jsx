import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// context
import { useAuthValue } from '../../context/AuthContext' 

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className={styles ? styles.create_post : undefined}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o quiser e compartilhe conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input 
            type="text" 
            name='title' 
            required 
            placeholder='Pense em um bom título..' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input 
            type="text" 
            name='image' 
            required 
            placeholder='Insira uma imagem que representa seu post' 
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea 
            name="body"
            required
            placeholder='Insira o conteúdo do post'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input 
            type="text" 
            name='tags' 
            required 
            placeholder='Insira as tags separadas por vírgula' 
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <button className='btn'>Criar post</button>
        {/* {!loading && <button className='btn'>Criar post</button>}
        {loading && <button disabled className='btn'>Aguarde...</button>}
        {error && <p className='error'>{error}</p>} */}
      </form>
    </div>
  )
}

export default CreatePost