import styled from 'styled-components'

export const ClickableStyle = styled.div`
  button,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0e2c54 !important;
    background: #0e2c54 !important;
    padding: 12px;
    border: 0;
    color: #fff;
    font-size: 14px;
    outline: none;
    box-shadow: 0 0 4px 0 #637fff;
    user-select: none;
    text-decoration: none;
    transform: skewX(42deg);
    border-radius: 42px 0 42px 0;
    transition: all 0.2s;

    & > * {
      margin-left: 16px;
      margin-right: 16px;
    }

    & svg {
      margin-right: ${(props: ClickableStyleProps) =>
        !props.iconOnly ? '8px' : `0`};
      margin-left: ${(props: ClickableStyleProps) =>
        !props.iconOnly ? '8px' : `0`};
    }

    &:hover {
      text-decoration: none;
      background-color: #637fff;
      color: #fff;
      box-shadow: 0 0 4px 0 #0e2c54;
      border-radius: 0 42px 0 42px;
      transform: skewX(-42deg);
    }

    &:hover > span {
      font-weight: bold !important;
      transform: skewX(42deg);
    }

    & span,
    & svg {
      transition: all 0.2s;
      font-weight: bold;
      transform: skewX(-42deg);
    }

    &:hover span,
    &:hover svg {
      font-weight: 500;
      /* color: #001b2e; */
    }

    & svg,
    & p {
      height: 20px;
      width: 20px;
    }

    & p {
      display: flex;
      align-items: center;
      font-size: 18px;
      margin-bottom: 0;
    }
  }
`

export const ClickableSpiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Neutral = styled.div`
  button,
  a {
    display: contents;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none !important;
    justify-content: stretch;
    user-select: none;
  }
`
