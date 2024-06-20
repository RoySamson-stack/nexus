use actix_cors::Cors;
use actix_web::{web, App, HttpServer, Responder};
use sysinfo::{System, SystemExt};
use reqwest::Client;
use serde::Deserialize;
use lettre::{Message, SmtpTransport, Transport};
use lettre::transport::smtp::authentication::Credentials;
use ring::signature::{Ed25519KeyPair, KeyPair, Signature, ED25519};
use ring::rand::SystemRandom;

async fn get_modules() -> impl Responder {
    let modules = vec![
        "config",
        "crypto",
        "federated_sharing",
        "privacy",
        "orchestration",
        "compliance",
        "integration",
        "utils",
    ];
    web::Json(modules)
}

async fn monitor_server() -> impl Responder {
    let mut sys = System::new_all();
    sys.refresh_all();

    let server_info = format!(
        "System name: {:?}\nTotal memory: {:?}\nUsed memory: {:?}\nAvailable memory: {:?}",
        sys.name(),
        sys.total_memory(),
        sys.used_memory(),
        sys.available_memory()
    );

    web::Json(server_info)
}

#[derive(Deserialize)]
struct Instance {
    id: String,
    status: String,
}

async fn manage_cloud() -> impl Responder {
    let client = Client::new();
    let response = client
        .get("https://api.cloudprovider.com/instances")
        .header("Authorization", "Bearer YOUR_TOKEN")
        .send()
        .await
        .expect("Failed to send request")
        .json::<Vec<Instance>>()
        .await
        .expect("Failed to parse response");

    web::Json(response)
}

async fn send_alert() -> impl Responder {
    let email = Message::builder()
        .from("noreply@example.com".parse().unwrap())
        .to("recipient@example.com".parse().unwrap())
        .subject("Alert: Threat Detected")
        .body("A threat has been detected in your system.".to_string())
        .unwrap();

    let creds = Credentials::new("smtp_username".to_string(), "smtp_password".to_string());

    let mailer = SmtpTransport::relay("smtp.example.com")
        .unwrap()
        .credentials(creds)
        .build();

    match mailer.send(&email) {
        Ok(_) => web::Json("Email sent successfully!"),
        Err(e) => web::Json(format!("Could not send email: {:?}", e)),
    }
}

async fn secure_data_exchange() -> impl Responder {
    let rng = SystemRandom::new();
    let key_pair = Ed25519KeyPair::generate_pkcs8(&rng).unwrap();
    let key_pair = Ed25519KeyPair::from_pkcs8(key_pair.as_ref()).unwrap();

    let message = b"secure message";
    let signature = key_pair.sign(message);

    let verification_result = key_pair.public_key().verify(message, signature.as_ref()).is_ok();

    web::Json(format!("Verification result: {}", verification_result))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(Cors::permissive())
            .route("/modules", web::get().to(get_modules))
            .route("/monitor_server", web::get().to(monitor_server))
            .route("/manage_cloud", web::get().to(manage_cloud))
            .route("/send_alert", web::get().to(send_alert))
            .route("/secure_data_exchange", web::get().to(secure_data_exchange))
    })
    .bind("127.0.0.1:8082")?
    .run()
    .await
}
