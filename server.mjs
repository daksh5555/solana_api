import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors()); // This line enables CORS for all routes

// Simulated data
const simulatedData = {
    "status": "success",
    "message": "Activity retrieved successfully",
    "data": [
        {
            "uuid": "6a215905-cbde-4ef5-afb9-0568dde32449",
            "network": "Solana",
            "fee": 5000,
            "compute_units_consumed": 150,
            "timestamp": "2024-07-23T09:29:14.000Z",
            "type": "send_token",
            "wallet_address": "4UYjrT5hmMTh9pLFg1Mxh49besnAeCc23qFoZc6WnQkK",
            "transaction_hash": "3ShMAXvJczacB1ALpBUdCAbx9FNdoMeAkurH2ePyLQ5t1HwYPi9iUdyn7rhoUogNzbsSdKkJWAZ16kbGSWWJfQTB",
            "metadata": {
                "amount": "-6000"
            },
            "token": {
                "uuid": "429031ba-fd82-4e95-92b2-9da0bf75f184",
                "network": "Solana",
                "contract_address": "So11111111111111111111111111111111111111112",
                "name": "Wrapped SOL",
                "symbol": "SOL",
                "decimals": 9,
                "display_decimals": 2,
                "logo_url": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
            },
            "explorer_url": "https://solscan.io/tx/3ShMAXvJczacB1ALpBUdCAbx9FNdoMeAkurH2ePyLQ5t1HwYPi9iUdyn7rhoUogNzbsSdKkJWAZ16kbGSWWJfQTB?cluster=mainnet-beta"
        },
        {
            "uuid": "654c556e-53b3-4e2c-acc6-50808a54a02a",
            "network": "Solana",
            "fee": 5000,
            "compute_units_consumed": 61750,
            "timestamp": "2024-07-23T09:29:14.000Z",
            "type": "send_token",
            "wallet_address": "4UYjrT5hmMTh9pLFg1Mxh49besnAeCc23qFoZc6WnQkK",
            "transaction_hash": ["5DKiTMqzcYnJapS8JJPkGaCrWUbP7FayC5oyh3v4UHGgv1wX6zN5PfErEDfAneVB5CLAbH1oxykdSPMz2juJALwh"],
            "metadata": {
                "amount": "167162"
            },
            "token": {
                "uuid": "9206afe0-7365-4f2f-a93a-f8d023a46d27",
                "network": "Solana",
                "contract_address": "7atgF8KQo4wJrD5ATGX7t1V2zVvykPJbFfNeVf1icFv1",
                "name": "catwifhat",
                "symbol": "$CWIF",
                "decimals": 2,
                "display_decimals": 2,
                "logo_url": ""
            },
            "explorer_url": "https://solscan.io/tx/5DKiTMqzcYnJapS8JJPkGaCrWUbP7FayC5oyh3v4UHGgv1wX6zN5PfErEDfAneVB5CLAbH1oxykdSPMz2juJALwh?cluster=mainnet-beta"
        },
        {
            "uuid": "af603ee9-8c78-4f21-a870-6252d9d53b23",
            "network": "Solana",
            "fee": 5000,
            "compute_units_consumed": 150,
            "timestamp": "2024-07-23T06:36:59.000Z",
            "type": "send_token",
            "wallet_address": "4UYjrT5hmMTh9pLFg1Mxh49besnAeCc23qFoZc6WnQkK",
            "transaction_hash": "3AQfoPFkEPAWEADmgYPDiqGPNYcNDyHarjkz7EAdpaE3mfxvqUJAvVJL3brETkBkkyAcVnnPsBAmECfJG9n1pANJ",
            "metadata": {
                "amount": "-10000"
            },
            "token": {
                "uuid": "49afe645-a62f-44c7-85b0-d73567cb7a3a",
                "network": "Solana",
                "contract_address": "So11111111111111111111111111111111111111112",
                "name": "Wrapped SOL",
                "symbol": "SOL",
                "decimals": 9,
                "display_decimals": 2,
                "logo_url": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
            },
            "explorer_url": "https://solscan.io/tx/3AQfoPFkEPAWEADmgYPDiqGPNYcNDyHarjkz7EAdpaE3mfxvqUJAvVJL3brETkBkkyAcVnnPsBAmECfJG9n1pANJ?cluster=mainnet-beta"
        }
    ]
};

app.get('/mainnet/activity', (req, res) => {
  console.log(`Received request at /mainnet/activity`);
  res.json(simulatedData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
