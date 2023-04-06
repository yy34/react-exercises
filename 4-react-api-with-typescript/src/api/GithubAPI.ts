import axios, { AxiosResponse } from "axios";
import { IUser } from "../types/IUser";
import { IRepo } from "../types/IRepo";

const instance = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 1000,
});

const responseBody = (response: AxiosResponse) => response.data;
const request = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const UserService = {
  getUser: (userName: string): Promise<IUser> =>
    request.get(`users/${userName}`),
  getRepos: (userName: string): Promise<IRepo[]> =>
    request.get(`/users/${userName}/repos`),
};
