const quotes = [
    {
        quote: "왜 굳이 의미를 찾으려 하는거? 인생은 욕망이지 의미가 아니다.",
        author: "찰리 채플린"
    },
    {
        quote: "나 자신에 대한 자신감을 잃으면 온세상이 나의 적이 된다.",
        author: "랄프 왈도 에머슨"
    },
    {
        quote: "인생을 다시 산다면, 다음번에는 더 많은 실수를 저지르리라",
        author: "나딘 스테어"
    },
    {
        quote: "남들은 당신에 대해 많이 생각하지 않는다.",
        author: "엘체노어 루즈벨트"
    },
    {
        quote: "다른 사람을 설득하는 가장 좋은 도구는 우리의 귀, 즉 상대의 말에 먼저 귀를 기울리는 것이다.",
        author: "단 러스크"
    },
    {
        quote: "인생이란 용기에 따라서 펴질수도 있고 움츠려 들 수도 있다.",
        author: "어네이스 닌"
    },
    {
        quote: "오늘의 식사는 내일로 미루지 않으면서 오늘 할 일을 내일로 미루는 사람이 많다.",
        author: "C.힐티"
    },
    {
        quote: "가장 큰 약점은 약점을 보일 것에 대한 두려움이다.",
        author: "보쉬에"
    },
    {
        quote: "문제는 목적지에 얼마나 빨리 가느냐가 아니라 그목적지가 어디냐는 것이다.",
        author: "에미벨 뉴컴버"
    }

];

const todayQuote = quotes[Math.round(Math.random() * (quotes.length - 1))];

const quote = document.querySelector(`.quote p`);
const author = document.querySelector(`.quote h6`);

quote.innerHTML = todayQuote.quote;
author.innerHTML = ` - ${todayQuote.author} - `;