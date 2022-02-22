import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import api from '../../services/api'
import { Loading } from '../../components/loading'
import './filme.css'
import { showMessageError, showMessageSuccess } from "../../components/alerts";

export function Filme(props) {

    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        const getFilme = async () => {
            const result = await api.get(`/r-api/?api=filmes/${id}`)
            setFilme(result.data)
            setLoading(false)
        }

        getFilme()
    }, [id])

    const saveFilme = (filme) => {
        const filmes = localStorage.getItem('minhaLista')
        let minhaLista = JSON.parse(filmes) || []
        const hasFilme = minhaLista.some((filmeSalvo) => filmeSalvo.id === filme.id)
        if(hasFilme){
            showMessageError('Erro', 'Esse filme já pertence a sua lista!')
            return
        }
        minhaLista.push(filme)
        localStorage.setItem('minhaLista', JSON.stringify(minhaLista))
        showMessageSuccess('Sucesso', 'Filme adicionado a sua biblioteca!')
 
    }



    return (
        <>
            <Header />
            {
                loading ?
                    <Loading />
                    :
                    <div className="filme--geral">
                        <div className="filme--titulo">
                            <h1>{filme.nome}</h1>
                        </div>
                        <img className="filme--capa" src={filme.foto}></img>
                        <img></img>
                        <div className="filme--sinopse">
                            <h3>Sinopse</h3>
                            <p>{filme.sinopse}</p>
                        </div>
                        <div className="filme--botoes">
                            <a onClick={()=> saveFilme(filme)}>Salvar</a>
                            <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a>
                        </div>
                    </div>

            }

        </>
    )
}