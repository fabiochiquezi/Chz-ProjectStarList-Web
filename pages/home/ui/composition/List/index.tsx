import React, { FC, ReactElement } from 'react'

interface IWork {
  title: string;
  thumb: string;
}

interface IListProps {
  Title: ReactElement
  Thumb: (props: IWork) => ReactElement
  list: IWork[]
}

const List: FC<IListProps> = ({ list, Title, Thumb }) => (
  <main
    data-cy="section-list"
    data-testid="List"
    className="container mx-auto px-4 grid sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7 justify-items-center lg:justify-items-end 2xl:justify-items-center"
  >
    {Title}
    {list.map((props, index) => <Thumb key={index} {...props} />)}
  </main>
)


export { List }
