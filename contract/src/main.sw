contract;

use std::{auth::msg_sender, token::mint_to, call_frames::{msg_asset_id, contract_id}, context::msg_amount};

enum PlayerType {
    SuperHero: (),
    SuperVillain: (),
}

struct Player {
    level: u64,
    player_type: PlayerType
}

impl Player {
    fn new(player_type: PlayerType) -> Self {
        Self { 
            level: 1,
            player_type: player_type
        }
    }
    fn level_up(ref mut self) -> u64 {
        self.level += 1;
        self.level
    }
}

abi MyContract {
    #[storage(write)]
    fn new_player() -> Player;

    #[storage(read, write), payable]
    fn level_up() -> u64;
}

storage {
    players: StorageMap<Identity, Player> = StorageMap {},
}

impl MyContract for Contract {
    #[storage(write)]
    fn new_player() -> Player {
        let sender = msg_sender().unwrap();
        let player_type = match sender {
            Identity::Address => PlayerType::SuperHero,
            Identity::ContractId => PlayerType::SuperVillain,
        };
        let player = Player::new(player_type);
        storage.players.insert(sender, player);
        mint_to(1_000_000_000, sender);
        player
    }

    #[storage(read, write), payable]
    fn level_up() -> u64 {
        let asset_id = msg_asset_id();
        let amount = msg_amount();
        require(amount > 0, "not enough tokens");
        require(asset_id == contract_id(), "wrong token");
        let sender = msg_sender().unwrap();
        let mut player = storage.players.get(sender).unwrap();
        let new_level = player.level_up();
        storage.players.insert(sender, player);
        new_level
    }
}
