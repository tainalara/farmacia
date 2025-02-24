import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import CardCategorias from "../cardcategorias/CardCategorias";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";


function ListaCategorias() {
    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    
    const [error, setError] = useState<string | null>(null);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {});
        } catch (error: any) {
            if (error.toString().includes('403')) {
                setError('Você não tem permissão para acessar esta página.');
            } else {
                setError('Ocorreu um erro desconhecido.');
            }
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
            {error && <div className="error-message">{error}</div>}
            {categorias.length === 0 && !error && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;
