import React from 'react'
import Footer from 'sections/Footer'
import Header from 'sections/Header/Header'

const ErrorSection: React.FC = () => (
    <div>
        <Header />
        <div className="relative h-[600px] w-full">
            <p className="text-red-600 text-2xl pt-[200px] max-w-[300px] mx-auto text-center">
                <span className="text-5xl mb-6 font-bold inline-block">
                    ERROR ;(
                </span>
                <br />
                Sorry, but something went wrong
            </p>
        </div>
        <Footer />
    </div>
)

export default ErrorSection
