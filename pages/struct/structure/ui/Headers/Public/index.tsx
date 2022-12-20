import Link from 'next/link'
import { BtnGitHub } from './BtnGitHub'
import { paths } from '../../../../../routes'
import { IHeaderPublic } from '../../../design'
import { Logo } from '../../../../../_share/assets'

const HeaderPublic: IHeaderPublic = ({ BtnSignIn }) => (
  <header className="absolute w-full" data-testid="HeaderPublic">
    <div className="flex justify-between items-center container mx-auto px-4 py-6 bg-transparent">
      <Link href={paths.login}>
        <a className="logo z-10 hover:opacity-80">
          <Logo />
        </a>
      </Link>

      <div className="z-10 flex items-center">
        <BtnGitHub
          href="https://github.com/fabiochiquezi/Chz-ProjectStarList-Web"
          className="md:mr-3"
        />
        {BtnSignIn}
      </div>
    </div>
  </header>
)


export { HeaderPublic }
