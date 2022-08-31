/**
 * Helper
 */

// balanceOf function that all ERC721 Smart Contracts has
const COMMON_ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
  /**
   * Checks if a user is a holder of a specific Collection/Token
   * @param {Web3 Object} w3 Web3 Object to be used
   * @param {String} contractAddress Contract address of the collection
   * @param {String} userAddress Users' public address
   * @returns Boolean
   */
  async function isTokenHolder(w3, contractAddress, userAddress) {
    const handler = new w3.eth.Contract(COMMON_ABI, contractAddress);
    try {
      let tokenQuantity = await handler.methods.balanceOf(userAddress).call()
      return tokenQuantity > 0;
    } catch (e) {
      throw new Error(e?.message);
    }
  }
  
  module.exports = isTokenHolder;