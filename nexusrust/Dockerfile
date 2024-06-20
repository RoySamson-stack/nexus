# Start from the official Rust image
FROM rust:latest

# Create a new directory for the application
WORKDIR /app

# Copy the Cargo.toml and Cargo.lock files
COPY Cargo.toml Cargo.lock ./

# Create a dummy main.rs file to build dependencies
RUN mkdir src
RUN echo "fn main() {}" > src/main.rs

# Build dependencies
RUN cargo build --release
RUN rm -rf src

# Copy the source code
COPY . .

# Build the application
RUN cargo build --release

# Expose the application port
EXPOSE 8082

# Run the application
CMD ["./target/release/nexusrust"]
