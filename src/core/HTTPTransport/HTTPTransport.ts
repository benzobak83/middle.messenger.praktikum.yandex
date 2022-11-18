enum METHODS {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
}

type TData = Record<string, string | number | number[]> | FormData;

type TOptions = {
  method: METHODS;
  data?: TData;
  headers?: Record<string, string>;
  timeout?: number;
};

type TOptionsWithoutMethod = Omit<TOptions, "method">;

type HTTPMethod = (
  url: string,
  options?: TOptionsWithoutMethod
) => Promise<unknown>;

class HTTPTransport {
  protected globalPath: string;

  constructor(globalPath: string) {
    this.globalPath = globalPath;
  }
  get: HTTPMethod = (url, options = {}) => {
    let getParams = "";
    if (options.data) {
      getParams = this.queryStringify(options.data as Record<string, unknown>);
    }

    return this.request(
      url + getParams,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };
  put: HTTPMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };
  post: HTTPMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };
  delete: HTTPMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  private queryStringify<T>(data: Record<string, T>): string {
    return Object.keys(data)
      .map((key, index) =>
        index == 0 ? `?${key}=${data[key]}` : `&${key}=${data[key]}`
      )
      .join("");
  }

  request = (url: string, options: TOptions, timeout = 5000) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isFormData = data instanceof FormData;
      xhr.withCredentials = true;

      xhr.open(options.method, this.globalPath + url);
      xhr.onload = () => {
        if (xhr.status < 300) {
          resolve(xhr);
        } else {
          reject(xhr);
        }
      };
      xhr.timeout = timeout;

      if (headers) {
        Object.keys(headers).forEach((key: string) =>
          xhr.setRequestHeader(key, headers[key])
        );
      }

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (isFormData) {
        xhr.setRequestHeader("accept", "application/json");
      } else {
        xhr.setRequestHeader("content-type", "application/json");
      }

      method === "GET"
        ? xhr.send()
        : isFormData
        ? xhr.send(data)
        : xhr.send(JSON.stringify(data));
    });
  };
}

export { HTTPTransport, TOptions };
