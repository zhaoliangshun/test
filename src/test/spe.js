import BoxContainer from './common';


const data = {
    en: {
        s1: 'Bets of Match Specials are settled on the full time result of play time, excluding extra time and penalty shootout.',
        s2: 'In respect of Fixed Odds Football Bets, the Dividend on each winning Football Bet shall be rounded up or rounded down to the nearest 10 cents.',
        s3: 'Predict which event will first happen to a designated player in a specific match, for instance:',
        a1: [
            'Receive a Yellow card',
            'Receive a Red card',
            'Score a Goal (excluding own goals)',
            'Be substituted',
            'None of the above',
        ],
        remarks: 'Remarks',
        a2: [
            'If a designed player starts on the bench or does not take part in the match, relevant bets will all be refunded.',
            '"Be substituted" means a player on the pitch is taken off and is officially replaced by another player.',
        ],
        s5: 'Example: South Africa vs Brazil',
        s6: 'Question: Which event will happen to NEYMAR da Silva (Brazil) first?',
        s7: 'Predict the total number of Goals (excluding own goals) scored by a designated player. There are 4 selections in total including: No goal, 1 goal, 2 goals and 3 goals or more.',
        a3: [
            'If a designed player starts on the bench or does not take part in the match, relevant bets will all be refunded.',
        ],
        s8: 'Example: South Africa vs Brazil',
        s9: 'Question: How many goal(s) will NEYMAR da Silva (Brazil) score?',
        s10: 'Tournament Specials are presented in format of question with two selections, "1. Yes" and "2. No".',
        s11: 'Predict whether a particular team will be promoted to a specific tournament at the end of the season.',
        s12: 'Please refer to the Stats Centre for respective competition formats.',
        s13: 'Question: Will Aston Villa be promoted to play in Eng Premier in season 2019-20?',
        s14: 'Predict whether a particular team will be relegated to a specific tournament at the end of the season.',
        // s15: '各比賽的詳細賽制, 請參考數據中心。',
        s16: 'Question: Will Southampton be relegated to play in Eng Championship in season 2018 to 19?',
        s17: 'Predict whether a particular team will finish last in a specific tournament at the end of the season.',
        // s18: '各比賽的詳細賽制, 請參考數據中心。',
        s19: 'Question: Will Sunderland finish last in Eng Premier in season 2016 to 2017?',
        s20: 'Predict whether a particular team will qualify for participation in a specific tournament.',
        // s21: '各比賽的詳細賽制, 請參考數據中心。',
        s22: 'Question: Will AC Milan qualify to play in UE Cup in season 2017 to 2018?',
        t1: 'First to happen',
        t2: 'Player Total Goals',
        t3: 'Promotion',
        t4: 'Relegation',
        t5: 'To Finish Last',
        t6: 'Qualification',
    },
    ch: {
        s1: '球賽特別項目的派彩是根據法定比賽時間的全場賽果為準，不包括加時或互射12碼後的賽果。',
        s2: '就固定賠率足球投注而言，對每一勝出足球投注的彩金將計算至最接近的對上或對下的一角款額。',
        s3: '投注哪一項事件會首先發生在指定球員身上，例如:',
        a1: ['被罰黃牌', '被罰紅牌', '入球(不包括烏龍球)', '被換出', '上述事件沒有發生'],
        remarks: '備註',
        a2: [
            '如指定球員以正選身份參與賽事 ── 投注有效',
            '如指定球員沒有於法定時間參與賽事或在球賽開球後才上場比賽(即以後備身份參與賽事) ── 投注可獲退款',
            '被換出: 指定球員曾於法定時間參與賽事, 經球證確認後被其他隊員入替。',
        ],
        s5: '假設球賽：南非 對 巴西',
        s6: '問題：那一件事會首先發生在尼馬(巴西)身上?',
        s7: '投注指定球員在一場球賽取得的入球總數(不包括烏龍球)，設有4個選項，包括：無入球、1球、2球及3球或以上。',
        a3: [
            '如指定球員以正選身份參與賽事 ── 投注有效',
            '如指定球員沒有於法定時間參與賽事或在球賽開球後才上場比賽(即以後備身份參與賽事) ── 投注可獲退款',
        ],
        s8: '假設球賽：南非 對 巴西',
        s9: '問題：尼馬(巴西)會取得多少個入球?',
        s10: '賽事特別項目以問題形式出現，只需選擇 「1. 會」 或 「2. 否」。',
        s11: '在指定賽事，投注指定球隊會否在來季升班。',
        s12: '各比賽的詳細賽制, 請參考數據中心。',
        s13: '假設問題：阿士東維拉 本季會否升班及於2019-20球季在英格蘭超級聯賽作賽?',
        s14: '在指定賽事，投注指定球隊會否在來季降班。',
        // s15: '各比賽的詳細賽制, 請參考數據中心。',
        s16: '假設問題：修咸頓會否於2018至19球季降班至英格蘭冠軍聯賽?',
        s17: '在指定賽事，投注指定球隊會否在指定球季結束後排名最後。',
        // s18: '各比賽的詳細賽制, 請參考數據中心。',
        s19: '假設問題：新特蘭會否於2016至2017球季英格蘭超級聯賽排名最低?',
        s20: '在指定賽事，投注指定球隊會否獲指定賽事的參賽資格。',
        // s21: '各比賽的詳細賽制, 請參考數據中心。',
        s22: '假設問題：AC米蘭會否於2017至18球季獲歐霸盃參賽資格?',
        t1: '先發事件',
        t2: '球員總入球',
        t3: '升班球隊',
        t4: '降班球隊',
        t5: '排名最後球隊',
        t6: '參賽資格',
    },
};


export default ({ lang = 'en' }) => {
    const d = data[lang];
    return (
        <>
            <div className="spe">
                <p>{d.s1}</p>
                <p>{d.s1}</p>
            </div>
            <BoxContainer>111</BoxContainer>
        </>
    );
};
