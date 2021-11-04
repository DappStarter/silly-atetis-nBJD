require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stock riot noise minor industry light army gather'; 
let testAccounts = [
"0x0c5e715853765b9e92c46a0942859634a2977059fc4c17cb5b9a5c1c3f3ccbbb",
"0xd7730036a0cdb4bf04e77eb2eb5db27957ebbb3e07a1b2028ad3f18f2b67d39d",
"0xbfe19f12e79b4171fd55fc8684fed36e0cb120b8257d177708aead724f32d3d2",
"0x0879959437b240d09a07161c967b0969f15c1cc66b5e2789adef6ac4cbf84a6d",
"0xcb6b813d221439249609a6677de3c66f0c9a4795fa7ce36180b9978a46c32f48",
"0x35ea9a45343139cf6f6ec3205fc4d9fa75569931d820b798e8ec232db04a8356",
"0x581e1a413aa39103adb4ef37ae053f8f50cc0fce8aa47576aef7719e2ec9b167",
"0x906aa9c7b0ac7f543b214d1eb93bc24cd3f534109d9cca68a47ad4148d0d8cee",
"0x80cdc1d236f4a39b4efae75b0b717995a56d0afb77adb65bfce698557b2145d2",
"0xa8fc1bca739d6594e11dc2f65f512fab6a4a23225072d29a580cee731d81448a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


