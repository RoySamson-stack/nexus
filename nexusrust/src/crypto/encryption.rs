use ring::rand;
use ring::signature::KeyPair;

pub fn generate_keypair() -> Result<(), ring::error::Unspecified> {
    let rng = rand::SystemRandom::new();
    let pkcs8_bytes = ring::signature::Ed25519KeyPair::generate_pkcs8(&rng)?;
    let key_pair = ring::signature::Ed25519KeyPair::from_pkcs8(pkcs8_bytes.as_ref())?;
    Ok(())
}
