import fetch from 'node-fetch';
const getActivity = async () => {
  try {
    const response = await fetch('http://localhost:3000/mainnet/activity?wallet_address=4UYjrT5hmMTh9pLFg1Mxh49besnAeCc23qFoZc6WnQkK&network=Solana');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      status: 'error',
      message: 'Failed to retrieve activity data',
      data: []
    };
  }
};

const main = async () => {
  const result = await getActivity();
  console.log(JSON.stringify(result, null, 2));
};

main();