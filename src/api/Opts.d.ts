import axios, { AxiosRequestConfig } from 'axios';

export type Opts = AxiosRequestConfig & { path: { [key: string]: string } };
