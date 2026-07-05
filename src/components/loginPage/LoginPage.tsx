import { use, useState } from "react";
import { getUser } from "../../hooks/useFetchData";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [formData, setFormDate] = useState<FormData>({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");
  const [err, setErr] = useState<string>("");
  

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await getUser(formData);
      console.log(res);
      setMessage("Login with succes");
      setErr("");
    } catch (err) {
      
      if (err instanceof Error) {
        setErr(err.message);
        console.log(err.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col gap-10 bg-[#171717] p-10 text-white text-lg rounded-3xl w-96 shadow-lg mx-auto mt-4">
      <label className="text-3xl font-bold">Login</label>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={onChange}
          className="rounded-lg text-lg p-1 bg-[#171717] border border-[#474646] focus:outline-none focus:border-[#737373] text-white"
        />
        <label>Password :</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={onChange}
          className="rounded-lg text-wg p-1 bg-[#171717] border border-[#474646] focus:outline-none focus:border-[#737373] text-white"
        />
        <input
          type="submit"
          value={"Sign in"}
          className="bg-[#230f7d] rounded-lg p-4 shadow-lg hover:bg-[#130942] cursor-pointer"
        />

        <p>{message}</p>
        <p className="text-red-500">{err}</p>
      </form>
    </div>
  );
}
