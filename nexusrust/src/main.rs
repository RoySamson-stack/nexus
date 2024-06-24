mod secure_exchange;
mod federated_sharing;
mod privacy_preserving_analytics;

use secure_exchange::SecureExchange;
use federated_sharing::FederatedSharing;
use privacy_preserving_analytics::PrivacyPreservingAnalytics;
use std::io::{self, Write};

fn main() {
    env_logger::init();

    let secure_exchange = SecureExchange::new();
    let federated_sharing = FederatedSharing::new();
    let analytics = PrivacyPreservingAnalytics::new();

    loop {
        println!("Select an option:");
        println!("1. Exchange Data Securely");
        println!("2. Share Threat Intelligence");
        println!("3. Analyze Data Privately");
        println!("4. Exit");

        print!("Enter your choice: ");
        io::stdout().flush().unwrap();

        let mut choice = String::new();
        io::stdin().read_line(&mut choice).unwrap();

        match choice.trim() {
            "1" => {
                secure_exchange.exchange_data();
            }
            "2" => {
                federated_sharing.share_threat_intelligence();
            }
            "3" => {
                analytics.analyze_data();
            }
            "4" => {
                println!("Exiting...");
                break;
            }
            _ => {
                println!("Invalid choice. Please try again.");
            }
        }
    }
}
