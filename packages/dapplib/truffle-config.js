require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain pulse hunt kite outer settle'; 
let testAccounts = [
"0x52762080e0df97f6dbef53b6b9e414c3ac0f37034060b2d91ae3e462db5f987e",
"0x2735bdc31eb4d624a404cb1868373bea5204dc04cafe40fb2981f40cb23efff2",
"0x083ed294869630e5be0b639a26f64749427e32b81247786ebf10773602225ea2",
"0x85dfa07e638453dc84cd0c74d7f4b98f8d14e60bb13815ca48f564cfa5b9b7b6",
"0x457e66ab4d820526bf8d74c88205a9979a0a6d630b15282f0fd361df1e2a9c10",
"0xef709bd7e9d87c07c3c65751495ac0e64dfc9faccdccb80df3d02cae2d0f2239",
"0x020d07ea0fdddb1f3e519bdd4263b3952c14cb49615f487fa19ce950fc08edce",
"0xcf2c55da5226e6de67cad831da4ef531d8824dbccc3fd2f1abc02b5b3d4a872a",
"0xe3c7c4614dac3d442afbe3fafd2f27ff2f81e93b2613d2d164c58ef5ec429a4e",
"0x9f4ce1e36c2b44e7599501c4385adda0382ccba731259ae6bbeaf5ae7bb00873"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

