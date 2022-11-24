// @ts-check

import axios from "axios";

// headers
import { getAuth } from "../auth/auth";

// config
import config from "../config";

/**
 * Takes a user object as an argument, and returns a promise that resolves to the data returned from
 * the API
 * @param {object} user - This is the user object that we are sending to the server.
 * @returns The data from the response.
 */
export const register = async (user, password) => {
  const response = await axios.post(
    // @ts-ignore
    `${config.apiUrl}user/register`,
    {},
    {
      headers: getAuth,
    }
  );
  const data = await response.data;
  return data;
};
