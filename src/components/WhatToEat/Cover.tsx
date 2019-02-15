import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  url?: string;
  name?: string;
}

const box = css`
  border-radius: 5px;
  width: 100%;
  height: 50vh;
`;

const Asking = styled.div`
  ${box};
  background: linear-gradient(hotpink, #00008b8a);
  color: white;
  font-size: 10vh;
  text-align: center;
  padding: 30px;
  text-shadow: rgb(175, 212, 212) 0px 1px 0px, rgb(159, 203, 203) 0px 2px 0px,
    rgb(139, 193, 193) 0px 3px 0px, rgb(122, 184, 184) 0px 4px 0px, rgba(0, 0, 0, 0.2) 0px 5px 1px,
    rgba(0, 0, 0, 0.3) 0px 0px 10px, rgba(0, 0, 0, 0.4) 0px 3px 5px, rgba(0, 0, 0, 0.5) 0px 6px 5px,
    rgba(0, 0, 0, 0.6) 0px 10px 10px;
`;

interface ImageProps extends Props {
  className?: string;
}

const Image = ({ url, name, className }: ImageProps) => (
  <div className={className}>
    <div className="img" />
    <p className="name">{name}</p>
  </div>
);

const ImageBox = styled(Image)`
  .img {
    ${box};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.url});
  }
  .name {
    margin: 10px 0;
    text-align: center;
    font-size: 5vh;
  }
`;

export default ({ url, name }: Props) =>
  url ? (
    <>
      <ImageBox url={url} name={name} />
    </>
  ) : (
    <Asking>
      今天吃什么
      <br />?
    </Asking>
  );
