use actix_cors::Cors;
use actix_web::{web, App, HttpServer, Responder};

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

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(Cors::permissive())
            .route("/modules", web::get().to(get_modules))
    })
    .bind("127.0.0.1:8082")?
    .run()
    .await
}
