import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import './salvos.css'
import { showMessageSuccess, showMessageError} from '../../components/alerts'

export default function Salvos() {

    const [filmesSalvos, setFilmesSalvos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setFilmesSalvos(JSON.parse(localStorage.getItem('minhaLista')))
    }, [])

    const excluirFilme = (filme) => {
        let filtroFilmes = filmesSalvos.filter((item) => { return (item.id !== filme.id)})
        setFilmesSalvos(filtroFilmes)
        localStorage.setItem('minhaLista', JSON.stringify(filtroFilmes))
        showMessageSuccess('Sucesso', 'Filme excluido com sucesso')

    }

    return (
        <>
            <Header />
            <div className='salvos--content'>
                <h1>Filmes Salvos</h1>

                {filmesSalvos.length === 0 && 
                    <span>Você não possui filmes salvos :(</span>
                }
                {filmesSalvos.map(filme => {
                    return (
                        <div className='salvos--RowMovie' key={filme.id}>
                            <div className='salvos--div-capa'>
                                <img src={filme.foto} className='salvos--capa'></img>
                            </div>
                            <div className='filme--info-filme'>
                                <h1>{filme.nome}</h1>
                                <p>{`${filme.sinopse.substr(0, 150)}...`}</p>
                            </div>
                            <div className='filmes--botoes'>
                                <button onClick={() => { navigate(`/filme/${filme.id}`) }}>Ver filme</button>
                                <button onClick={() => { excluirFilme(filme) }}>Excluir</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
