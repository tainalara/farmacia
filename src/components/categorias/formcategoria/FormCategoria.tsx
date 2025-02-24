import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error) {
            console.error("Erro ao buscar categoria:", error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert('A categoria foi atualizada com sucesso!');
            } else {
                await cadastrar(`/categorias`, categoria, setCategoria);
                alert('A categoria foi cadastrada com sucesso!');
            }
            retornar();
        } catch (error) {
            console.error("Erro ao salvar categoria:", error);
            alert('Erro ao salvar a categoria.');
        }

        setIsLoading(false);
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Digite o nome da categoria"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    className="rounded text-slate-100 bg-[#2b68aa]
                               hover:bg-[#012d62] w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
