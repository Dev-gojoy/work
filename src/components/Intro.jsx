import { AiFillApple } from "react-icons/ai";
import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

console.log(ranNum);

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    <div className="bg-gradient-to-b from-transparent to-blue-900 mt-10 relative">
      <div className="w-full h-full absolute text-white text-8xl truncate opacity-30">
        <img
          className="absolute -top-15 w-auto opacity-30 h-auto"
          src="images/Win_now.png"
          alt=""
        />
        {/* Doosan bears */}
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="relative w-40 h-40">
          <img
            className="absolute w-40 h-40 rounded-full z-10"
            src="images/Team.png"
            alt="NFT"
          />
          <div className="absolute top-0 w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Doosan Bears
          <div className="bg-white w-6 h-6 rounded-full flex justify-center items-center ml-2 text-black">
            {/* <AiFillApple size={16} /> */}
            <img className="rounded-xl" src="images/Bears.png" alt="" />
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-blue-400 ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-gray-300">
          한결같은 마음으로 사랑과 관심을 보내주시는 최강 10번 타자 팬 여러분께
          감사드립니다. 두산베어스는 항상 팬들의 사랑과 신뢰를 최고의 가치로
          여기겠습니다. 그라운드에서 끝까지 포기하지 않는 근성과 뚝심을 앞세워
          한국시리즈 정상을 위해 전력 질주 하겠습니다.
        </div>
        <div className="py-4 text-center flex">
          <div>
            <div className="font-bold">{totalNft}</div>
            <div className="text-gray-300">총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNft}</div>
            <div className="text-gray-300">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNft}</div>
            <div className="text-gray-300">내 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
