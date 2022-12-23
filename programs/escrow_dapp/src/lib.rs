use anchor_lang::prelude::*;
use std::mem::size_of;
//use anchor_spl::token::{Token, MintTo, Transfer};

declare_id!("89rLWWdw1Lb3jbCYvPFGkf3RLAUhPcmjf9pxr4KA4JyE");

#[program]
pub mod po_b {
    use super::*;

    pub fn start_challenge(ctx: Context<StartChallenge>, 
        bump: u8, 
        amount: u64
    ) -> Result<()> {
        let store = &mut ctx.accounts.store;
        let payer = &mut ctx.accounts.payer;

        store.amount = amount;
        store.bump = bump;
        let ix = anchor_lang::solana_program::system_instruction::transfer(
            &payer.to_account_info().key(),
            &store.to_account_info().key(),
            amount,
        
        );
        anchor_lang::solana_program::program::invoke(
            &ix,
            &[
                payer.to_account_info(),
                store.to_account_info(),
            ],
        ).ok();
        Ok(())
    }
    
}

#[derive(Accounts)]
#[instruction(bump: u8)]
pub struct StartChallenge<'info> {
   
    #[account(
        init, 
        seeds = [b"challenge".as_ref(), payer.key().as_ref()],
        bump,
        payer = payer,
        space = size_of::<PoB>() + 32)]
    store: Account<'info, PoB>,
   
      #[account(mut)]
      payer: Signer<'info>,
      system_program: Program<'info, System>,
}

#[account]
#[derive(Default)]
pub struct PoB {
    bump: u8,
    amount: u64,
}

// end challenge
// 1 chall