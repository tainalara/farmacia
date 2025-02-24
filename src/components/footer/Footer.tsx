import { FacebookLogo, InstagramLogo} from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#012d62] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            FARMA TAI | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                    <a href="https://www.instagram.com/farmatai" target="_blank">
                     <InstagramLogo size={48} weight="bold" />
                    </a>
                    <a href="https://www.facebook.com/farmatai" target="_blank">
                     <FacebookLogo size={48} weight="bold" />
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer