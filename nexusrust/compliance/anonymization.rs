use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
struct SensitiveData {
    #[serde(rename = "id", skip_serializing)]
    id: String,
    value: String,
}

pub fn anonymize_data(data: &SensitiveData) -> String {
    serde_json::to_string(&data).unwrap()
}
