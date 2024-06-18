use reqwest::Client;

pub async fn send_to_siem(data: &str) -> Result<(), reqwest::Error> {
    let client = Client::new();
    let res = client.post("https://siem-platform/api/data")
        .body(data.to_string())
        .send()
        .await?;
    Ok(())
}
