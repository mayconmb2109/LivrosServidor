import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';
import { Livro } from '../classes/modelo/Livro';
import { ControleLivros } from '../classes/controle/ControleLivros';
import { LinhaLivro } from '../componentes/LinhaLivro';

const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState<boolean>(false);
    const controleLivros = new ControleLivros();

    useEffect(() => {
        controleLivros.obterLivros().then(livros => {
            setLivros(livros);
            setCarregado(true);
        }).catch(error => {
            console.error('Erro ao obter os livros:', error);
        });
    }, [carregado]);

    const excluir = async (codigoLivro: string) => {
        controleLivros.excluir((codigoLivro)).then(() => {
            setCarregado(false); // Força o redesenho da página
        }).catch(error => {
            console.error('Erro ao excluir o livro:', error);
        });
    };

    return (
        <div className="container">
            <Head>
                <title>Lista de Livros</title>
            </Head>
            <Menu />
            <main>
                <h1 className="mb-4">Lista de Livros</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Resumo</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro, index) => (
                            <LinhaLivro key={index} livro={livro} excluir={excluir} />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default LivroLista;
