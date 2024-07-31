const fetchActivity = async () => {
    try {
        const response = await fetch('http://localhost:3000/mainnet/activity?wallet_address=4UYjrT5hmMTh9pLFg1Mxh49besnAeCc23qFoZc6WnQkK&network=Solana');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
        document.getElementById('activity').innerHTML = `Failed to retrieve data: ${error.message}`;
    }
};
