import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import api from '../../services/api'
import './home.css'
import { Loading } from '../../components/loading'

function Home() {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get('/r-api/?api=filmes')
      setFilmes(response.data)
      setLoading(false)
    }

    loadFilmes()

  }, [])


  return (
    <>
      <Header />
      {
        loading ?
          <Loading />
          :
          <div className='container'>
            <div className='lista-filmes'>
              {filmes.map(filme => {
                return (
                  <article key={filme.id}>
                    <strong>{filme.nome}</strong>
                    <img src={filme.foto} className='foto-filme'></img>
                    <Link to={`filme/${filme.id}`} className='link'>Acessar</Link>
                  </article>
                )
              })}
            </div>

          </div>

      }

    </>
  );
}

export default Home;
