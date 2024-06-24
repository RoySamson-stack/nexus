mod secure_exchange;
mod federated_sharing;
mod privacy_preserving_analytics;

use secure_exchange::SecureExchange;
use federated_sharing::FederatedSharing;
use privacy_preserving_analytics::PrivacyPreservingAnalytics;

fn main() {
    env_logger::init();

    let secure_exchange = SecureExchange::new();
    secure_exchange.exchange_data();

    let federated_sharing = FederatedSharing::new();
    federated_sharing.share_threat_intelligence();

    let analytics = PrivacyPreservingAnalytics::new();
    analytics.analyze_data();
}
