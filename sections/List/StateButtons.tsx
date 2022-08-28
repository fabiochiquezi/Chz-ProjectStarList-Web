import React from 'react'

/*
<ul
className="order-2 flex justify-center flex-wrap sm:col-span-3 lg:order-1 lg:col-span-2
   lg:col-start-4 xl:col-start-4 xl:col-span-4 xl:mr-2 2xl:col-start-5
   2xl:col-span-3 2xl:justify-self-end 2xl:mr-6"
>
<li className="mr-4 mb-12 lg:mb-8">
    <Button01 text="Watching" path="/" />
</li>
<li className="mr-4 mb-12 lg:mb-8">
    <Button01 text="WatchList" path="/" />
</li>
<li className="mb-8 lg:mb-8">
    <Button01 text="Watched" path="/" />
</li>
</ul>
*/

const StateButtons: React.FC = () => {
    return (
        <div
            className="order-2 flex justify-center flex-wrap mb-4 hidden
                       sm:col-span-3
                       lg:col-start-4 lg:order-1 lg:col-span-2
                       xl:col-start-4 xl:col-span-4 xl:mr-2
                       2xl:col-start-5 2xl:col-span-3 2xl:justify-self-end 2xl:mr-6"
        >
            <p>aaaa</p>
        </div>
    )
}

export default StateButtons
