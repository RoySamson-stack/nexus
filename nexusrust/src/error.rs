use std::fmt;

#[derive(Debug)]
pub enum SecureCloudError {
    NetworkError(String),
    CryptoError(String),
}

impl fmt::Display for SecureCloudError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            SecureCloudError::NetworkError(err) => write!(f, "Network Error: {}", err),
            SecureCloudError::CryptoError(err) => write!(f, "Crypto Error: {}", err),
        }
    }
}

impl From<reqwest::Error> for SecureCloudError {
    fn from(err: reqwest::Error) -> SecureCloudError {
        SecureCloudError::NetworkError(err.to_string())
    }
}
