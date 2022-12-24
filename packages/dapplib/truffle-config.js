require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stool crawl snow huge hover argue slot genius'; 
let testAccounts = [
"0x25a9f20fb272ab267fe3f9c595ec8d381a56c38f024cc5bba914f7fe30ed10cd",
"0x8da9f79a6c9c5bae155dc57f448eb4d196fe523a5882e570ad43cdfadaba5af1",
"0xb1d4857bb4edc8566dc688b9bb8cb46bdeeb94e4fc0ecbfc2fa69492be83d521",
"0x78ad444841c165cdc2eeb2915de39d72a47fc5aaf391353fc3f13681801406c9",
"0x81fee7e3bff28b0d9d8d7d7e8c077c81197c7eea2a8db61089589db12855073b",
"0x24a53ce338d05787719aa097c93d36453d20100e94dcb8222150a13ee19362c8",
"0x95ad307e6b238101e23b297a8502462e2a21caddb56a9ee1cd08866c3141462d",
"0xc04dd039b4c255de526a243209b5078ef238d73c0b7744a82e92cbfcdde0d32b",
"0x3cf1ad3483bf9a9246a0f31bc0f01c2d0a92fdf980741d153ebd53939a5a371c",
"0xb5a736ccb85c05eb169862a1c37f7dbbfc854dd5383b55ded5085d544ebbd829"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

