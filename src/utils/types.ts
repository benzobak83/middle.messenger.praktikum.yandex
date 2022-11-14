type TPropsSettings = Record<string, number | boolean | string>;

// eslint-disable-next-line
type Indexed<T = any> = {
  [key in string]: T;
};

type TResponse = {
  [key: string]: string;
};

export { TPropsSettings, Indexed, TResponse };
