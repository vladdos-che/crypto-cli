# Crypto CLI

A simple and efficient command-line interface (CLI) application built with Node.js. This tool fetches real-time cryptocurrency market data for the top 5 coins (vs USD) using the public [CoinGecko API](https://www.coingecko.com/en/api).

## Features

- 💰 **Real-time Prices:** Fetches current market data for top cryptocurrencies.
- 📊 **Formatted Output:** Displays data in a clean console table (Rank, Name, Price).
- 🚀 **Zero Dependencies:** Built using native Node.js features (`fetch`) without external libraries.
- ⚡ **Simple Architecture:** Single-file logic using CommonJS.

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 18 or higher is required for native `fetch` support).

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd crypto-cli
   ```

2. **Initialize:**
   Although there are no external dependencies, it's good practice to ensure the environment is ready:
   ```bash
   npm install
   ```

## Usage

Run the application using Node.js to see the top 5 cryptocurrencies.

**Syntax:**
```bash
node index.js
```

**Output:**
The application will print a formatted table in the console containing:
- `rank`: Market capitalization rank.
- `name`: Cryptocurrency name.
- `price`: Current price in USD.

## Project Structure

```text
crypto-cli/
├── .gitattributes      # Git configuration
├── .gitignore          # Files to ignore in Git
├── index.js            # Main logic for fetching and displaying data
├── LICENSE             # MIT License
└── package.json        # Project metadata
```

## License

This project is open-source and available under the [MIT License](LICENSE).

Copyright (c) 2025 vladdos-che