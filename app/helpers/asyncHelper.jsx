export const apiUrl = process.env.API_URL;

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

export const errorHandler = (error) => {
  if (error.response.status == 401) {
    window.location.href = "/";
  }
  console.log('request failed', error);
};

export const tokenHeader = () => (
  { "AUTHORIZATION": `Bearer ${sessionStorage.token}` }
);
