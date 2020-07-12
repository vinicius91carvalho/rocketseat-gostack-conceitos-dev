import React, { useState, useEffect } from 'react'
import api from './services/api'

import './App.css'
import backgroundImage from './assets/wallpaper-bootcamp.png'

import Header from './components/Header'

function App() {

    /* 
    useState retorna um array com 2 posições
    1. Variável com o seu valor inicial
    2. Função para atualizarmos esse valor
    */
    const [projects, setProjects] = useState([])

    /* 
    Executa sempre a função passada, se as variáveis passadas no segundo parâmetro forem alteradas.
    Caso não seja passada nenhuma, executa na inicialização do componente.
    */
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`])
        
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Vinicius Carvalho"
        })

        const project = response.data
        console.log(project)
        setProjects([...projects, project])
    }

    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>

            <img width="300" src={backgroundImage} />

            <ul>
                { projects.map((project, index) => <li key={index}>{`${index} ${project.title}` }</li>) }
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App