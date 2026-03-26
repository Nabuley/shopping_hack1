export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'POST 요청만 가능합니다.' });
    }

    const { item, price } = req.body;

    if (price > 0 && price <= 100) {
        return res.status(200).json({ 
            message: `🎉 성공! ${item}을(를) ${price}원에 구매했습니다. FLAG: {HTML_BYPASS_KING}` 
        });
    }

    if (price >= 1000000) {
        return res.status(200).json({ message: `정상가 ${price}원에 구매 완료.` });
    }

    return res.status(400).json({ message: `결제 실패: ${price}원은 너무 낮습니다.` });
}