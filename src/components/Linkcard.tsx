import { Button } from "@nextui-org/react";
import { FaRegCopy, FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";

type Props = {
  _id: string;
  url: string;
  shorturl: string;
};

const Linkcard = ({
  url,
  remove,
}: {
  url: Props;
  remove: (_id: string) => void;
}) => {
  //copy the short url
  function handleCopy(shorturl: string) {
    navigator.clipboard.writeText(shorturl);
    toast.success("shortend link copied");
  }

  return (
    <div className="bg-white flex flex-col flex-wrap md:flex-row mt-5 gap-3 justify-between py-2 px-3 shadow-2xl rounded-sm">
      <div>
        <p className="font-bold text-wrap">
          Url:
          <a
            href={url.url}
            target="blank"
            className="ml-2 font-bold text-grey text-wrap"
          >
            {url.url.length > 50 ? url.url.slice(0, 50) + "..." : url.url}
          </a>
        </p>
        <p className="font-bold pr-1">
          Shorten Url:
          <a
            href={url.shorturl}
            target="blank"
            className="ml-2 text-cyen font-bold text-wrap max-w-9"
          >
            {url.shorturl.slice(0, 20)}
          </a>
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          className="bg-cyen text-customWhite"
          onClick={() => {
            handleCopy(url.shorturl);
          }}
          isIconOnly
          disableRipple
        >
          <FaRegCopy />
        </Button>
        <Button
          className="text-customWhite bg-red-500"
          isIconOnly
          disableRipple
          onClick={() => remove(url._id)}
        >
          <FaTrash />
        </Button>
      </div>
    </div>
  );
};

export default Linkcard;
