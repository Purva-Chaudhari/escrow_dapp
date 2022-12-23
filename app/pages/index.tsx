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

const idl = require('../../target/idl/po_b.json');
import { PoB } from '../../target/idl/po_b.json'
const utf8 = utils.bytes.utf8


const Home: NextPage = () => {
    const [data , setData]=useState(null)

    /*useAnchorWallet is imported from solana/wallet-adapters which is the main library we use for anchor functions*/
    const anchorWallet = useAnchorWallet();
    
    /* Loading json */
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
        
      }, []);
  
    async function sendTransaction() {
        if (!anchorWallet) {
            return;
        }
        
        const network = "http://127.0.0.1:8899";
        
        
        //const network = "https://api.devnet.solana.com"
        const connection = new Connection(network, "processed");
        const provider = new AnchorProvider(
          connection, anchorWallet, {"preflightCommitment": "processed"},
        );
        console.log("Program address : ",idl.metadata.address)
        const program = new Program(idl, idl.metadata.address, provider);
        //const program = workspace.PoB as Program<PoB>;
        console.log("Program  : ",program)

        try {
            

          let amount = 10000;
    
          const [payerPDA, payerBump] = await web3.PublicKey.findProgramAddress(
            [Buffer.from("challenge"), anchorWallet.publicKey.toBuffer()], 
            program.programId
          )
          console.log(anchorWallet.publicKey.toBuffer())

          let balPda = await provider.connection.getBalance(payerPDA)
          console.log("Balance Pda before sol : ", balPda)
          console.log("Payer PDA : ", payerPDA.toBase58())

          const tx = await program.methods.startChallenge(
            new BN(payerBump),
            new BN(amount)).accounts({
              
                store: payerPDA,
                payer: anchorWallet.publicKey,
                systemProgram: web3.SystemProgram.programId,
              
            }).rpc();
    let balPayer = await provider.connection.getBalance(anchorWallet.publicKey)
    console.log("Balance Payer after sol : ", balPayer)
    let balPda1 = await provider.connection.getBalance(payerPDA)
    console.log("Balance PDA after sol : ", balPda1)
    console.log("Your transaction signature", tx);

            // const toKey = new PublicKey("C93r5S43itAXPDsSsDWuj6Cn3tavt84dxnwv5K53MvBH");
            // const [escrowPDA] = await web3.PublicKey.findProgramAddress(
            //     [utf8.encode('challenge'), anchorWallet.publicKey.toBuffer()],
            //     program.programId,
            // );

            // console.log("escrowPDA", escrowPDA);

            // const trans = await program.methods.start(new BN(1000000000)).accounts({
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