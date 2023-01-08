import { fireEvent, render, screen } from '@testing-library/react'
import { routesToArray } from '../../../../helpers/front/path'
import { routes } from '../../../../../appCore/ui/routes'
import { IRoute, NavMenu } from '.'

const routesLength: any = (routes: Record<any, any>) => routesToArray<IRoute[]>(routes)
  .filter((route: any) => route.menuSystem).length

describe('SettingMenu', () => {
  const props: any = {
    routes: routes,
    currentRoute: routes.user.route,
    userName: 'userName',
    onChangePage: jest.fn()
  }

  test('elements', async () => {
    render(<NavMenu {...props} />)
    const el = screen.getByTestId('NavMenu')
    const list = el.querySelectorAll('li')

    expect(list).toHaveLength(routesLength(routes))
    expect(el).toBeInTheDocument()
  })

  test('links', async () => {
    render(<NavMenu {...props} />)
    const el = screen.getByTestId('NavMenu')
    const list = el.querySelectorAll('li a')
    list.forEach(item => {
      fireEvent.click(item)
    })
    expect(props.onChangePage).toBeCalledTimes(routesLength(routes))
  })

  test('activeLink', async () => {
    render(<NavMenu {...props} />)
    const item = screen.getByText(routes.user.title)
    expect(item).toHaveClass('text-orange-400')
  })
})
