/* eslint-disable @typescript-eslint/no-explicit-any */
// HOC api call er jonno
export async function apiCall(url: string, method = "GET", data?: any) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data && method !== "GET" ? JSON.stringify(data) : null,
  };

  const response = await fetch(`http://localhost:5000/${url}`, options);

  return response.json();
}
