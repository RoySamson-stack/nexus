use reqwest::Client;
use serde::{Deserialize, Serialize};
use tokio;

#[derive(Serialize, Deserialize)]
pub struct ThreatIntelligence {
    pub data: String,
    pub signature: String,
}

pub struct Network {
    client: Client,
}

impl Network {
    pub fn new() -> Self {
        Network {
            client: Client::new(),
        }
    }

    pub async fn send_data(&self, url: &str, data: &ThreatIntelligence) -> Result<(), reqwest::Error> {
        let response = self.client.post(url).json(data).send().await?;
        if response.status().is_success() {
            Ok(())
        } else {
            Err(reqwest::Error::new(reqwest::StatusCode::INTERNAL_SERVER_ERROR, "Failed to send data"))
        }
    }

    pub async fn receive_data(&self, url: &str) -> Result<ThreatIntelligence, reqwest::Error> {
        let response = self.client.get(url).send().await?;
        if response.status().is_success() {
            let data = response.json::<ThreatIntelligence>().await?;
            Ok(data)
        } else {
            Err(reqwest::Error::new(reqwest::StatusCode::INTERNAL_SERVER_ERROR, "Failed to receive data"))
        }
    }
}
