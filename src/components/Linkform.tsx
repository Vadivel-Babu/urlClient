import { useContext, useEffect, useState } from "react";
import Linkcard from "./Linkcard";
import axios from "axios";
import { toast } from "react-toastify";
//@ts-ignore
import isUrl from "is-valid-http-url";
//@ts-ignore
import { AuthContext } from "../context/AuthContext";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Linkform: React.FC = () => {
  const [link, setLink] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  //@ts-ignore
  const { user } = useContext(AuthContext);

  const [urls, setUrls] = useState<string[]>([]);

  async function getLinks() {
    try {
      const { data } = await axios.get("link/getlinks", {
        headers: { Authorization: "Bearer " + user?.token },
      });
      if (data.message === "success") {
        setUrls(data.data || []);
      } else {
        setUrls([]);
      }
    } catch (error) {
      //@ts-ignore
      toast.error(error.response.data.message);
      setUrls([]);
    }
  }

  useEffect(() => {
    getLinks();
  }, [user]);

  async function handleDelete(id: string) {
    const { data } = await axios.delete(`link/deletlink/${id}`);
    if (data.message === "success") {
      toast.warning("Link deleted");
      getLinks();
    }
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    try {
      e.preventDefault();
      if (!user?.token) {
        toast.warning("login or register to short the link");
        navigate("/signup");
        return;
      }

      if (!isUrl(link)) {
        toast.error("Enter valid Url");
        return;
      }
      const newLink = {
        url: link,
      };
      setLoading(true);
      const { data } = await axios.post("link/postlink", newLink, {
        headers: { Authorization: "Bearer " + user?.token },
      });

      if (data.message === "success") {
        toast.success("Link shortend");
        setLoading(false);
        getLinks();
        setLink("");
      } else {
        toast.error("Error");
        setLoading(false);
        setLink("");
      }
    } catch (error: any) {
      toast.error(error.response.message);
      setLoading(false);
    }
  }
  return (
    <>
      <div className="px-7 py-10 mt-10 bg-[url('/path1.png')] bg-cover bg-no-repeat rounded-lg">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col md:flex-row md:items-center md:justify-center gap-2"
        >
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="px-2 py-3  md:w-[500px] focus:outline-none rounded-md"
          />
          {isLoading ? (
            <Button
              isLoading
              className="px-2 py-3 bg-cyen rounded-md text-customWhite font-semibold hover:bg-[#9AE3E3]"
            >
              Loading
            </Button>
          ) : (
            <button className="px-2 py-3 bg-cyen rounded-md text-customWhite font-semibold hover:bg-[#9AE3E3]">
              Shorten It!
            </button>
          )}
        </form>
      </div>
      {urls.map((url) => (
        //@ts-ignore
        <Linkcard key={url._id} url={url} remove={handleDelete} />
      ))}
    </>
  );
};

export default Linkform;
