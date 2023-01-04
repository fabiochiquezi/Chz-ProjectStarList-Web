import styled from 'styled-components'

export const Div = styled.div`
  .display-none{
    display: none;
  }
  .display-block{
    display: block;
  }

  /* Animation - 01 */
  .fade-in {
    opacity: 1;
    animation: FadeIn .25s ease-in-out;

    @keyframes FadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1 !important;
      }
    }
  }

  .fade-out {
    transition: all .25s ease;
    opacity: 0;
    animation: FadeOut .25s ease-in-out;

    @keyframes FadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0 !important;

      }
    }
  }

    /* Animation - 02 */
  .to-left-in {
    position: relative;
    opacity: 1;
    // transition: all 1s ease;
    animation: FadeIn .25s ease-in-out;

    @keyframes FadeIn {
      from {
        left: -30px;
        opacity: 0;
      }
      to {
        left: 0px;
        opacity: 1 !important;
      }
    }
  }

  .to-left-out {
    position: relative;
    transition: all .25s ease;
    opacity: 0;
    animation: FadeOut .25s ease-in-out;

    @keyframes FadeOut {
      0% {
        left: 0px;
        opacity: 1;
      }
      100% {
        left: -30px;
        opacity: 0 !important;

      }
    }
  }
`
