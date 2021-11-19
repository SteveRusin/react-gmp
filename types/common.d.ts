declare module '*.png';
declare module '*.jpg';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

interface Window {
  ROOT_STATE: any;
}
