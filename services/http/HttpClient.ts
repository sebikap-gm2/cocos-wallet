interface RequestOptions extends RequestInit {
  params?: Record<string, any>;
}

export class HttpClient {
  private _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  private buildQueryString(params?: Record<string, any>): string {
    if (!params) return '';
    return '?' + new URLSearchParams(params).toString();
  }

  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    const queryString = this.buildQueryString(params);
    const response = await fetch(this._baseUrl + url + queryString, {
      method: 'GET',
    });

    return this.handleResponse<T>(response);
  }

  async post<T>(url: string, body: any, options?: RequestOptions): Promise<T> {
    const response = await fetch(this._baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      body: JSON.stringify(body),
      ...options,
    });

    return this.handleResponse<T>(response);
  }

  async put<T>(url: string, body: any, options?: RequestOptions): Promise<T> {
    // TODO: Implement
    return new Promise((resolve, reject) => resolve({ error: 'put is not implemented' } as T));
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${error.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data as T;
  }
}

export const httpClient = new HttpClient(process.env.EXPO_PUBLIC_BASE_URL ?? '');
