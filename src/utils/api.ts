export async function Post<T, R>(url: string, data: T): Promise<R> {
  const res = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    console.log(res.status);
    console.log(res.statusText);

    const text = await res.text();
    console.log(text);

    throw new Error(text);
  }
  const result: R = await res.json();
  return result;
}
