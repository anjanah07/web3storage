import { File } from "web3.storage";
import { Web3Storage } from "web3.storage";
import * as dotenv from "dotenv";
dotenv.config();

function getAccessToken() {
  return process.env.WEB3STORAGE_TOKEN;
}
function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

function makeFileObjects() {
  const obj = { hello: "anjana" };
  const buffer = Buffer.from(JSON.stringify(obj));

  const files = [
    new File(["contents-of-file-1"], "plain-utf8.txt"),
    new File([buffer], "hello.json"),
  ];
  storeFiles(files);
}
async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}
makeFileObjects();
