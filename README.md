![GitHub issues](https://img.shields.io/github/issues/PiTi2k5/Crypto-Webminer)
[![Discord](https://img.shields.io/discord/662700970857332786)](https://discord.gg/RgwPRPC)
![GitHub Repo stars](https://img.shields.io/github/stars/PiTi2k5/Crypto-Webminer?style=social)


Crypto Webminer | Electroneum | Monero | Bytecoin | INTUcoin | Lethean (IntenseCoin) | Sumokoin | Graft | DERO | Turtlecoin | Torque (Stellite) | BitTube | DERO | Ultranote | Aeon | Masari | Uplexa | Minergate | Moneroocean Auto Algo Switch feature | Cryptonight | Cryptonight-Lite | Cryptonight-Fast | Cryptonight-Fast2 | Cryptonight-Half | Cryptonight-Pico | Argon2id - Chukwa | Argon2id - ChukwaV2 | Cryptonight-Heavy | Cryptonight-Saber (BitTube) | Ghostrider (Raptoreum RTM) | Kylacoin (KCN) Flex | Custom Pool Support - Mining in your Browser

#### Use Crypto Webminer - JavaScript miner on any Stratum Pool for Cryptonight | Cryptonight-Lite | Cryptonight-Fast | Cryptonight-Fast2 | Cryptonight-Half | Cryptonight-Pico | Cryptonight Reverse Waltz | Cryptonight-ZLS | Argon2id - Chukwa | Argon2id - ChukwaV2 | Cryptonight-Heavy | Cryptonight-Saber (BitTube) | Ghostrider (Raptoreum RTM) | Kylacoin (KCN) Flex Coins

#### LiveTest - https://www.donate.crypto-webminer.com/donate.html

#### Mining App for Android, iOS, Win UWP<br> 
Android: https://www.crypto-webminer.com/Download/com.universalcoinminer.cryptonight.apk <br> 
iOS: https://itunes.apple.com/us/app/crypto-miner-for-monero-xmr/id1320235885?mt=8<br> 

#### Important
Information for all miners: Please use a own custom frontend solution for your 100+ workernames with same wallet like database, json and pool api for calculating rewards (for e.g. self hosted webminer UI Service / Integration with dynamic workernames where you pay your users and so on)...every samewallet.differentworkername (or different passwords) is a single connection to the mining pool and will not be bundled via backend --> You produce to much workload for the mining pool and can result with a wallet ban from me or the mining pool. If you use "some" different workernames/passwords with your same wallet all is fine, same as samewallet.sameworkername/samepassword with high count of devices :)


#### Simple Pool change: ?jason=Your_Favorite_Pool:PortNr<br>

#### Edit the index.html and add your favorite coin/algo<br>

#### Examples: Moneroocean Auto Algo Switch - mining the most profitable coin - XMR Monero Payout | Best choice for mining ;) <br> (Its working after Monero Hardfork RandomX, if you want xmr payouts)<br> (CN/CN-Lite/CN-Fast/CN-Half/CN-Pico/CN-RWZ/CN-Heavy:xhv/Argon2id-Chukwa/Argon2id-Chukwav2)|Ghostrider|Flex<br> need ?algo=cn/r<br>
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/r?jason=gulf.moneroocean.stream:10008" > </script>
```
#### Examples: CN R Coins (Italocoin, Lethean, Sumokoin) need ?algo=cn/r<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/r?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN V8 Reverse Waltz Coins need ?algo=cn/rwz<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/rwz?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN | ZLS Coins need ?algo=cn/zls<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/zls?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN UPX2 Coins (Uplexa) need ?algo=cn/upx<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/upx?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN V8 Coins (Caliber, JyoCoin, PyrexCoin, Safex Cash) need ?algo=cn/2<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/2?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN V7 Coins (Beldex, Citadel, CPA Coin, Hospital Coin, LeviarCoin, MoneroV, Mutex, ParsiCoin, Quantum, Superior Coin) need ?algo=cn/1<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/1?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN ASIC Coins (B2Bcoin, Balkancoin, BeFrank, Bitcoal, Bold, Bytecoin, Crepcoin, CROAT Coin, DinastyCoin, Discoin, Geem, Incognito, Infinium - 8, Investcoin, InziderX, Karbo, LithiumBit, MonetaVerde, Newton, NinjaCoin, PluraCoin, Qwertycoin, SpesCoin, TFT Network, TycheCash, Video Games, X12 Coin, Xcoin, Xeonbit) need ?algo=cn/0<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/0?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN Lite V7 Coins (2ACoin, ADON Coin, BBSCoin, BitcoinNova, BitcoiNote, Bitsum, Bittorium, BytechCoin, Catalyst, Equilibria, IntuCOIN, NashCash, Nibble Classic, Secure Cash, Ultranote, Zent Cash) need ?algo=cn-lite/1
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn-lite/1?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN Pico Coins (BitcoinMono, Cypruscoin, Dero Gold, ElphyreCoin, HITC, Iridium, LightChain, Mangocoin, Obscure, Oscillate, Plenteum, Tellurium, Tritanium, TurtleGold, Worktips, WrkzCoin, XtendCash) need ?algo=cn-pico/trtl
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn-pico/trtl?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: Argon2id - Chukwa Coins need ?algo=chukwa
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=chukwa?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: Argon2id - ChukwaV2 (Turtlecoin) Coins need ?algo=chukwav2
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=chukwav2?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN Fast V2 | CN Half Coins (Masari) need ?algo=cn/half<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/half?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN Fast Coins (Aluisyo, Electronero, ElectroneroXP) need ?algo=cn/msr<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/msr?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN Heavy Classic Coins (Bixbite) need ?algo=cn-heavy/0<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn-heavy/0?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN Heavy XHV Coins (Haven, BLOC.money, CitiCash, Niobio Cash, Ombre) need ?algo=cn-heavy/xhv<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn-heavy/xhv?jason=Your_Favorite_Pool:PortNr" > </script>
```
#### Examples: CN-Saber Coins (BitTube) need ?algo=cn-heavy/tube (only valid until 29th July 2020 because of Hardfork to Cuckaroo29b)<br> 
```sh
<script src="https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn-heavy/tube?jason=Your_Favorite_Pool:PortNr" > </script>
```
<br><br> 
Or use our integration for websites & blogs
https://www.crypto-webminer.com/integrate.html
<br><br>

Join Discord Chat
https://discord.gg/nnARdpc
  
<br><br> 
We take a 1% developer fee<br><br> <br><br> 
Key Data:

• The world only solution for webmining Ghostrider like Raptoreum RTM and Kylacoin (KCN) Flex algo on moneroocean mining pool | most profitable right now<br>
• The world only test solution for webmining native RandomX like Monero | proof of concept<br>
• The world only solution for webmining CN-Heavy and his variants like XHV Heaven and BitTube (CN-Saber Algo)<br>
• Possible Cryptonight Algos: Cryptonight | CN-Lite | CN-Fast | CN-Fast2 | CN-Pico | CN-RWZ | CN-UPX2 | CN-Half | CN-Heavy | CN-Saber (BitTube) | Argon2id - Chukwa | Argon2id - ChukwaV2 | Ghostrider (Raptoreum RTM) | Kylacoin (KCN) Flex<br>
• Website monetization alternative instead of annoying ads e.g. popup | popunder | fullscreen<br>
• UI webmining and mobile mining<br>
• Easy to use: No installation required, paste in your wallet and start webmining today<br>
• Easy integration script for website monetization<br>
• Mining pool is free to choice<br>
• Auto Algo Switch Feature: The most profitable algo will be mined automatically and you get payouts in Monero (XMR) ~ 30-50% more profitable instead of pure coin webmining<br>
• Helpfully support via Discord and Email<br><br> <br><br>

## Support my work by Donate
«------------------------------------------------------------------------------------------------------------------------------------»

Cryptocurrency Webminer

https://www.crypto-webminer.com/

Crypto Webminer Bitcoin (BTC) Address<br>
39Ym7nhESgVrTdd3nvQVncc2pD69erPjxk

Crypto Webminer Monero (XMR) Address<br>
838J7NdH2iBRYvNUZjgLubQhUQybZkicBGA7VCajyi8iMXmX3gZxtqYQH7zjtSjrWQRTn9dtwArG3ZnxPbUJsdtv51Yj6mf

Binance Trading - You want trading or need a depot for XMR, Join Binance!
https://www.binance.com/de/register?ref=40889461

Get Ledgers prepaid creditcard for cryptos! 
https://bit.ly/3I0Glti

Best and safest Hardware Wallet
https://shop.ledger.com/de?referral_code=KRRFEP01AHPS7
«------------------------------------------------------------------------------------------------------------------------------------»
