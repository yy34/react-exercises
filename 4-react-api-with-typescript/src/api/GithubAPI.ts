import axios from "axios";
import { IUser } from "../types/IUser";

const baseURL = "https://api.github.com/users/";
const getUser = async (userName: string) => {
  try {
    const { data } = await axios.get<IUser>(`${baseURL}${userName}`, {
      headers: {
        Accept: "application/json",
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

export { getUser };
