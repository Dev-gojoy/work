import { useEffect, useState } from "react";
import Web3 from "web3";
import Intro from "../components/Intro";
import Nfts from "../components/Nfts";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const Main = ({ account }) => {
  const [totalNft, setTotalNFT] = useState(0);
  const [mintedNft, setMintedNFT] = useState(0);
  const [myNft, setMyNFT] = useState(0);
  const [page, setPage] = useState(1);

  const getTotalNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalNft().call();

      setTotalNFT(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setMintedNFT(response);
      setPage(parseInt((parseInt(response) - 1) / 10) + 1);
      // 10 - 1 = 9 / 10 = 0 + 1 = 1page
      // 31 - 1 = 30 / 10 = 3 + 1 = 4page
      // 975 - 1 = 974 / 10 = 97 + 1 = 98page
    } catch (error) {
      console.error(error);
    }
  };
  const getMyNft = async () => {
    try {
      if (!contract || !account) return;

      const response = await contract.methods.balanceOf(account).call();

      setMyNFT(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);

  useEffect(() => {
    getMyNft();
  }, [account]);

  return (
    <>
      <Intro totalNft={totalNft} mintedNft={mintedNft} myNft={myNft} />
      <Nfts page={page} mintedNft={mintedNft} />
    </>
  );
};

export default Main;
