import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Script from 'next/script'
import styles from '../styles/Home.module.css';
import {
	AnchorProvider, BN, Program, utils, web3
} from '@project-serum/anchor';
import {  Connection, PublicKey, Transaction } from '@solana/web3.js';
import {useAnchorWallet, useWallet } from '@solana/wallet-adapter-react';


import assert from 'assert';
import { hex } from '@project-serum/anchor/dist/cjs/utils/bytes';

const idl = require('../public/idl.json');
const utf8 = utils.bytes.utf8

const Home: NextPage = () => {
    const [data , setData]=useState(null)
    const anchorWallet = useAnchorWallet();
    useEffect(() => {
        fetch("./sample_product.json").then(
            function(res){
            return res.json()
          }).then(function(data){
          // store Data in State Data Variable
            setData(data)
          }).catch(
            function(err){
              console.log(err, ' error')
            }
          )
    //     const script = document.createElement('script');
      
    //     script.src = "https://solpay.togatech.org/sdk.js";
    //     script.async = true;
    //     console.log(SOLPay)
      
    //     document.body.appendChild(script);
      
    //     return () => {
            
    //       document.body.removeChild(script);

    //     }
        
      }, []);

    

// Fetch Function   


  
    async function sendTransaction() {
        if (!anchorWallet) {
            return;
        }
        
        //const network = "http://127.0.0.1:8899";
        
        
        console.log(data.name)
        const wallet = await SOLPay.connectWallet();
        console.log("Checking wallet", wallet)
        console.log("Anchor wallet", anchorWallet)
        
        const network = "https://api.devnet.solana.com"
        const connection = new Connection(network, "processed");
        const provider = new AnchorProvider(
          connection, anchorWallet, {"preflightCommitment": "processed"},
        );
        const program = new Program(idl, idl.metadata.address, provider);

        try {
            
            const transaction = new Transaction();
            let blockhash = await (await connection.getLatestBlockhash('finalized')).blockhash;
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = anchorWallet.publicKey
            
            //const signedTransaction = await provider.signTransaction(transaction);
            const message = `To avoid digital dognappers, sign below to authenticate with CryptoCorgis`;
            const encodedMessage = new TextEncoder().encode(message);
            const signedMessage = await SOLPay.signMessage(data);
            console.log(signedMessage)
            console.log(anchorWallet)
            // const signedTransaction = await anchorWallet.signTransaction(transaction);
            // const signature = await connection.sendRawTransaction(signedTransaction.serialize());
            // console.log(new Date().toISOString())
            // assert (signedTransaction.signature != null)
            // console.log(signedTransaction)
            // console.log(signature)
            //await anchorWallet.
            
            //console.log(new TextDecoder("utf-8").decode(signedTransaction.signature))

            // const toKey = new PublicKey("C93r5S43itAXPDsSsDWuj6Cn3tavt84dxnwv5K53MvBH");
            // const [escrowPDA] = await web3.PublicKey.findProgramAddress(
            //     [utf8.encode('escrow'), anchorWallet.publicKey.toBuffer(), toKey.toBuffer()],
            //     program.programId,
            // );

            // console.log("escrowPDA", escrowPDA);

            // const trans = await program.methods.createEscrow(new BN(1000000000)).accounts({
            //     escrow: escrowPDA,
            //     from: anchorWallet.publicKey,
            //     to: toKey,
            //     systemProgram: web3.SystemProgram.programId,
            // }).rpc();

            // console.log("trans", trans);

            // const escrowAccount = await program.account.escrowAccount.fetch(escrowPDA);
            // console.log("escrowAccount", escrowAccount);
            // console.log(escrowAccount.from.toString())
            // console.log(escrowAccount.to.toString())
            // console.log(escrowAccount.amount.toString())
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        <Script src="https://solpay.togatech.org/sdk.js" type="text/javascript" />
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Kaleidoscope
                </h1>
                <h2>Creating escrow (sample)</h2>

                <div className={styles.walletButtons}>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                </div>

                <p className={styles.description}>
                    <button onClick={sendTransaction}>Create Transaction</button>
                </p>
            </main>
            
        </div>
        </>
    );
};

export default Home;