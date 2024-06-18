use ssi::did::DIDMethod;
use ssi::did::did::DID;

pub fn create_did() -> DID {
    let did_method = DIDMethod::default();
    did_method.create()
}
