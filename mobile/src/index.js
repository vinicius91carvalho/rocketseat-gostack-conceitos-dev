import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import api from './services/api'

export default function App() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data)
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject() {
        const { data: project } = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Diego Fernandes'
        })

        setProjects([...projects, project])
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" onPress={handleAddProject} />

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project} key={project.id}>{project.title}</Text>
                    )}
                />
            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.button}
                onPress={handleAddProject}>
                <Text style={styles.buttonText}>Adicionar projeto</Text>
            </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#7159c1'
    },

    project: {
        color: '#FFF',
        fontSize: 30
    },

    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 16
    }
})

