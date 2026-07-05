import { Post } from "../utils/api";

type Req =  {
      id_message:number;
}

type Res = {
      message:string;
}

export async function DeleteMessage(req : Req) {
      try {
            const res = await Post<Req, Res>("http://localhost:8080/message/unsend", req);
            return res;
      } catch (err) {
            console.log("error fetching");
            throw err;
      }
}