import React from 'react'
import Link from 'next/link'


const Index = () => {
    return (
        <div>
            <h1>Bem vindo</h1>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        </div>

    )
}

export default Index