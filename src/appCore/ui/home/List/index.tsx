import { FC, ReactElement } from 'react'

interface IWorkData {
  title: string,
  thumb: string
}

export type IList = FC<{
  Title: ReactElement,
  Thumb: (props: IWorkData) => ReactElement
  list: IWorkData[]
}>

const List: IList = ({ list, Title, Thumb }) => (
  <div className="pt-0 md:pt-12 lg:pt-16 pb-16">
    <main
      data-testid="List"
      className="container mx-auto"
    >
      <div className='max-w-[380px] mx-auto gap-x-8 sm:gap-x-0 sm:max-w-full md:max-w-[680px] lg:max-w-[1080px] xl:max-w-full px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 justify-items-center lg:justify-items-end 2xl:justify-items-center'>
        {Title}
        {list.map((props, index) => <Thumb key={index} {...props} />)}
      </div>
    </main>
  </div>
)


export { List }
