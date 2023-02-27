import styles from './EditePost.module.css'

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// context
import { useAuthValue } from '../../context/AuthContext' 

// hooks
import { useUpdateDocument, useFetchDocument } from '../../hooks'

const EditPost = () => {
  const { id } = useParams()

  const { document: post, loading, error } = useFetchDocument('posts', id)

  const [title, setTitle] = useState('');
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    
    if(post) {
      setTitle(post.title)
      setImage(post.image)
      setBody(post.body)

      const textTags = post.tags.join(', ')

      setTags(textTags)
    }

  }, [post])

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument('posts', id);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image
    try {
      new URL(image)
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.')
      return
    }

    // create tags array
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if(formError) return

    const data = {
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

    updateDocument(id, data);

    // redirect to home page
    navigate("/dashboard");
  };

  return (
    <div className={styles.edit_post}>
      {loading && <p>Carregando ...</p>}
      {error && <h2>Ocorreu um erro. Tente novamente mais tarde</h2>}
      {post && (
        <>
          <h2>Editar post</h2>
          <p>Altere os dados do post "{post && post.title}"</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título:</span>
              <input
                type="text"
                name="text"
                required
                placeholder="Pense num bom título..."
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              <span>URL da imagem:</span>
              <input
                type="text"
                name="image"
                required
                placeholder="Insira uma imagem que representa seu post"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </label>
            <p className={styles.preview_title}>Preview da imagem:</p>
            <img className={styles.image_preview} src={image} alt={title} />
            <label>
              <span>Conteúdo:</span>
              <textarea
                name="body"
                required
                placeholder="Insira o conteúdo do post"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              ></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input
                type="text"
                name="tags"
                required
                placeholder="Insira as tags separadas por vírgula"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>
            {!response.loading && <button className="btn">Editar post</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde.. .
              </button>
            )}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost