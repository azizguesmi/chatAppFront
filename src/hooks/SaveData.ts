
import { Post } from "../utils/api";


type Req = {
      content:string;
      receiver_id:number;
      receiver_type:string;
}

type Res = {
      message:string;
}


export async function AddMessageToUser(req: Req) {
      try{
            const res = Post<Req,Res>("http://localhost:8080/message/send",  req);
            return res;
      }catch(err){
            console.log("error fetching");
            throw err;
      }
}