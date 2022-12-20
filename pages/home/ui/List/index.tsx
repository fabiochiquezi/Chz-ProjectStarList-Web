import { IList } from '../../design'

const List: IList = ({ list, Title, Thumb }) => (
  <div className="pt-12 lg:pt-16 pb-16">
    <main
      data-testid="List"
      className="container mx-auto px-4 grid sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7 justify-items-center lg:justify-items-end 2xl:justify-items-center"
    >
      {Title}
      {list.map((props, index) => <Thumb key={index} {...props} />)}
    </main>
  </div>
)


export { List }
