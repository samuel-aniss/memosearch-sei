<p align="center" size="20">
    <span style="color:black;font-weight:700;font-size:30px">
    Cosmos
    </span> 
    <img src="https://www.computerhope.com/jargon/j/javascript.png" alt="isolated" width="40"/>
</p>
<p align="center">
    <a href="https://opensource.org/licenses/Apache-2.0"><img alt="License" src="https://img.shields.io/badge/License-Apache_2.0-blue.svg"></a>
    <a href="https://www.npmjs.com/package/cosmossdkjs"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/cosmossdkjs.svg"> </a>
</p>

<p align="center">
    <a href="https://cosmos.github.io/cosmjs/latest/stargate/index.html">Docs</a>
</p>

---

The `cosmossdkjs` Library is being developed to be able to support transaction generation, signing and broadcasting to interact with supported Cosmos SDK based blockchains.

NOTE - This is currently a W.I.P. Usage examples will be added soon here. 


## Setup

```sh
npm install cosmossdkjs
```

## Adding custom Modules support

To add support for Cosmos SDK modules, you need to first transpile the ./proto files associated with that module and add the generated typescript files to the `src/proto` folder and the generated /types files to the `types/proto` folder and add them to the RPCCLient in the `src/proto/cosmwasm/rpc.query.ts` file.

### DEV NOTES

- Finding supported Queries and Transaction Msgs
    - To figure supported queries / tx msgs supported by any cosmos module, look at `query.rpc.query.d` and `tx.rpc.msg.d` in the `types/proto/<creator>/<module_name>`.