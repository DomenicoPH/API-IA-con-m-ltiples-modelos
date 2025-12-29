# api-ai

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
bun start
```

This project was created using `bun init` in bun v1.3.5. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## DEV dependencies  

    bun add @cerebras/cerebras_cloud_sdk groq-sdk


## Test

    curl -X POST http://localhost:5000/chat -H "Content-Type: application/json" -d "{\"messages\":[{\"role\":\"user\",\"content\":\"10 canciones populares de los 80s\"}]}"
