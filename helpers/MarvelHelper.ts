import MD5 from "crypto-js/md5";

const MarvelHelper = {
  getHash: (
    publicKey: string,
    privateKey: string,
    ts: string,
  ) => {

    const stringForCripto = `${ts}${privateKey}${publicKey}`

    return MD5(stringForCripto).toString()
  }
}

export default MarvelHelper