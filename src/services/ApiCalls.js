import axios from "axios";
import { baseUrl } from "./ApiConfig";

export const RegisterApi = (Payload) => {
  console.log("RegisterPayload", Payload);

  let data = JSON.stringify(Payload);

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `${baseUrl}/auth/register`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      if (error.message) {
        throw new Error(error.message);
      }
    });
};
