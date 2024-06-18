use tokio::process::Command;

pub async fn block_ip(ip: &str) -> Result<(), Box<dyn std::error::Error>> {
    Command::new("iptables")
        .arg("-A")
        .arg("INPUT")
        .arg("-s")
        .arg(ip)
        .arg("-j")
        .arg("DROP")
        .output()
        .await?;
    Ok(())
}
