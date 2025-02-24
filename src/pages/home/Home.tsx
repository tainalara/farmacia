
function Home() {
    return (
        <>
            <div className="bg-[#214f81] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra os melhores preços
                        </p>

                        <div className="flex justify-around gap-4 font-bold">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                PROMOÇÕES
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://imgur.com/btcP540.png"
                            alt="Logotipo Farma Tai"
                            className="max-w-xl h-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home