import { AxiosResponse } from "axios";
import { Joke } from "../types";

export function randomSucess(response: AxiosResponse): Joke {
  return response.data;
}
