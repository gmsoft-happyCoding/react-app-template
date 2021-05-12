/* @flow */
/*
 * 解决IE Input 在iframe中无法获取焦点的问题
 * @Author: GM20171202
 * @Date: 2018-08-04 16:11:20
 * @Last Modified by: GM20171202
 * @Last Modified time: 2018-08-04 17:22:24
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import UAParser from 'ua-parser-js';
import { Input } from 'antd';

const HideInput = styled.div`
  display: inline-block;
  width: 0;
  position: fixed;
  left: 50%;
  top: 50%;
  opacity: 0;
  z-index: -1;
`;

interface Params {
  input?: React.RefObject<any>;
}

class FixInputFocus extends Component implements Params {
  input: React.RefObject<any>;

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    if (this.input && this.input.current) {
      this.input.current.focus();
      this.input.current.blur();
    }
  }

  render() {
    const parser = new UAParser();

    const result = parser.getResult();

    const isIEEleven = result.browser.name === 'IE';

    return isIEEleven ? (
      <HideInput>
        <Input ref={this.input} />
      </HideInput>
    ) : null;
  }
}

export default FixInputFocus;
