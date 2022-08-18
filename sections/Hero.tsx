import React from 'react'

// import { Container } from './styles';

const Hero: React.FC = () => {
    return (
        <section className="h-screen">
            <aside className="hidden">
                <h3>
                    <span>30</span>
                    <span>Meaningfull Score</span>
                </h3>
                <hr />
                <h3>
                    <span>30</span>
                    <span>Meaningfull Score</span>
                </h3>
            </aside>
            <main className="hidden">
                <h1>Lionsgate Movies</h1>
                <p>
                    Lionsgate’s feature film production and distribution
                    operation encompasses a diverse slate of tentpoles,
                    star-driven event films and branded properties
                </p>
                <hr />
                <div className="video-reference">
                    <div className="cover">
                        <span></span>
                    </div>
                    <div className="title">
                        <i />
                        <p>
                            <span></span>
                            <span></span>
                        </p>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hero
