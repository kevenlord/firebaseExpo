import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../services/fireBaseConnection';

export function Home() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, senha)
            .then(value => {
                console.log('Cadastrado com sucesso! \n' + value.user.uid);
            }).catch(error => console.log(error));
    }

    async function login() {
        await signInWithEmailAndPassword(auth, email, senha)
            .then(value => {
                console.log('Logado!');
            }).catch(error => console.log(error));
    }

    async function logout() {
        await signOut(auth).then(() => {
            console.log('Deslogado!')
        }).catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text>Firebase App</Text>
            <TextInput
                placeholder='Email'
                placeholderTextColor="#313131"
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.input}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='Senha'
                placeholderTextColor="#313131"
                value={senha}
                onChangeText={value => setSenha(value)}
                style={[styles.input, { marginBottom: 10 }]}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => createUser()}
            >
                <Text style={styles.buttonTitle}>Create account</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => login()}
            >
                <Text style={styles.buttonTitle}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => logout()}
            >
                <Text style={styles.buttonTitle}>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#313131',
        marginTop: 5,
        width: '80%',
        height: 50,
    },
    button: {
        backgroundColor: 'black',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        width: '50%',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})