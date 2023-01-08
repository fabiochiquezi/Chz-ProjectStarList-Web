import styled from 'styled-components'

interface IProps {
  backgroundDesktop: string
  backgroundMobile: string
  bgFrom: string
  bgTo: string
}

export const Section = styled.section<IProps>`
    background-color: red;
    height: 100vh;
    background: url('${props => props.backgroundMobile}') no-repeat center center;
    background-size: cover;
    position: relative;
    max-height: 900px;

  @media (min-width: 1024px) {
    background: url("${props => props.backgroundDesktop}") no-repeat center center;
    background-size: cover;
  }

  .overlayAll {
    background-image: linear-gradient(
      to bottom,
      ${props => props.bgFrom},
      ${props => props.bgTo}
    );
    width: 100%;
    height: 70%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  @media (min-width: 1024px) {
    .overlayAll {
      background-image: linear-gradient(
        to left,
        ${props => props.bgFrom},
        ${props => props.bgTo}
      );
      width: 50%;
      height: 100%;
    }
  }

  .overlayBottom {
    background-image: linear-gradient(
      to bottom,
      ${props => props.bgFrom},
      ${props => props.bgTo}
    );
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .overlayTop {
    background-image: linear-gradient(
      to top,
      ${props => props.bgFrom},
      ${props => props.bgTo}
    );
    width: 100%;
    height: 20%;
    position: absolute;
    left: 0;
    top: 0;
  }
`
