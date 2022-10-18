import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { EscrowDapp } from "../target/types/escrow_dapp";

describe("escrow_dapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.EscrowDapp as Program<EscrowDapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
