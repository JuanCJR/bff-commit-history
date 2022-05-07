import axios, { AxiosRequestConfig } from 'axios';

import { Octokit, App } from 'octokit';

export const apiGet = async (
  url: string,
  params?: { [key: string]: string | number },
): Promise<{} | any> => {
  try {
    const GIT_API_URL = process.env.GIT_API_URL;
    const axiosRequestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: `${GIT_API_URL}/${url}`,
      params: params,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    };
    const data = await axios(axiosRequestConfig);
    return data.data;
  } catch (e: any) {
    if (e.response) {
      return e.response;
    } else if (e.request) {
      // The request was made but no response was received
      console.log(e.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', e.message);
    }
  }
};

// export const apiGet = async (
//     url: string,
//     urlParam?: string | number,
//   ): Promise<{} | any> => {
//     try {
//       const GIT_API_URL = process.env.GIT_API_URL;
//       const axiosRequestConfig: AxiosRequestConfig = {
//         method: 'GET',
//         url: `${GIT_API_URL}/${url}/${urlParam ? urlParam : ''}`,
//         headers: {
//           Accept: 'application/vnd.github.v3+json',
//         },
//       };
//       const data = await axios(axiosRequestConfig);
//       return data.data;
//     } catch (e: any) {
//       if (e.response) {
//         console.log(e.response);
//       } else if (e.request) {
//         // The request was made but no response was received
//         console.log(e.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log('Error', e.message);
//       }
//     }
//   };
