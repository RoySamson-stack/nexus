use ring::{rand, signature};
use ring::rand::SecureRandom;
use ring::signature::{Ed25519KeyPair, KeyPair, Signature};

pub struct Crypto {
    key_pair: Ed25519KeyPair,
}

impl Crypto {
    pub fn new() -> Self {
        let rng = rand::SystemRandom::new();
        let mut seed = [0; 32];
        rng.fill(&mut seed).unwrap();
        let key_pair = Ed25519KeyPair::from_seed_unchecked(&seed).unwrap();
        Crypto { key_pair }
    }

    pub fn sign(&self, message: &[u8]) -> Signature {
        self.key_pair.sign(message)
    }

    pub fn verify(&self, message: &[u8], signature: &[u8]) -> bool {
        let public_key = self.key_pair.public_key();
        public_key.verify(message, signature).is_ok()
    }
}
