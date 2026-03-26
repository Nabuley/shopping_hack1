export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'POST request only.' });
    }

    const { item, price } = req.body;

    if (price > 0 && price <= 100) {
        return res.status(200).json({ 
            message: `🎉 Success! You purchased ${item} for ${price}$. FLAG: {HTML_BYPASS_KING}` 
        });
    }

    if (price >= 1000000) {
        return res.status(200).json({ message: `Purchase completed for normal price of ${price}.` });
    }

    return res.status(400).json({ message: `Payment failed: ${price} is too low.` });
}
