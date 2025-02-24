import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"

function DeletarCategoria() {

    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error) {
            console.error("Erro ao buscar a categoria:", error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria apagada com sucesso')
            retornar()
        } catch (error) {
            console.error("Erro ao deletar a categoria:", error)
            alert('Erro ao deletar a categoria.')
        }

        setIsLoading(false)
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-[#2b68aa] text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-[#2b68aa]
                                   hover:bg-[#0ba2c3] flex items-center justify-center'
                        onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria
