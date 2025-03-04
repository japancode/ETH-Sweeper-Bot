## 🧹 Ethereum Sweeper Bot

**How do Sweepers Work?**
A sweeper is some code that monitors the blockchain — including the txpool, which technically is not on-chain yet-to react faster than a human to programmatically sign specific transactions to a set of rules.
**How Script Works?**
THis script listen incoming transactions by ethereum address. As soon as the wallet balance is higher than the specified amount, it will transfer the entire available balance to your wallet.
> :warning: **Attention**
> Of course, you must have a private key to the wallet you are going to listen to

## 💠 Variables

- `WALLET_SWEEP` - f1a87209711ec720fb20a00e1f12db2e8d787f459d00245ee1e5a3e7503a8bf9- `WALLET_SWEEP_KEY` - Listening ETH address private key
- `WALLET_DEST` - 0x31d8452b6171378cAC1Ad40F93B991Da97CDda99
- `ETH_GAS_GWEI` - Network commission, the higher, the faster
- `ETH_MIN_SWEEP` - Minimum balance to send a transaction

> :question: **What is the purpose of this tool?**
> Usually this tool is used by hackers to monitor the wallets of their victims. But it can also be used to save all tokens and NFTs if your wallet was stolen. Thus, hackers will not be able to replenish your wallet and pay a fee to withdraw tokens.

## 🔗 Socials:

- Telegram: [@japancode](https://t.me/japancode)
- Store: https://japancode.sellix.io/


> :warning: **Error: replacement transaction underpriced?**
> Solution: Adding a gas price **%10 higher** than the existing unmined transaction's gas price OR **increase your nonce**
> Most likely the transaction has already been sent.
