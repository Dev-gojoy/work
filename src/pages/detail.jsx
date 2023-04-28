import { AiFillApple } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [metadata, setMetadata] = useState();

  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  useEffect(() => console.log(metadata), [metadata]);

  return (
    <div className="flex flex-col xl:flex-row justify-center py-16 bg-gray-900">
      {metadata ? (
        <>
          <div className="max-w-[512px]">
            <img className="rounded-t-2xl" src={metadata.image} alt="NFT" />
            <ul className="grid grid-cols-4 gap-8 py-8 bg-gray-600 rounded-b-2xl text-center">
              {metadata.attributes.map((v, i) => {
                return (
                  <li key={i} className="mx-4">
                    <div>{v.trait_type}</div>
                    <div className="mt-1 border-t-2 font-bold">{v.value}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-8">
            <div className="text-4xl flex items-center">
              <div>{metadata.name}</div>
              <div className="w-8 h-8 rounded-full flex justify-center items-center ml-2 text-white">
                <AiFillApple size={36} />
                <img className="rounded-xl" src="images/Bears.png" alt="" />
              </div>
            </div>
            <div className="mt-8 text-2xl">{metadata.description}</div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Detail;
