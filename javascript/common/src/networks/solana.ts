import { IChainNetworkConfig, ISolanaConfig } from './types.js';

export const SWITCHBOARD_SOLANA_MAINNET_CONFIG: IChainNetworkConfig = {
  programId: 'SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f',
  authority: '2NvGRFswVx3GXxURNSfjbsWY4iP1ufj8LvAKJWGXSm4D',
  idlAddress: 'Fi8vncGpNKbq62gPo56G4toCehWNy77GgqGkTaAF5Lkk',
  metadata: {
    defaultRpcUrl: 'https://api.mainnet-beta.solana.com',
    defaultExplorer: 'https://explorer.solana.com',
  },
  queues: [
    {
      name: 'Permissioned Queue',
      address: '3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn',
      authority: '31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc',
      crankAddress: 'GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd',
      permissioned: true,
    },
    {
      name: 'Permissionless Queue',
      address: '5JYwqvKkqp35w8Nq3ba4z1WYUeJQ1rB36V8XvaGp6zn1',
      authority: '31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc',
      crankAddress: 'BKtF8yyQsj3Ft6jb2nkfpEKzARZVdGgdEPs6mFmZNmbA',
      permissioned: false,
    },
  ],
};

export const SWITCHBOARD_SOLANA_DEVNET_CONFIG: IChainNetworkConfig = {
  programId: 'SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f',
  authority: '2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh',
  idlAddress: 'Fi8vncGpNKbq62gPo56G4toCehWNy77GgqGkTaAF5Lkk',
  metadata: {
    defaultRpcUrl: 'https://api.devnet.solana.com',
    defaultExplorer: 'https://explorer.solana.com/?cluster=devnet',
  },
  queues: [
    {
      name: 'Permissioned Queue',
      address: 'PeRMnAqNqHQYHUuCBEjhm1XPeVTh4BxjY4t4TPan1pG',
      authority: '2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh',
      crankAddress: 'crnKsPsuP6f7uiDbAYYw66h2RNBrqoazmtZHwazkC6V',
      permissioned: true,
    },
    {
      name: 'Permissionless Queue',
      address: 'uPeRMdfPmrPqgRWSrjAnAkH78RqAhe5kXoW6vBYRqFX',
      authority: '2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh',
      crankAddress: 'UcrnK4w2HXCEjY8z6TcQ9tysYr3c9VcFLdYAU9YQP5e',
      permissioned: false,
    },
  ],
};

/**
@defaultValue the default Solana configuration

```json
{
  "mainnet": {
    "programId": "SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f",
    "authority": "2NvGRFswVx3GXxURNSfjbsWY4iP1ufj8LvAKJWGXSm4D",
    "idlAddress": "Fi8vncGpNKbq62gPo56G4toCehWNy77GgqGkTaAF5Lkk",
    "metadata": {
      "defaultRpcUrl": "https://api.mainnet-beta.solana.com",
      "defaultExplorer": "https://explorer.solana.com"
    },
    "queues": [
      {
        "name": "Permissioned Queue",
        "address": "3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn",
        "authority": "31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",
        "crankAddress": "GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd",
        "permissioned": true
      },
      {
        "name": "Permissionless Queue",
        "address": "5JYwqvKkqp35w8Nq3ba4z1WYUeJQ1rB36V8XvaGp6zn1",
        "authority": "31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",
        "crankAddress": "BKtF8yyQsj3Ft6jb2nkfpEKzARZVdGgdEPs6mFmZNmbA",
        "permissioned": false
      }
    ]
  },
  "devnet": {
    "programId": "SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f",
    "authority": "2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",
    "idlAddress": "Fi8vncGpNKbq62gPo56G4toCehWNy77GgqGkTaAF5Lkk",
    "metadata": {
      "defaultRpcUrl": "https://api.devnet.solana.com",
      "defaultExplorer": "https://explorer.solana.com/?cluster=devnet"
    },
    "queues": [
      {
        "name": "Permissioned Queue",
        "address": "PeRMnAqNqHQYHUuCBEjhm1XPeVTh4BxjY4t4TPan1pG",
        "authority": "2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",
        "crankAddress": "crnKsPsuP6f7uiDbAYYw66h2RNBrqoazmtZHwazkC6V",
        "permissioned": true
      },
      {
        "name": "Permissionless Queue",
        "address": "uPeRMdfPmrPqgRWSrjAnAkH78RqAhe5kXoW6vBYRqFX",
        "authority": "2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",
        "crankAddress": "UcrnK4w2HXCEjY8z6TcQ9tysYr3c9VcFLdYAU9YQP5e",
        "permissioned": false
      }
    ]
  }
}
```
 */
export const SWITCHBOARD_SOLANA_CONFIG: ISolanaConfig = {
  mainnet: SWITCHBOARD_SOLANA_MAINNET_CONFIG,
  devnet: SWITCHBOARD_SOLANA_DEVNET_CONFIG,
};