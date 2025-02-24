import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			bg-[#012d62]  text-white'>
            
                <div className="container flex justify-between text-lg font-bold">
                <Link to='/home' className="text-2xl font-bold">FARMA TAI</Link>

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Navbar