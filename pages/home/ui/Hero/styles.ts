import styled from 'styled-components'

interface IProps {
  backgroundDesktop: string
  backgroundMobile: string
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
      rgba(0, 0, 0, 0),
      rgba(23, 23, 23, 1)
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
        rgba(0, 0, 0, 0),
        rgba(23, 23, 23, 1)
      );
      width: 50%;
      height: 100%;
    }
  }

  .overlayBottom {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(23, 23, 23, 1)
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
      rgba(0, 0, 0, 0),
      rgba(23, 23, 23, 1)
    );
    width: 100%;
    height: 20%;
    position: absolute;
    left: 0;
    top: 0;
  }
`
