import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext"

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.create_post}>
            <h2>Criar post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título</span>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder='Título do post.'
                        onChange={(e) => { setTitle(e.target.value) }}
                        value={title} />
                </label>
                <label>
                    <span>Imagem</span>
                    <input
                        type="text"
                        name="image"
                        required
                        placeholder='Imagem do post.'
                        onChange={(e) => { setImage(e.target.value) }}
                        value={image} />
                </label>
                <label>
                    <span>Conteúdo</span>
                    <textarea
                        name="body"
                        required
                        placeholder='Insira o conteúdo do post.'
                        onChange={(e) => { setBody(e.target.value) }}
                        value={body}
                    ></textarea>
                </label>
                <label>
                    <span>Título</span>
                    <input
                        type="text"
                        name="tags"
                        required
                        placeholder='Insira as tags serparas por vírgula.'
                        onChange={(e) => { setTags(e.target.value) }}
                        value={tags} />
                </label>
                <button type="submit" className="btn">Postar</button>
                {/*{!loading && <button type="submit" className="btn">Postar</button>}
                {loading && <button disabled className="btn">Aguarde...</button>}
                {error && <p className="error">{error}</p>}*/}
            </form>
        </div>
    )
}

export default CreatePost