import styled from "styled-components";

export const Container = styled.header`
  background: #3d3e4c;
  display: flex;
  align-items: center;
  height: 65px;
  /* justify-content: space-between; */
  padding-inline: 24px;

  button {
    background: none;
    border: none;
  }

  @media (min-width: 1024px) {
    height: 100px;
  }
`;

export const Logo = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;

  .logo {
      &--before {
        display:none;
      }
    }

  h1.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;

  }

  @media (min-width: 768px) {
    border-right: 1px solid gray;
    width: 300px;

    .logo {
      &--before {
        display:block;
      }
    }
  }
`;

export const Title = styled.h2`
  justify-self: flex-start;
  padding-left: 24px;
  color: #fff;
  font-size: 1rem;
`;

export const Actions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;

  .btn {
    background: #6460c7;
    border-radius: 24px;
    padding: 8px 12px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    &__text {
      display: none;
    }
    }

  .btn__options {
    color: gray;
  }

  @media (min-width: 768px) {
    .btn {
    &__icon {
      display: none;
    }
    &__text {
      display: block;
    }
    }
  }
`;
