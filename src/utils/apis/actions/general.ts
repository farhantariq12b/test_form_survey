import { AxiosResponse, CancelToken } from "axios";
import { api } from "..";

export const GeneralAPIsActions = {
  getData: <T>(endpoint: string, cancelToken?: CancelToken) =>
    api.get<AxiosResponse<T>>(endpoint, { cancelToken }),
  postData: (endpoint: string, data: { [key: string | number]: any }) =>
    api.post(endpoint, data),
  updateData: (endpoint: string, data: { [key: string | number]: any }) =>
    api.put(endpoint, data),
  updatePartialData: (
    endpoint: string,
    data: { [key: string | number]: any }
  ) => api.patch(endpoint, data),
  deleteData: (endpoint: string) => api.delete(endpoint),
};
