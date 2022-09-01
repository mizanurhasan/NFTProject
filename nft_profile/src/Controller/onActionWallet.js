import axios from "axios";

const onActionWallet = () => {
  /**
   * onConnectWallet fuction connect wallet and set page
   * @param { address, setLoading, setTokens} param1 goes to page
   * address is wallet address
   * setLoading is for loading time calculation
   * setToken is for token which are get from backend end point
   */
  const addWalletData = async ({ address, setLoading, setTokens }) => {
    setLoading(true);
    try {
      const res = await axios.post("/wallet", {
        address,
      });
      console.log(res.data);
      if (res.data.tokens.length > 0) {
        setTokens(res.tokens.collectionToken);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  /**
   * onConnectWallet fuction connect wallet and set page
   * @param {setStep,setAddress} param1 goes to page
   * setAddress is wallet address
   */
  const onConnectWallet = async ({ setStep, setAddress }) => {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
          param: [],
        });
        console.log(account[0]);
        setAddress(account[0]);
        setStep("Step2");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      alert("MetaMask not dectected");
    }
  };
  //
  return { addWalletData: addWalletData, onConnectWallet: onConnectWallet };
};

export default onActionWallet;
