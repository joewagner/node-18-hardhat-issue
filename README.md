Everything works great for node v16, but fails with v18. To reproduce the issue have node v18 installed and do the following using two terminal windows.

In the first window do:
```
npm install
npx hardhat node
```

Once the hardhat node is running, in the second window do:
```
node main.mjs
```

when main.mjs is run you should see and error that says:

```
<path-repo-was-cloned-in>/node-18-hardhat-issue/node_modules/@ethersproject/logger/lib/index.js:238
        var error = new Error(message);
                    ^

Error: missing response (requestBody="{\"method\":\"eth_chainId\",\"id\":42,\"jsonrpc\":\"2.0\"}", requestMethod="POST", serverError={"errno":-61,"code":"ECONNREFUSED","syscall":"connect","address":"::1","port":8545}, url="http://localhost:8545", code=SERVER_ERROR, version=web/5.7.1)
    at Logger.makeError (<path-repo-was-cloned-in>/node-18-hardhat-issue/node_modules/@ethersproject/logger/lib/index.js:238:21)
    at Logger.throwError (<path-repo-was-cloned-in>/node-18-hardhat-issue/node_modules/@ethersproject/logger/lib/index.js:247:20)
    at <path-repo-was-cloned-in>/node-18-hardhat-issue/node_modules/@ethersproject/web/lib/index.js:260:36
    at step (<path-repo-was-cloned-in>/node-18-hardhat-issue/node_modules/@ethersproject/web/lib/index.js:33:23)
    at Object.throw (<path-repo-was-cloned-in>/node-18-hardhat-issue/node_modules/@ethersproject/web/lib/index.js:14:53)
    at rejected (<path-repo-was-cloned-in>/node-18-hardhat-issue/node_modules/@ethersproject/web/lib/index.js:6:65)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  reason: 'missing response',
  code: 'SERVER_ERROR',
  requestBody: '{"method":"eth_chainId","id":42,"jsonrpc":"2.0"}',
  requestMethod: 'POST',
  serverError: Error: connect ECONNREFUSED ::1:8545
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1300:16) {
    errno: -61,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '::1',
    port: 8545
  },
  url: 'http://localhost:8545'
}

Node.js v18.12.1

```


I'm on an intel Mac running big sur.  Node version v18.12.1, npm version 8.19.2
