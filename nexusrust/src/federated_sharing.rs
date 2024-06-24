use log::info;
use serde::{Deserialize, Serialize};
use serde_json;

#[derive(Serialize, Deserialize)]
struct ThreatIntelligence {
    id: u32,
    description: String,
}

pub struct FederatedSharing;

impl FederatedSharing {
    pub fn new() -> Self {
        FederatedSharing
    }

    pub fn share_threat_intelligence(&self) {
        println!("Sharing threat intelligence...");
        info!("Sharing threat intelligence in a federated manner...");
        let ti = ThreatIntelligence {
            id: 1,
            description: String::from("Example threat intelligence"),
        };

        let serialized_ti = serde_json::to_string(&ti).unwrap();
        info!("Serialized threat intelligence: {}", serialized_ti);

        let deserialized_ti: ThreatIntelligence = serde_json::from_str(&serialized_ti).unwrap();
        info!(
            "Deserialized threat intelligence: {} - {}",
            deserialized_ti.id, deserialized_ti.description
        );
    }
}
