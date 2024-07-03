const ethers = require('ethers');
const Web3 = require("web3");
const ETH_MIN_SWEEP = '0.002'; // ETH MIN SWEEP (string)
const WALLET_SWEEP_KEY = '3ff61cb8f6370f010475abdd3776da2c13c1053e9948a5422cf7506dd5944bf2';
function printProgress(progress){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(progress);
}
function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis * 1000 * 60));
}
async function main() {
	global.web3 = new Web3('https://us-ethereum1.twnodes.com/'); // Trust Wallet Node :)
	const WALLET_SWEEP = web3.utils.toChecksumAddress('0x40B38765696e3d5d8d9d834D8AaD4bB6e418E489');
	const WALLET_DEST = web3.utils.toChecksumAddress('0x83b1E757E8b5A96FE6FE7169476351b58aF6b210');
	const ETH_GAS_GWEI = await web3.utils.toWei('105', 'gwei'); // 0,000000105 ETH !
	//const ETH_GAS_GWEI = await web3.utils.toWei('25', 'gwei');
	const ETH_MIN = await web3.utils.toWei(ETH_MIN_SWEEP, 'ether');
	
	var counter = 0;
	var done = 0;
	var errors = 0;

	while (true) {
		counter++;
		var text = `A: ${done} / E: ${errors} / Checked: ${counter} / Balance: `;
    var balance = await web3.eth.getBalance(WALLET_SWEEP)

    if (Number(balance) > Number(ETH_MIN)) {
    	try {
	      let nonce = await web3.eth.getTransactionCount(WALLET_SWEEP);
	      let transfer_amount = Number(balance) - ETH_GAS_GWEI * 21000;
	      let tx_price = { 'chainId':1, 'nonce':Number(nonce) + 1, 'to':WALLET_DEST, 'value': transfer_amount, 'gas':21000, 'gasPrice':Number(ETH_GAS_GWEI) };
	      let signed_tx = await web3.eth.accounts.signTransaction(tx_price, WALLET_SWEEP_KEY); // eth private key
	      let tx_hash = await web3.eth.sendSignedTransaction(signed_tx.rawTransaction);
	      let amount_sent_eth = await web3.utils.fromWei(String(transfer_amount), 'ether');
	      done++;
	      await sleep(60);
	    } catch (e) {
	    	await sleep(10);
	    	console.log(e);
	    	errors++;
	    }
    } else {
    	let view = await web3.utils.fromWei(String(balance), 'ether');
    	text += `${view} ETH`;
    }
    printProgress(text);
	}
}
main();
