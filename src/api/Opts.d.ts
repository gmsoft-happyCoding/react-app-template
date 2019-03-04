import { AxiosRequestConfig } from "axios";

// 如果有额外的配置项, 请在此声明类型
type Extend = {};

interface PathParam {
  path: { [key: string]: string };
}

export type Opts = AxiosRequestConfig & Extend;

export type WithPathOpts = Opts & PathParam;
