import { IHero } from '../../design'
import { Section } from './styles'

const Hero: IHero = ({ title, description, BtnSignIn }) => (
  <Section
    data-testid="Hero"
    className="skeleton"
    backgroundDesktop="./banners/hero-desktop.jpg"
    backgroundMobile="./banners/hero-mobile.jpg"
  >
    <div className="overlayAll"></div>
    <div className="overlayBottom"></div>
    <div className="overlayTop"></div>
    <div className="lg:container lg:mx-auto lg:relative lg:h-full w-full">
      <div className="w-full absolute z-10 bottom-[90px] px-3 md:px-6 md:bottom-[48px] lg:bottom-[50%] lg:mb-[-300px] lg:w-[720px]">
        <main className="max-w-[360px] md:max-w-[480px] lg:max-w-[720px] mx-auto flex flex-col items-center text-center lg:text-left lg:items-start">
          <h1 className="text-5xl font-bold mb-4 leading-tight md:text-6xl lg:text-7xl lg:leading-[120%]">
            {title}
          </h1>
          <p
            className="mb-10 text-xl md:text-2xl lg:mb-8 lg:max-w-[500px] lg:leading-[150%]"
            id="hero-description"
          >
            {description}
          </p>
          {BtnSignIn}
        </main>
      </div>
    </div>
  </Section>
)

export { Hero }
