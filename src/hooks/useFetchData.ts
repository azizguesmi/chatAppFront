import { Post } from "../utils/api";

type Res = {
  token: string;
};

type Req = {
  email: string;
  password: string;
};

export async function getUser(req: Req): Promise<Res> {
  try {
    const res = await Post<Req, Res>("http://localhost:8080/auth/login", req);
    return res;
  } catch (err) {
    console.log("error fetching");
    throw err;
  }
}
