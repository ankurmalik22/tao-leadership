import axios, { AxiosInstance, AxiosResponse } from "axios";

export class ApiService {
  axiosInstance: AxiosInstance;
  pokemonIndex = 1;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {}
    });
  }

  get<T = any>(endpoint: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get(endpoint);
  }

  post<T = any>(endpoint: string, data: T): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post(endpoint, data);
  }

  put<T = any>(endpoint: string, data: T): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put(endpoint, data);
  }

  delete<T = any>(endpoint: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete(endpoint);
  }
}

export default ApiService;
