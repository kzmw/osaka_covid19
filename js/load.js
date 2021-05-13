window.onload = function() {
    var data = {
        "subject": [{
                "tt_num": "G0052",
                "name": "フィールドワークで地域に学ぶ",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0052.html"
            },
            {
                "tt_num": "G0002",
                "name": "ＥＳＤ-ＳＤＧｓ基礎論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0002.html"
            },
            {
                "tt_num": "G0041",
                "name": "戦後東アジアの残留日本人",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0041.html"
            },
            {
                "tt_num": "G0011",
                "name": "ＥＳＤ-ＳＤＧｓ基礎論",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0011.html"
            },
            {
                "tt_num": "G0040",
                "name": "ESDと生活科・総合的な学習の時間",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0040.html"
            },
            {
                "tt_num": "G0030",
                "name": "人権と教育",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0030.html"
            },
            {
                "tt_num": "G0036",
                "name": "探す・作る・伝えるアート",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0036.html"
            },
            {
                "tt_num": "G0003",
                "name": "ＥＳＤ概論",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0003.html"
            },
            {
                "tt_num": "G0042",
                "name": "仮名書道と実用書",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0042.html"
            },
            {
                "tt_num": "G0044",
                "name": "奈良と文学",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0044.html"
            },
            {
                "tt_num": "G8501",
                "name": "大学で学び直す「高校世界史」",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8501.html"
            },
            {
                "tt_num": "G0004",
                "name": "ＥＳＤ概論",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0004.html"
            },
            {
                "tt_num": "G0005",
                "name": "ＥＳＤと世界遺産",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0005.html"
            },
            {
                "tt_num": "G0009",
                "name": "「日の丸・君が代問題」の歴史的考察",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0009.html"
            },
            {
                "tt_num": "G0097",
                "name": "古典文学再入門　『竹取物語』を読み直す",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0097.html"
            },
            {
                "tt_num": "G0078",
                "name": "科学技術の歴史と身の回りの物質",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0078.html"
            },
            {
                "tt_num": "G0028",
                "name": "母と子の健康科学",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0028.html"
            },
            {
                "tt_num": "G0037",
                "name": "コミュニケーションワークショップ",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中山 留美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0037.html"
            },
            {
                "tt_num": "G0060",
                "name": "先端科学の基礎概念",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0060.html"
            },
            {
                "tt_num": "G0043",
                "name": "考古学と自然科学",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0043.html"
            },
            {
                "tt_num": "G0031",
                "name": "健康とライフスタイル",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "辻井 啓之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0031.html"
            },
            {
                "tt_num": "G0077",
                "name": "運動と健康",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0077.html"
            },
            {
                "tt_num": "G0072",
                "name": "数理の世界",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "高橋 亮",
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0072.html"
            },
            {
                "tt_num": "G0063",
                "name": "Science lesson in English",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "森本 弘一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0063.html"
            },
            {
                "tt_num": "G0038",
                "name": "サバイバルロジカルシンキング",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "中村 元彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0038.html"
            },
            {
                "tt_num": "G0080",
                "name": "キャリア形成と人権",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0080.html"
            },
            {
                "tt_num": "G0006",
                "name": "教師のための多様性理解",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "生田 周二",
                    "越野 和之",
                    "今 正秀",
                    "吉村 雅仁",
                    "河崎 智恵",
                    "和泉元 千春",
                    "橋崎 頼子",
                    "前田 康二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0006.html"
            },
            {
                "tt_num": "G0007",
                "name": "奈良と教育　-ここはどこ？　私はだれ？-",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "赤沢 早人",
                    "西村 拓生"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0007.html"
            },
            {
                "tt_num": "G8503",
                "name": "ESDと学校教育",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8503.html"
            },
            {
                "tt_num": "G0010",
                "name": "教職へのキャリアデザイン",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "阪東 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0010.html"
            },
            {
                "tt_num": "G8502",
                "name": "教師力ケースメソッド",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "柿本 篤子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8502.html"
            },
            {
                "tt_num": "G0106",
                "name": "英語Ａ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0106.html"
            },
            {
                "tt_num": "G0110",
                "name": "英語Ｂ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0110.html"
            },
            {
                "tt_num": "G0114",
                "name": "英語Ｃ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0114.html"
            },
            {
                "tt_num": "G0116",
                "name": "英語Ｅ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "藤岡 住恵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0116.html"
            },
            {
                "tt_num": "G0119",
                "name": "英語Ｄ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0119.html"
            },
            {
                "tt_num": "G0300",
                "name": "日本語Ⅰ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0300.html"
            },
            {
                "tt_num": "G0302",
                "name": "日本語Ⅱ",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "湯通堂 誠"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0302.html"
            },
            {
                "tt_num": "G0101",
                "name": "英語Ｈ",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "徳永 和博"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0101.html"
            },
            {
                "tt_num": "G0104",
                "name": "英語Ｇ",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0104.html"
            },
            {
                "tt_num": "G0107",
                "name": "英語Ｆ",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "竹澤 由記子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0107.html"
            },
            {
                "tt_num": "G0112",
                "name": "英語Ｉ",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "山本 修"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0112.html"
            },
            {
                "tt_num": "G0108",
                "name": "英語Ａ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0108.html"
            },
            {
                "tt_num": "G0111",
                "name": "英語Ｂ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0111.html"
            },
            {
                "tt_num": "G0115",
                "name": "英語Ｃ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0115.html"
            },
            {
                "tt_num": "G0117",
                "name": "英語Ｅ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "藤岡 住恵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0117.html"
            },
            {
                "tt_num": "G0120",
                "name": "英語Ｄ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0120.html"
            },
            {
                "tt_num": "G0301",
                "name": "日本語Ⅰ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0301.html"
            },
            {
                "tt_num": "G0303",
                "name": "日本語Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "湯通堂 誠"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0303.html"
            },
            {
                "tt_num": "G0105",
                "name": "英語Ｇ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0105.html"
            },
            {
                "tt_num": "G0109",
                "name": "英語Ｆ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "竹澤 由記子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0109.html"
            },
            {
                "tt_num": "G0113",
                "name": "英語Ｉ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "山本 修"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0113.html"
            },
            {
                "tt_num": "G0153",
                "name": "英語Ｈ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "徳永 和博"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0153.html"
            },
            {
                "tt_num": "G0121",
                "name": "独語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "田島 昭洋"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0121.html"
            },
            {
                "tt_num": "G0125",
                "name": "仏語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "岩村 和泉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0125.html"
            },
            {
                "tt_num": "G0127",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "荊 明月"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0127.html"
            },
            {
                "tt_num": "G0133",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "趙 杰"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0133.html"
            },
            {
                "tt_num": "G0135",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "楊 莉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0135.html"
            },
            {
                "tt_num": "G0160",
                "name": "韓国語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "丹原 邦博"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0160.html"
            },
            {
                "tt_num": "G0122",
                "name": "独語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "田島 昭洋"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0122.html"
            },
            {
                "tt_num": "G0128",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "楊 莉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0128.html"
            },
            {
                "tt_num": "G0134",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0134.html"
            },
            {
                "tt_num": "G0145",
                "name": "仏語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "阪村 圭英子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0145.html"
            },
            {
                "tt_num": "G0161",
                "name": "韓国語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "丹原 邦博"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0161.html"
            },
            {
                "tt_num": "G0600",
                "name": "体育実技Ⅰ（種目分け以前）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "松井 良明",
                    "竹村 匡弥",
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0600.html"
            },
            {
                "tt_num": "G0613",
                "name": "体育実技Ⅰ（運動場）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "松井 良明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0613.html"
            },
            {
                "tt_num": "G0614",
                "name": "体育実技Ⅰ（バドミントン）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "竹村 匡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0614.html"
            },
            {
                "tt_num": "G0615",
                "name": "体育実技Ⅰ（テニス）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0615.html"
            },
            {
                "tt_num": "G0621",
                "name": "体育実技Ⅰ（アクティブフイットネス）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0621.html"
            },
            {
                "tt_num": "G0601",
                "name": "体育実技Ⅱ（種目分け以前）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "松井 良明",
                    "竹村 匡弥",
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0601.html"
            },
            {
                "tt_num": "G0617",
                "name": "体育実技Ⅱ（運動場）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "松井 良明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0617.html"
            },
            {
                "tt_num": "G0618",
                "name": "体育実技Ⅱ（バドミントン）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "竹村 匡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0618.html"
            },
            {
                "tt_num": "G0619",
                "name": "体育実技Ⅱ（テニス）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0619.html"
            },
            {
                "tt_num": "G0622",
                "name": "体育実技Ⅱ（アクティブフィットネス）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0622.html"
            },
            {
                "tt_num": "G0602",
                "name": "体育実技Ⅰ（種目分け以前）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "立 正伸",
                    "井上 洋一",
                    "吉田 寿",
                    "髙木 祐介"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0602.html"
            },
            {
                "tt_num": "G0604",
                "name": "体育実技Ⅰ（バドミントン）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0604.html"
            },
            {
                "tt_num": "G0605",
                "name": "体育実技Ⅰ（テニス）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "井上 洋一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0605.html"
            },
            {
                "tt_num": "G0606",
                "name": "体育実技Ⅰ（アクティブフィットネス）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "吉田 寿"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0606.html"
            },
            {
                "tt_num": "G0607",
                "name": "体育実技Ⅰ（運動場）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0607.html"
            },
            {
                "tt_num": "G0603",
                "name": "体育実技Ⅱ（種目分け以前）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立 正伸",
                    "吉田 寿",
                    "髙木 祐介",
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0603.html"
            },
            {
                "tt_num": "G0608",
                "name": "体育実技Ⅱ（バドミントン）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0608.html"
            },
            {
                "tt_num": "G0609",
                "name": "体育実技Ⅱ（運動場）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0609.html"
            },
            {
                "tt_num": "G0610",
                "name": "体育実技Ⅱ（アクティブフィットネス）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "吉田 寿"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0610.html"
            },
            {
                "tt_num": "G0611",
                "name": "体育実技Ⅱ（テニス）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0611.html"
            },
            {
                "tt_num": "G0505",
                "name": "情報機器の操作",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0505.html"
            },
            {
                "tt_num": "G0502",
                "name": "情報機器の操作",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0502.html"
            },
            {
                "tt_num": "G0501",
                "name": "情報機器の操作",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0501.html"
            },
            {
                "tt_num": "G0503",
                "name": "情報機器の操作",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "伊藤 直治",
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0503.html"
            },
            {
                "tt_num": "G0400",
                "name": "日本国憲法",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0400.html"
            },
            {
                "tt_num": "G0401",
                "name": "日本国憲法",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0401.html"
            },
            {
                "tt_num": "G0210",
                "name": "外国語コミュニケーション（英語）Ｂ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0210.html"
            },
            {
                "tt_num": "G0214",
                "name": "外国語コミュニケーション（英語）Ｃ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0214.html"
            },
            {
                "tt_num": "G0216",
                "name": "外国語コミュニケーション（英語）Ｅ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0216.html"
            },
            {
                "tt_num": "G0219",
                "name": "外国語コミュニケーション（英語）Ｄ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "藤岡 住恵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0219.html"
            },
            {
                "tt_num": "G0223",
                "name": "外国語コミュニケーション（英語）Ａ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0223.html"
            },
            {
                "tt_num": "G0200",
                "name": "外国語コミュニケーション（英語）Ｊ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "徳永 和博"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0200.html"
            },
            {
                "tt_num": "G0201",
                "name": "外国語コミュニケーション（英語）Ｇ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0201.html"
            },
            {
                "tt_num": "G0202",
                "name": "外国語コミュニケーション（英語）Ｋ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0202.html"
            },
            {
                "tt_num": "G0204",
                "name": "外国語コミュニケーション（英語）Ｈ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "竹澤 由記子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0204.html"
            },
            {
                "tt_num": "G0212",
                "name": "外国語コミュニケーション（英語）Ｉ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "山本 修"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0212.html"
            },
            {
                "tt_num": "G0129",
                "name": "外国語コミュニケーション（中国語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "荊 明月"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0129.html"
            },
            {
                "tt_num": "G0131",
                "name": "外国語コミュニケーション（中国語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "趙 杰"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0131.html"
            },
            {
                "tt_num": "G0137",
                "name": "外国語コミュニケーション（独語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "田島 昭洋"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0137.html"
            },
            {
                "tt_num": "G0147",
                "name": "外国語コミュニケーション（仏語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "岩村 和泉"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0147.html"
            },
            {
                "tt_num": "G0226",
                "name": "外国語コミュニケーション（韓国語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "井上 直樹"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0226.html"
            },
            {
                "tt_num": "G0211",
                "name": "外国語コミュニケーション（英語）Ｍ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0211.html"
            },
            {
                "tt_num": "G0215",
                "name": "外国語コミュニケーション（英語）Ｎ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0215.html"
            },
            {
                "tt_num": "G0217",
                "name": "外国語コミュニケーション（英語）Ｐ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0217.html"
            },
            {
                "tt_num": "G0220",
                "name": "外国語コミュニケーション（英語）Ｏ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "藤岡 住恵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0220.html"
            },
            {
                "tt_num": "G0224",
                "name": "外国語コミュニケーション（英語）Ｌ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0224.html"
            },
            {
                "tt_num": "G0203",
                "name": "外国語コミュニケーション（英語）Ｖ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0203.html"
            },
            {
                "tt_num": "G0205",
                "name": "外国語コミュニケーション（英語）Ｓ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "竹澤 由記子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0205.html"
            },
            {
                "tt_num": "G0213",
                "name": "外国語コミュニケーション（英語）Ｔ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "山本 修"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0213.html"
            },
            {
                "tt_num": "G0221",
                "name": "外国語コミュニケーション（英語）Ｒ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0221.html"
            },
            {
                "tt_num": "G0222",
                "name": "外国語コミュニケーション（英語）Ｕ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "徳永 和博"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0222.html"
            },
            {
                "tt_num": "G0130",
                "name": "外国語コミュニケーション（中国語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "荊 明月"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0130.html"
            },
            {
                "tt_num": "G0132",
                "name": "外国語コミュニケーション（中国語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "趙 杰"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0132.html"
            },
            {
                "tt_num": "G0140",
                "name": "外国語コミュニケーション（独語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "田島 昭洋"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0140.html"
            },
            {
                "tt_num": "G0146",
                "name": "外国語コミュニケーション（仏語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "岩村 和泉"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0146.html"
            },
            {
                "tt_num": "G0227",
                "name": "外国語コミュニケーション（韓国語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "井上 直樹"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0227.html"
            },
            {
                "tt_num": "G2222",
                "name": "特別支援教育論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "越野 和之",
                    "木下 理恵",
                    "富井 奈菜実",
                    "堀田 千絵",
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2222.html"
            },
            {
                "tt_num": "G2132",
                "name": "教育基礎論",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2132.html"
            },
            {
                "tt_num": "G2134",
                "name": "教育基礎論",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2134.html"
            },
            {
                "tt_num": "G2148",
                "name": "教育基礎論",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2148.html"
            },
            {
                "tt_num": "G2149",
                "name": "教育基礎論",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2149.html"
            },
            {
                "tt_num": "G2123",
                "name": "教育心理学",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2123.html"
            },
            {
                "tt_num": "G2153",
                "name": "教育心理学",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2153.html"
            },
            {
                "tt_num": "G2140",
                "name": "教育社会学",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2140.html"
            },
            {
                "tt_num": "G2157",
                "name": "教育経営行政論",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2157.html"
            },
            {
                "tt_num": "G2128",
                "name": "カリキュラム論A▲（カリキュラム論（初等））",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2128.html"
            },
            {
                "tt_num": "G2137",
                "name": "カリキュラム論B▲（カリキュラム論（中等））",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2137.html"
            },
            {
                "tt_num": "G2129",
                "name": "カリキュラム論B▲（カリキュラム論（中等））",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2129.html"
            },
            {
                "tt_num": "G2147",
                "name": "カリキュラム論A▲（カリキュラム論（初等））",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2147.html"
            },
            {
                "tt_num": "G2240",
                "name": "特別支援教育論",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "越野 和之",
                    "木下 理恵",
                    "富井 奈菜実",
                    "堀田 千絵",
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2240.html"
            },
            {
                "tt_num": "G2144",
                "name": "教育経営行政論",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2144.html"
            },
            {
                "tt_num": "G2158",
                "name": "教育社会学",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2158.html"
            },
            {
                "tt_num": "G2156",
                "name": "学習心理学",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2156.html"
            },
            {
                "tt_num": "G2220",
                "name": "現代教師論Ａ",
                "semester": "通年",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "橋崎 頼子",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "笠次 良爾",
                    "世良 啓太",
                    "山中 矢展",
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2220.html"
            },
            {
                "tt_num": "G2221",
                "name": "現代教師論Ｂ",
                "semester": "通年",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "石井 僚",
                    "石田 正樹",
                    "和田 穣隆",
                    "米倉 陽子",
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2221.html"
            },
            {
                "tt_num": "G2242",
                "name": "現代教師論Ｃ",
                "semester": "通年",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "横山 真貴子",
                    "大山 明彦",
                    "金原 正明",
                    "橋本 昭典",
                    "北條 美香代",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2242.html"
            },
            {
                "tt_num": "G2243",
                "name": "現代教師論Ｄ",
                "semester": "通年",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "堀田 千絵",
                    "太田 満",
                    "渡邉 伸一",
                    "豊田 宗児",
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2243.html"
            },
            {
                "tt_num": "G2220",
                "name": "現代教師論Ａ",
                "semester": "通年",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "橋崎 頼子",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "笠次 良爾",
                    "世良 啓太",
                    "山中 矢展",
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2220.html"
            },
            {
                "tt_num": "G2221",
                "name": "現代教師論Ｂ",
                "semester": "通年",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "石井 僚",
                    "石田 正樹",
                    "和田 穣隆",
                    "米倉 陽子",
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2221.html"
            },
            {
                "tt_num": "G2242",
                "name": "現代教師論Ｃ",
                "semester": "通年",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "横山 真貴子",
                    "大山 明彦",
                    "金原 正明",
                    "橋本 昭典",
                    "北條 美香代",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2242.html"
            },
            {
                "tt_num": "G2243",
                "name": "現代教師論Ｄ",
                "semester": "通年",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "堀田 千絵",
                    "太田 満",
                    "渡邉 伸一",
                    "豊田 宗児",
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2243.html"
            },
            {
                "tt_num": "G1568",
                "name": "生徒指導・キャリア教育★（生徒指導・教育相談ⅠA)",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "石井 僚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1568.html"
            },
            {
                "tt_num": "G1569",
                "name": "生徒指導・キャリア教育★（生徒指導・教育相談ⅠA)",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "中山 留美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1569.html"
            },
            {
                "tt_num": "G1564",
                "name": "教育方法論★（教育方法・メディアA)",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1564.html"
            },
            {
                "tt_num": "G1565",
                "name": "教育方法論★（教育方法・メディアB）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "柿本 篤子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1565.html"
            },
            {
                "tt_num": "G1570",
                "name": "生徒指導・キャリア教育★（生徒指導・教育相談ⅠB）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1570.html"
            },
            {
                "tt_num": "G1571",
                "name": "生徒指導・キャリア教育★（生徒指導・教育相談ⅠB）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "出口 拓彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1571.html"
            },
            {
                "tt_num": "G1566",
                "name": "教育方法論★（教育方法・メディアA)",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1566.html"
            },
            {
                "tt_num": "G1567",
                "name": "教育方法論★（教育方法・メディアB）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "柿本 篤子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1567.html"
            },
            {
                "tt_num": "G2020",
                "name": "道徳教育の理論と方法B▲（道徳教育の理論と方法（中等））",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2020.html"
            },
            {
                "tt_num": "G2130",
                "name": "道徳教育の理論と方法A▲（道徳教育の理論と方法（初等））",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2130.html"
            },
            {
                "tt_num": "G2143",
                "name": "★（特別活動の理論と方法B▲（特別活動の理論と方法（中等）））",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2143.html"
            },
            {
                "tt_num": "G2223",
                "name": "総合的な学習の時間の指導法",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2223.html"
            },
            {
                "tt_num": "G1572",
                "name": "教育相談・進路指導（キャリア・カウンセリングを含む。）★（生徒指導・教育相談ⅡＡ）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "粕谷 貴志"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1572.html"
            },
            {
                "tt_num": "G1573",
                "name": "教育相談・進路指導（キャリア・カウンセリングを含む。）★（生徒指導・教育相談ⅡＡ）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "市来 百合子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1573.html"
            },
            {
                "tt_num": "G2241",
                "name": "総合的な学習の時間の指導法",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2241.html"
            },
            {
                "tt_num": "G1574",
                "name": "教育相談・進路指導（キャリアカウンセリングを含む。））★（生徒指導・教育相談ⅡＢ）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "粕谷 貴志"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1574.html"
            },
            {
                "tt_num": "G2029",
                "name": "道徳教育の理論と方法B▲（道徳教育の理論と方法（中等））",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2029.html"
            },
            {
                "tt_num": "G2131",
                "name": "道徳教育の理論と方法A▲（道徳教育の理論と方法（初等））",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2131.html"
            },
            {
                "tt_num": "G2224",
                "name": "特別活動の理論と方法B",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2224.html"
            },
            {
                "tt_num": "G2237",
                "name": "特別活動の理論と方法A",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2237.html"
            },
            {
                "tt_num": "G2199",
                "name": "教職実践演習（幼小中高）〔教育学〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "橋崎 頼子",
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2199.html"
            },
            {
                "tt_num": "G2200",
                "name": "教職実践演習（幼小中高）〔心理〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "出口 拓彦",
                    "中山 留美子",
                    "石井 僚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2200.html"
            },
            {
                "tt_num": "G2201",
                "name": "教職実践演習（幼小中高）〔幼稚園〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2201.html"
            },
            {
                "tt_num": "G2202",
                "name": "教職実践演習（幼小中高）〔特別支援〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "越野 和之",
                    "木下 理恵",
                    "富井 奈菜実",
                    "中西 陽",
                    "堀田 千絵",
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2202.html"
            },
            {
                "tt_num": "G2203",
                "name": "教職実践演習（幼小中高）〔国語〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "棚橋 尚子",
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2203.html"
            },
            {
                "tt_num": "G2204",
                "name": "教職実践演習（幼小中高）〔社会〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "西田 慎",
                    "太田 満",
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2204.html"
            },
            {
                "tt_num": "G2205",
                "name": "教職実践演習（幼小中高）〔数学〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "伊藤 直治",
                    "高橋 亮",
                    "近藤 裕",
                    "高木 祥司",
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2205.html"
            },
            {
                "tt_num": "G2206",
                "name": "教職実践演習（幼小中高）〔理科〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "森本 弘一",
                    "金原 正明",
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2206.html"
            },
            {
                "tt_num": "G2207",
                "name": "教職実践演習（幼小中高）〔音楽〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "北條 美香代",
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2207.html"
            },
            {
                "tt_num": "G2208",
                "name": "教職実践演習（幼小中高）〔美術〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "宇田 秀士",
                    "竹内 晋平",
                    "大山 明彦",
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2208.html"
            },
            {
                "tt_num": "G2209",
                "name": "教職実践演習（幼小中高）〔保健体育〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "髙木 祐介",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2209.html"
            },
            {
                "tt_num": "G2210",
                "name": "教職実践演習（幼小中高）〔家庭〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "杉山 薫",
                    "中川 愛",
                    "立松 麻衣子",
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2210.html"
            },
            {
                "tt_num": "G2211",
                "name": "教職実践演習（幼小中高）〔技術〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "世良 啓太",
                    "薮 哲郎",
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2211.html"
            },
            {
                "tt_num": "G2212",
                "name": "教職実践演習（幼小中高）〔英語〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2212.html"
            },
            {
                "tt_num": "G2217",
                "name": "教職実践演習（幼小中高）〔大学院〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2217.html"
            },
            {
                "tt_num": "G2218",
                "name": "教職実践演習（幼小中高）〔書道〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "谷川 雅夫",
                    "豊田 宗児"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2218.html"
            },
            {
                "tt_num": "G0251",
                "name": "板書実践指導A",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "谷川 雅夫",
                    "赤沢 早人",
                    "福光 佐今",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0251.html"
            },
            {
                "tt_num": "G0252",
                "name": "板書実践指導B",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "豊田 宗児",
                    "赤沢 早人",
                    "福光 佐今",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0252.html"
            },
            {
                "tt_num": "G0253",
                "name": "板書実践指導C",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "福光 佐今",
                    "赤沢 早人",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0253.html"
            },
            {
                "tt_num": "G0254",
                "name": "板書実践指導D",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "北山 聡佳",
                    "赤沢 早人",
                    "福光 佐今",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0254.html"
            },
            {
                "tt_num": "G0255",
                "name": "板書実践指導A",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "谷川 雅夫",
                    "赤沢 早人",
                    "福光 佐今",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0255.html"
            },
            {
                "tt_num": "G0256",
                "name": "板書実践指導B",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "豊田 宗児",
                    "赤沢 早人",
                    "福光 佐今",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0256.html"
            },
            {
                "tt_num": "G0257",
                "name": "板書実践指導C",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "福光 佐今",
                    "赤沢 早人",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0257.html"
            },
            {
                "tt_num": "G0258",
                "name": "板書実践指導D",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "北山 聡佳",
                    "赤沢 早人",
                    "福光 佐今",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0258.html"
            },
            {
                "tt_num": "G2225",
                "name": "学校フィールド演習Ⅱ（学校インターンシップ）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "竹村 謙司",
                    "柿本 篤子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2225.html"
            },
            {
                "tt_num": "G1578",
                "name": "学校フィールド演習Ⅰ（学校体験活動）",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1578.html"
            },
            {
                "tt_num": "G1578",
                "name": "学校フィールド演習Ⅰ（学校体験活動）",
                "semester": "通年",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1578.html"
            },
            {
                "tt_num": "G2161",
                "name": "★（教職入門）",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2161.html"
            },
            {
                "tt_num": "G2135",
                "name": "★（現代教師論）",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2135.html"
            },
            {
                "tt_num": "G2145",
                "name": "★（特別活動の理論と方法A▲（特別活動の理論と方法（初等）））",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2145.html"
            },
            {
                "tt_num": "G1531",
                "name": "★（教育実践基礎演習）",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1531.html"
            },
            {
                "tt_num": "G2021",
                "name": "初等教科教育法（社会）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2021.html"
            },
            {
                "tt_num": "G2022",
                "name": "初等教科教育法（社会）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2022.html"
            },
            {
                "tt_num": "G2045",
                "name": "中等教科教育法Ⅲ（理科）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "山崎 祥子",
                    "松山 豊樹",
                    "片岡 佐知子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2045.html"
            },
            {
                "tt_num": "G3447",
                "name": "日本史研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3447.html"
            },
            {
                "tt_num": "G3455",
                "name": "西洋史研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3455.html"
            },
            {
                "tt_num": "G3484",
                "name": "産業地域論",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3484.html"
            },
            {
                "tt_num": "G4727",
                "name": "ピアノⅠ（Ｂ）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "奥田 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4727.html"
            },
            {
                "tt_num": "G4730",
                "name": "声楽Ⅰ（Ｘ）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4730.html"
            },
            {
                "tt_num": "G4753",
                "name": "演奏法Ⅰ（声楽）（Ｙ）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4753.html"
            },
            {
                "tt_num": "G4841",
                "name": "彩画",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4841.html"
            },
            {
                "tt_num": "G1537",
                "name": "小学校国語（書写を含む。）★（国語（書写を含む。）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "有馬 義貴",
                    "前田 広幸",
                    "日高 佳紀",
                    "橋本 昭典",
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1537.html"
            },
            {
                "tt_num": "G2032",
                "name": "中等教科教育法Ⅲ（数学）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2032.html"
            },
            {
                "tt_num": "G3517",
                "name": "経済学・社会学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3517.html"
            },
            {
                "tt_num": "G4767",
                "name": "演奏実習Ⅱ（Ａ）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4767.html"
            },
            {
                "tt_num": "G4866",
                "name": "彩色実技",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4866.html"
            },
            {
                "tt_num": "G4891",
                "name": "彩画",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4891.html"
            },
            {
                "tt_num": "G5021",
                "name": "仮名作品研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5021.html"
            },
            {
                "tt_num": "G5030",
                "name": "書道（書写を中心とする。）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5030.html"
            },
            {
                "tt_num": "G5305",
                "name": "スポーツトレーニング論（演習を含む。）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5305.html"
            },
            {
                "tt_num": "G5540",
                "name": "情報技術演習",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5540.html"
            },
            {
                "tt_num": "G5558",
                "name": "情報社会と法・倫理",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "伊藤 剛和",
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5558.html"
            },
            {
                "tt_num": "G5713",
                "name": "栄養生理学",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5713.html"
            },
            {
                "tt_num": "G5911",
                "name": "特別支援教育の行政と制度",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5911.html"
            },
            {
                "tt_num": "G6122",
                "name": "保育実践指導論",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "廣瀬 聡弥",
                    "横山 真貴子",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6122.html"
            },
            {
                "tt_num": "G6902",
                "name": "ものづくり学",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6902.html"
            },
            {
                "tt_num": "G1515",
                "name": "★（図画工作）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "新田 恭子",
                    "川北 成彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1515.html"
            },
            {
                "tt_num": "G1541",
                "name": "小学校生活",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1541.html"
            },
            {
                "tt_num": "G1547",
                "name": "小学校図画工作",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "川北 成彦",
                    "新田 恭子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1547.html"
            },
            {
                "tt_num": "G2024",
                "name": "中等教科教育法Ⅰ(社会・地歴)",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2024.html"
            },
            {
                "tt_num": "G2035",
                "name": "中等教科教育法Ⅳ（数学）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "近藤 裕"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2035.html"
            },
            {
                "tt_num": "G2106",
                "name": "中等教科教育法Ⅲ（家庭）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2106.html"
            },
            {
                "tt_num": "G2188",
                "name": "保育内容の指導法（言葉）★（幼児と言葉）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "横山 真貴子",
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2188.html"
            },
            {
                "tt_num": "G3059",
                "name": "日本文学特講",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "横山 恵理"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3059.html"
            },
            {
                "tt_num": "G3221",
                "name": "国際理解教育演習Ⅱ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "吉村 公宏"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3221.html"
            },
            {
                "tt_num": "G3273",
                "name": "英会話Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3273.html"
            },
            {
                "tt_num": "G3411",
                "name": "社会科教育研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3411.html"
            },
            {
                "tt_num": "G3433",
                "name": "日本史研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3433.html"
            },
            {
                "tt_num": "G3441",
                "name": "法学・政治学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3441.html"
            },
            {
                "tt_num": "G3452",
                "name": "西洋史研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3452.html"
            },
            {
                "tt_num": "G3511",
                "name": "経済学・社会学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3511.html"
            },
            {
                "tt_num": "G3522",
                "name": "地理学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "河本 大地",
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3522.html"
            },
            {
                "tt_num": "G3528",
                "name": "地理学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "河本 大地",
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3528.html"
            },
            {
                "tt_num": "G4122",
                "name": "生態学実験",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6",
                    "月7"
                ],
                "teacher": [
                    "松井 淳",
                    "辻野 亮",
                    "村松 大輔"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4122.html"
            },
            {
                "tt_num": "G4768",
                "name": "演奏実習Ⅱ（Ｂ）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4768.html"
            },
            {
                "tt_num": "G5032",
                "name": "行書法",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5032.html"
            },
            {
                "tt_num": "G5920",
                "name": "発達障害の心理学",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "中西 陽"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5920.html"
            },
            {
                "tt_num": "G5936",
                "name": "障害児保育",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "若林 隆泰"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5936.html"
            },
            {
                "tt_num": "G6500",
                "name": "日本語教授法特講",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6500.html"
            },
            {
                "tt_num": "G1540",
                "name": "小学校理科★（理科）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "森本 弘一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1540.html"
            },
            {
                "tt_num": "G1560",
                "name": "小学校理科★（理科）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1560.html"
            },
            {
                "tt_num": "G1562",
                "name": "初等教科教育法（英語）★（小学校外国語活動）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "兼重 昇"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1562.html"
            },
            {
                "tt_num": "G2182",
                "name": "子どもと言葉",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "横山 真貴子",
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2182.html"
            },
            {
                "tt_num": "G3415",
                "name": "社会科教育研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3415.html"
            },
            {
                "tt_num": "G3458",
                "name": "法学・政治学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3458.html"
            },
            {
                "tt_num": "G3523",
                "name": "地理学実験",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "根田 克彦",
                    "河本 大地"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3523.html"
            },
            {
                "tt_num": "G3742",
                "name": "代数構造Ⅱ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3742.html"
            },
            {
                "tt_num": "G4111",
                "name": "地質学実験",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "和田 穣隆"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4111.html"
            },
            {
                "tt_num": "G4738",
                "name": "声楽Ⅲ（Ｘ）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4738.html"
            },
            {
                "tt_num": "G4757",
                "name": "ピアノⅢ（Ｄ）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4757.html"
            },
            {
                "tt_num": "G4816",
                "name": "文化遺産記録保存演習Ⅱ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4816.html"
            },
            {
                "tt_num": "G5061",
                "name": "漢字条幅研究",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5061.html"
            },
            {
                "tt_num": "G5260",
                "name": "解剖生理学",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5260.html"
            },
            {
                "tt_num": "G5555",
                "name": "電気実験実習",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5555.html"
            },
            {
                "tt_num": "G5707",
                "name": "生活統計学",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5707.html"
            },
            {
                "tt_num": "G5931",
                "name": "肢体不自由教育方法",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "能勢 ゆかり"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5931.html"
            },
            {
                "tt_num": "G6223",
                "name": "教育方法学演習",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6223.html"
            },
            {
                "tt_num": "G6571",
                "name": "言語文化研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "吉村 公宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6571.html"
            },
            {
                "tt_num": "G1575",
                "name": "初等教科教育法（英語）★（小学校外国語活動）",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "兼重 昇"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1575.html"
            },
            {
                "tt_num": "G3057",
                "name": "国語科教育学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3057.html"
            },
            {
                "tt_num": "G3220",
                "name": "英作文Ⅰ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3220.html"
            },
            {
                "tt_num": "G3412",
                "name": "社会科教育研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3412.html"
            },
            {
                "tt_num": "G3741",
                "name": "代数基礎",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3741.html"
            },
            {
                "tt_num": "G3746",
                "name": "基礎数学（代数）",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "釣井 達也"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3746.html"
            },
            {
                "tt_num": "G4634",
                "name": "ピアノⅢ（Ｂ）",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "奥田 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4634.html"
            },
            {
                "tt_num": "G4638",
                "name": "ピアノⅢ（Ａ）",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4638.html"
            },
            {
                "tt_num": "G4645",
                "name": "日本音楽実習Ⅰ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "林 美音子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4645.html"
            },
            {
                "tt_num": "G4657",
                "name": "音楽理論",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "竹内 直"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4657.html"
            },
            {
                "tt_num": "G4830",
                "name": "彫刻Ⅲ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "前芝 武史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4830.html"
            },
            {
                "tt_num": "G5290",
                "name": "生涯スポーツ論",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5290.html"
            },
            {
                "tt_num": "G5734",
                "name": "食生活論",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5734.html"
            },
            {
                "tt_num": "G1561",
                "name": "小学校音楽Ⅰ★（音楽Ⅰ）",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "劉 麟玉",
                    "小笠原 真也",
                    "宮田 知絵",
                    "前田 則子",
                    "北條 美香代",
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1561.html"
            },
            {
                "tt_num": "G2039",
                "name": "初等教科教育法（生活）",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2039.html"
            },
            {
                "tt_num": "G2042",
                "name": "初等教科教育法（生活）",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "森本 弘一",
                    "太田 満",
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2042.html"
            },
            {
                "tt_num": "G3421",
                "name": "政治学",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "浅野 詠子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3421.html"
            },
            {
                "tt_num": "G5000",
                "name": "漢字造形論",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5000.html"
            },
            {
                "tt_num": "G5220",
                "name": "小児保健",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5220.html"
            },
            {
                "tt_num": "G6210",
                "name": "教育哲学・思想演習",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6210.html"
            },
            {
                "tt_num": "G1530",
                "name": "★（初等教科実践指導）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "竹内 晋平",
                    "宇田 秀士",
                    "前田 則子",
                    "高橋 豪仁",
                    "北條 美香代",
                    "立 正伸",
                    "劉 麟玉",
                    "井上 邦子",
                    "狩野 宏明",
                    "原山 健一",
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1530.html"
            },
            {
                "tt_num": "G2000",
                "name": "初等教科教育法（国語）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2000.html"
            },
            {
                "tt_num": "G2001",
                "name": "初等教科教育法（国語）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2001.html"
            },
            {
                "tt_num": "G3470",
                "name": "地理学概論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3470.html"
            },
            {
                "tt_num": "G3510",
                "name": "社会学",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3510.html"
            },
            {
                "tt_num": "G4241",
                "name": "理科教育概論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4241.html"
            },
            {
                "tt_num": "G4725",
                "name": "ピアノⅠ（Ｃ）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "奥田 敬子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4725.html"
            },
            {
                "tt_num": "G4813",
                "name": "彩色材料論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4813.html"
            },
            {
                "tt_num": "G5001",
                "name": "漢字作品研究Ⅰ",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5001.html"
            },
            {
                "tt_num": "G5012",
                "name": "書道史Ⅰ",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5012.html"
            },
            {
                "tt_num": "G5311",
                "name": "器械運動",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5311.html"
            },
            {
                "tt_num": "G5553",
                "name": "情報基礎",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5553.html"
            },
            {
                "tt_num": "G6102",
                "name": "幼年教育学特講",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6102.html"
            },
            {
                "tt_num": "G6917",
                "name": "子育て支援★（保育相談支援）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "残華 雅子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6917.html"
            },
            {
                "tt_num": "G1103",
                "name": "学校経営と学校図書館",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "渡邉 良枝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1103.html"
            },
            {
                "tt_num": "G2006",
                "name": "初等教科教育法（国語）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2006.html"
            },
            {
                "tt_num": "G2008",
                "name": "初等教科教育法（国語）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2008.html"
            },
            {
                "tt_num": "G2055",
                "name": "中等教科教育法Ⅲ（音楽）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "長谷川 真由"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2055.html"
            },
            {
                "tt_num": "G2091",
                "name": "中等教科教育法Ⅰ（技術）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2091.html"
            },
            {
                "tt_num": "G2192",
                "name": "保育内容総論★（保育内容研究）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "横山 真貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2192.html"
            },
            {
                "tt_num": "G3000",
                "name": "日本語学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "森 篤嗣"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3000.html"
            },
            {
                "tt_num": "G3020",
                "name": "近代文学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "日高 佳紀"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3020.html"
            },
            {
                "tt_num": "G3211",
                "name": "英米文学史Ⅰ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3211.html"
            },
            {
                "tt_num": "G4011",
                "name": "力学の世界",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "常田 琢"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4011.html"
            },
            {
                "tt_num": "G4021",
                "name": "文化遺産科学Ⅰ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4021.html"
            },
            {
                "tt_num": "G4820",
                "name": "美術教育特講Ⅱ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4820.html"
            },
            {
                "tt_num": "G5044",
                "name": "篆隷書法",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5044.html"
            },
            {
                "tt_num": "G5047",
                "name": "書道理論",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5047.html"
            },
            {
                "tt_num": "G5766",
                "name": "家庭電気・機械及び情報処理",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5766.html"
            },
            {
                "tt_num": "G5908",
                "name": "障害児教育の歴史",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5908.html"
            },
            {
                "tt_num": "G6270",
                "name": "心理学研究法",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "石井 僚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6270.html"
            },
            {
                "tt_num": "G6300",
                "name": "生涯教育計画特講Ⅱ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6300.html"
            },
            {
                "tt_num": "G6906",
                "name": "社会的養護",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6906.html"
            },
            {
                "tt_num": "G6970",
                "name": "発達障害の理解と対応",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "富井 奈菜実"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6970.html"
            },
            {
                "tt_num": "G1153",
                "name": "学校経営と学校図書館",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "渡邉 良枝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1153.html"
            },
            {
                "tt_num": "G2014",
                "name": "初等教科教育法（社会）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "西川 秀智"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2014.html"
            },
            {
                "tt_num": "G2017",
                "name": "初等教科教育法（社会）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2017.html"
            },
            {
                "tt_num": "G2066",
                "name": "中等教科教育法Ⅰ（美術）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2066.html"
            },
            {
                "tt_num": "G2070",
                "name": "中等教科教育法Ⅰ（書道）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2070.html"
            },
            {
                "tt_num": "G3041",
                "name": "日本語学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "前田 広幸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3041.html"
            },
            {
                "tt_num": "G3060",
                "name": "古典文学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3060.html"
            },
            {
                "tt_num": "G3280",
                "name": "実践英語表現研究",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3280.html"
            },
            {
                "tt_num": "G3405",
                "name": "哲学・倫理学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3405.html"
            },
            {
                "tt_num": "G3450",
                "name": "西洋史概説",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3450.html"
            },
            {
                "tt_num": "G4052",
                "name": "地球物理学実験",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8",
                    "火9"
                ],
                "teacher": [
                    "藤井 智康"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4052.html"
            },
            {
                "tt_num": "G4327",
                "name": "物理化学実験",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8",
                    "火9"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4327.html"
            },
            {
                "tt_num": "G4749",
                "name": "演奏法Ⅰ（声楽）（Ｚ）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4749.html"
            },
            {
                "tt_num": "G4752",
                "name": "演奏法Ⅰ（声楽）（Ｘ）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4752.html"
            },
            {
                "tt_num": "G5561",
                "name": "栽培実習",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5561.html"
            },
            {
                "tt_num": "G5752",
                "name": "地域生活論",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "立松 麻衣子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5752.html"
            },
            {
                "tt_num": "G5901",
                "name": "知的障害の医学",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5901.html"
            },
            {
                "tt_num": "G6242",
                "name": "教育経営学演習",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6242.html"
            },
            {
                "tt_num": "G6275",
                "name": "教育心理学特講",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "石井 僚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6275.html"
            },
            {
                "tt_num": "G6721",
                "name": "自然環境学",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "辻野 亮",
                    "村松 大輔"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6721.html"
            },
            {
                "tt_num": "G6820",
                "name": "教育人権アプローチ特講",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6820.html"
            },
            {
                "tt_num": "G6905",
                "name": "幼年教育総合研究（Ａ）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6905.html"
            },
            {
                "tt_num": "G6907",
                "name": "社会福祉論",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6907.html"
            },
            {
                "tt_num": "G6912",
                "name": "幼年教育総合研究（Ｂ）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6912.html"
            },
            {
                "tt_num": "G2193",
                "name": "保育の計画と評価★（保育課程論）",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2193.html"
            },
            {
                "tt_num": "G3251",
                "name": "英文法演習",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3251.html"
            },
            {
                "tt_num": "G3413",
                "name": "地域文化論",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3413.html"
            },
            {
                "tt_num": "G3712",
                "name": "情報数理基礎",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "伊藤 直治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3712.html"
            },
            {
                "tt_num": "G4110",
                "name": "地学概論Ⅰ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "和田 穣隆",
                    "信川 正順",
                    "藤井 智康"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4110.html"
            },
            {
                "tt_num": "G4520",
                "name": "民族音楽学",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4520.html"
            },
            {
                "tt_num": "G4541",
                "name": "合唱Ⅰ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4541.html"
            },
            {
                "tt_num": "G4542",
                "name": "合唱Ⅲ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4542.html"
            },
            {
                "tt_num": "G4812",
                "name": "デッサンⅠ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4812.html"
            },
            {
                "tt_num": "G4857",
                "name": "文化遺産芸術学演習Ⅱ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4857.html"
            },
            {
                "tt_num": "G5270",
                "name": "水泳",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5270.html"
            },
            {
                "tt_num": "G5700",
                "name": "家庭経営学",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "立松 麻衣子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5700.html"
            },
            {
                "tt_num": "G5961",
                "name": "発達障害と心理検査",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "中西 陽"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5961.html"
            },
            {
                "tt_num": "G6815",
                "name": "情報と職業",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6815.html"
            },
            {
                "tt_num": "G6915",
                "name": "幼年教育総合研究（Ｃ）",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "横山 真貴子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6915.html"
            },
            {
                "tt_num": "G1502",
                "name": "★（生活）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "辻野 亮",
                    "中谷 憲一",
                    "山本 素世",
                    "和田 穣隆",
                    "渡邉 伸一",
                    "箕作 和彦",
                    "村松 大輔"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1502.html"
            },
            {
                "tt_num": "G1543",
                "name": "小学校生活",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "辻野 亮",
                    "中谷 憲一",
                    "山本 素世",
                    "和田 穣隆",
                    "渡邉 伸一",
                    "箕作 和彦",
                    "村松 大輔"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1543.html"
            },
            {
                "tt_num": "G1549",
                "name": "小学校図画工作",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "原山 健一",
                    "狩野 宏明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1549.html"
            },
            {
                "tt_num": "G2010",
                "name": "中等教科教育法Ⅲ（英語）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2010.html"
            },
            {
                "tt_num": "G2046",
                "name": "中等教科教育法Ⅳ（理科）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "石田 正樹",
                    "信川 正順",
                    "和田 穣隆",
                    "藤井 智康",
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2046.html"
            },
            {
                "tt_num": "G3053",
                "name": "国語科教育学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3053.html"
            },
            {
                "tt_num": "G3431",
                "name": "古文書学演習",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3431.html"
            },
            {
                "tt_num": "G3490",
                "name": "日本近世・近代史",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "谷山 正道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3490.html"
            },
            {
                "tt_num": "G3706",
                "name": "計算機と暗号",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "多田 知正"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3706.html"
            },
            {
                "tt_num": "G4282",
                "name": "化学概論Ⅰ",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "山崎 祥子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4282.html"
            },
            {
                "tt_num": "G4748",
                "name": "声楽Ⅰ（Ｙ）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4748.html"
            },
            {
                "tt_num": "G5905",
                "name": "障害児医学演習",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5905.html"
            },
            {
                "tt_num": "G6200",
                "name": "教育史特講",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6200.html"
            },
            {
                "tt_num": "G6230",
                "name": "教育社会学演習",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6230.html"
            },
            {
                "tt_num": "G6520",
                "name": "比較文化論",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6520.html"
            },
            {
                "tt_num": "G1518",
                "name": "★（体育）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "立 正伸",
                    "井上 邦子",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1518.html"
            },
            {
                "tt_num": "G1553",
                "name": "小学校体育",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "立 正伸",
                    "井上 邦子",
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1553.html"
            },
            {
                "tt_num": "G1554",
                "name": "小学校体育",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "立 正伸",
                    "井上 邦子",
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1554.html"
            },
            {
                "tt_num": "G2044",
                "name": "初等教科教育法（理科）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "森本 弘一",
                    "信川 正順",
                    "高島 弘",
                    "山崎 祥子",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2044.html"
            },
            {
                "tt_num": "G2092",
                "name": "中等教科教育法Ⅰ（工業）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2092.html"
            },
            {
                "tt_num": "G2107",
                "name": "中等教科教育法Ⅰ（情報）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2107.html"
            },
            {
                "tt_num": "G3011",
                "name": "漢文学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3011.html"
            },
            {
                "tt_num": "G3061",
                "name": "日本文学概説Ⅰ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3061.html"
            },
            {
                "tt_num": "G3281",
                "name": "実践英語研究Ⅰ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3281.html"
            },
            {
                "tt_num": "G3432",
                "name": "日本史概説Ⅰ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3432.html"
            },
            {
                "tt_num": "G4230",
                "name": "無機化学",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "棚瀬 知明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4230.html"
            },
            {
                "tt_num": "G4743",
                "name": "声楽Ⅲ（Ｙ）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4743.html"
            },
            {
                "tt_num": "G4851",
                "name": "造形芸術学特講",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4851.html"
            },
            {
                "tt_num": "G5010",
                "name": "書論ゼミ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5010.html"
            },
            {
                "tt_num": "G5020",
                "name": "仮名書法論",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5020.html"
            },
            {
                "tt_num": "G5953",
                "name": "病弱児の医学と心理",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "辻井 啓之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5953.html"
            },
            {
                "tt_num": "G6201",
                "name": "教育史演習",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6201.html"
            },
            {
                "tt_num": "G6234",
                "name": "校外学習指導特講",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6234.html"
            },
            {
                "tt_num": "G6264",
                "name": "学校教育相談特講",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "市来 百合子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6264.html"
            },
            {
                "tt_num": "G6501",
                "name": "現代日本論",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6501.html"
            },
            {
                "tt_num": "G4010",
                "name": "理科教育演習★（理科教育演習Ⅰ）",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "常田 琢",
                    "石田 正樹",
                    "信川 正順",
                    "梶原 篤",
                    "山崎 祥子",
                    "松山 豊樹",
                    "森本 弘一",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "石井 俊行",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4010.html"
            },
            {
                "tt_num": "G4750",
                "name": "声楽Ⅲ（Ｚ）",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4750.html"
            },
            {
                "tt_num": "G4844",
                "name": "絵画理論特講",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4844.html"
            },
            {
                "tt_num": "G6523",
                "name": "比較言語文化論Ⅰ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6523.html"
            },
            {
                "tt_num": "G1000",
                "name": "博物館概論",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "荻野 裕子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1000.html"
            },
            {
                "tt_num": "G2052",
                "name": "中等教科教育法Ⅰ（音楽）",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2052.html"
            },
            {
                "tt_num": "G5210",
                "name": "球技（基礎）",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "井上 洋一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5210.html"
            },
            {
                "tt_num": "G1008",
                "name": "博物館経営論",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "巽 善信"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1008.html"
            },
            {
                "tt_num": "G2003",
                "name": "中等教科教育法Ⅲ（国語）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "有馬 義貴",
                    "日高 佳紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2003.html"
            },
            {
                "tt_num": "G2031",
                "name": "中等教科教育法Ⅰ（数学）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "田山 育男"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2031.html"
            },
            {
                "tt_num": "G2096",
                "name": "中等教科教育法Ⅲ（技術）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2096.html"
            },
            {
                "tt_num": "G2098",
                "name": "中等教科教育法Ⅲ（社会・地歴）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2098.html"
            },
            {
                "tt_num": "G2101",
                "name": "中等教科教育法Ⅰ（家庭）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2101.html"
            },
            {
                "tt_num": "G3233",
                "name": "英米言語文化論",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3233.html"
            },
            {
                "tt_num": "G3710",
                "name": "コンピュータネットワーク",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "伊藤 直治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3710.html"
            },
            {
                "tt_num": "G4071",
                "name": "物理学概論Ⅰ",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "常田 琢"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4071.html"
            },
            {
                "tt_num": "G4291",
                "name": "物理化学",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4291.html"
            },
            {
                "tt_num": "G4506",
                "name": "指揮法Ⅰ",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4506.html"
            },
            {
                "tt_num": "G4832",
                "name": "彫刻Ⅰ",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "大坂 一成"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4832.html"
            },
            {
                "tt_num": "G5024",
                "name": "仮名創作法Ⅱ",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "瀨川 賢一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5024.html"
            },
            {
                "tt_num": "G5318",
                "name": "武道",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "藤猪 耕大"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5318.html"
            },
            {
                "tt_num": "G5524",
                "name": "機構学",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5524.html"
            },
            {
                "tt_num": "G5712",
                "name": "食品栄養学実験",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6",
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5712.html"
            },
            {
                "tt_num": "G5915",
                "name": "障害児教育学演習",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5915.html"
            },
            {
                "tt_num": "G6110",
                "name": "幼年心理学特講",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6110.html"
            },
            {
                "tt_num": "G6247",
                "name": "教育課程演習",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6247.html"
            },
            {
                "tt_num": "G1538",
                "name": "小学校社会★（社会）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "森 伸宏",
                    "根田 克彦",
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1538.html"
            },
            {
                "tt_num": "G1557",
                "name": "小学校社会★（社会）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "根田 克彦",
                    "森 伸宏",
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1557.html"
            },
            {
                "tt_num": "G2004",
                "name": "中等教科教育法Ⅰ（国語）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2004.html"
            },
            {
                "tt_num": "G3021",
                "name": "近代文学研究",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "田村 美由紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3021.html"
            },
            {
                "tt_num": "G3837",
                "name": "数理統計Ⅱ",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3837.html"
            },
            {
                "tt_num": "G4103",
                "name": "天文学実験",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8",
                    "木9"
                ],
                "teacher": [
                    "信川 正順"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4103.html"
            },
            {
                "tt_num": "G4320",
                "name": "応用物理学実験",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8",
                    "木9"
                ],
                "teacher": [
                    "常田 琢"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4320.html"
            },
            {
                "tt_num": "G4507",
                "name": "合奏Ⅰ",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4507.html"
            },
            {
                "tt_num": "G4831",
                "name": "彫刻理論特講",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "大坂 一成"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4831.html"
            },
            {
                "tt_num": "G4892",
                "name": "西洋美術史Ⅰ",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "永井 隆則"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4892.html"
            },
            {
                "tt_num": "G5031",
                "name": "漢字書法論",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5031.html"
            },
            {
                "tt_num": "G5049",
                "name": "古筆研究Ⅱ",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "瀨川 賢一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5049.html"
            },
            {
                "tt_num": "G5300",
                "name": "救急処置及び看護法",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "辻井 啓之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5300.html"
            },
            {
                "tt_num": "G5505",
                "name": "材料工作法",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5505.html"
            },
            {
                "tt_num": "G5525",
                "name": "機械設計製作",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5525.html"
            },
            {
                "tt_num": "G6114",
                "name": "社会的養護内容",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6114.html"
            },
            {
                "tt_num": "G6572",
                "name": "音声学・音韻論",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6572.html"
            },
            {
                "tt_num": "G3040",
                "name": "日本語学概説Ⅰ（音声言語を含む。）",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "前田 広幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3040.html"
            },
            {
                "tt_num": "G3240",
                "name": "国際英語文化教育論",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "エデソル・ドミニク ガイ"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3240.html"
            },
            {
                "tt_num": "G3401",
                "name": "哲学・倫理学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3401.html"
            },
            {
                "tt_num": "G3417",
                "name": "社会科教育研究Ⅲ",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3417.html"
            },
            {
                "tt_num": "G3724",
                "name": "数理統計Ⅰ",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3724.html"
            },
            {
                "tt_num": "G4042",
                "name": "生物学概論Ⅰ",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "石田 正樹"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4042.html"
            },
            {
                "tt_num": "G4345",
                "name": "博物館資料保存論",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "巽 善信"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4345.html"
            },
            {
                "tt_num": "G4728",
                "name": "声楽Ⅰ（Ｚ）",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4728.html"
            },
            {
                "tt_num": "G4871",
                "name": "美術概論",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "永井 隆則"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4871.html"
            },
            {
                "tt_num": "G5221",
                "name": "学校保健",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5221.html"
            },
            {
                "tt_num": "G6251",
                "name": "教育臨床心理学特講",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "出口 拓彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6251.html"
            },
            {
                "tt_num": "G3442",
                "name": "法学概論（国際法を含む。）",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3442.html"
            },
            {
                "tt_num": "G4121",
                "name": "植物生態学",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "松井 淳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4121.html"
            },
            {
                "tt_num": "G4747",
                "name": "演奏法Ⅱ（器楽）（Ａ）",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4747.html"
            },
            {
                "tt_num": "G6211",
                "name": "生涯教育文化特講",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6211.html"
            },
            {
                "tt_num": "G6522",
                "name": "日本語文献講読（文化）",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6522.html"
            },
            {
                "tt_num": "G2084",
                "name": "中等教科教育法Ⅲ（保健体育）",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2084.html"
            },
            {
                "tt_num": "G3451",
                "name": "西洋史",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3451.html"
            },
            {
                "tt_num": "G3711",
                "name": "コンピュータ情報処理",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "伊藤 直治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3711.html"
            },
            {
                "tt_num": "G3728",
                "name": "フーリエ解析",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3728.html"
            },
            {
                "tt_num": "G4041",
                "name": "細胞生物学",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "石田 正樹"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4041.html"
            },
            {
                "tt_num": "G4273",
                "name": "統計物理学",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "藤本 雅文"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4273.html"
            },
            {
                "tt_num": "G4531",
                "name": "作曲・編曲理論",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4531.html"
            },
            {
                "tt_num": "G4636",
                "name": "ピアノⅢ（Ｃ）",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "奥田 敬子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4636.html"
            },
            {
                "tt_num": "G4726",
                "name": "ピアノⅠ（Ａ）",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4726.html"
            },
            {
                "tt_num": "G5543",
                "name": "技術史",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "谷口 義昭",
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5543.html"
            },
            {
                "tt_num": "G6278",
                "name": "教育心理学実験",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "石井 僚",
                    "堀 麻佑子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6278.html"
            },
            {
                "tt_num": "G6304",
                "name": "生涯教育演習",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6304.html"
            },
            {
                "tt_num": "G6503",
                "name": "日本語文献講読（言語）",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6503.html"
            },
            {
                "tt_num": "G6810",
                "name": "システムプログラミング",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6810.html"
            },
            {
                "tt_num": "G1006",
                "name": "博物館教育論",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "荻野 裕子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1006.html"
            },
            {
                "tt_num": "G2033",
                "name": "初等教科教育法（算数）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "近藤 裕"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2033.html"
            },
            {
                "tt_num": "G2034",
                "name": "初等教科教育法（算数）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "福本 義久"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2034.html"
            },
            {
                "tt_num": "G2037",
                "name": "初等教科教育法（算数）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2037.html"
            },
            {
                "tt_num": "G2081",
                "name": "中等教科教育法Ⅰ（保健体育）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2081.html"
            },
            {
                "tt_num": "G2186",
                "name": "保育内容の指導法（環境Ⅰ）★（幼児と環境Ⅰ）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "石井 俊行",
                    "辻野 亮"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2186.html"
            },
            {
                "tt_num": "G3232",
                "name": "英米文学特講",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3232.html"
            },
            {
                "tt_num": "G3505",
                "name": "経済学・社会学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3505.html"
            },
            {
                "tt_num": "G4751",
                "name": "演奏法Ⅱ（器楽）（Ｂ）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4751.html"
            },
            {
                "tt_num": "G5509",
                "name": "木質材料学",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5509.html"
            },
            {
                "tt_num": "G6280",
                "name": "認知発達特講",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "中山 留美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6280.html"
            },
            {
                "tt_num": "G6541",
                "name": "日本語演習Ⅰ（読解）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "新谷 遙"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6541.html"
            },
            {
                "tt_num": "G2012",
                "name": "中等教科教育法Ⅰ（英語）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2012.html"
            },
            {
                "tt_num": "G2060",
                "name": "中等教科教育法Ⅲ（美術）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2060.html"
            },
            {
                "tt_num": "G3062",
                "name": "日本文学史Ⅰ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3062.html"
            },
            {
                "tt_num": "G3400",
                "name": "倫理学",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3400.html"
            },
            {
                "tt_num": "G3501",
                "name": "経済学概論（国際経済を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3501.html"
            },
            {
                "tt_num": "G3770",
                "name": "解析基礎",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3770.html"
            },
            {
                "tt_num": "G4309",
                "name": "生物学実験（コンピュータ活用を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8",
                    "金9"
                ],
                "teacher": [
                    "松井 淳",
                    "石田 正樹",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4309.html"
            },
            {
                "tt_num": "G4324",
                "name": "地学実験（コンピュータ活用を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8",
                    "金9"
                ],
                "teacher": [
                    "和田 穣隆",
                    "信川 正順",
                    "藤井 智康"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4324.html"
            },
            {
                "tt_num": "G4332",
                "name": "固体物理学",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "中村 元彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4332.html"
            },
            {
                "tt_num": "G4503",
                "name": "作曲・編曲法基礎演習Ⅰ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4503.html"
            },
            {
                "tt_num": "G4593",
                "name": "伴奏法",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4593.html"
            },
            {
                "tt_num": "G4861",
                "name": "工芸Ⅲ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4861.html"
            },
            {
                "tt_num": "G4881",
                "name": "デザインⅠ（映像メディア表現を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "新田 恭子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4881.html"
            },
            {
                "tt_num": "G5240",
                "name": "陸上競技",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5240.html"
            },
            {
                "tt_num": "G5262",
                "name": "栄養学（食品学を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5262.html"
            },
            {
                "tt_num": "G5512",
                "name": "金属工作実習（製図を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5512.html"
            },
            {
                "tt_num": "G5550",
                "name": "電気基礎",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5550.html"
            },
            {
                "tt_num": "G5760",
                "name": "育児学",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5760.html"
            },
            {
                "tt_num": "G5775",
                "name": "被服構成学実習Ⅰ■（被服構成学実習）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8",
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "木林 有理子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5775.html"
            },
            {
                "tt_num": "G6290",
                "name": "心理学検査Ⅰ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "出口 拓彦",
                    "中山 留美子",
                    "石井 僚"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6290.html"
            },
            {
                "tt_num": "G6303",
                "name": "生涯学習概論Ⅰ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6303.html"
            },
            {
                "tt_num": "G6542",
                "name": "日本語演習Ⅰ（作文）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "新谷 遙"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6542.html"
            },
            {
                "tt_num": "G3012",
                "name": "漢文学概説",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3012.html"
            },
            {
                "tt_num": "G3502",
                "name": "経済学・社会学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3502.html"
            },
            {
                "tt_num": "G3536",
                "name": "哲学概論",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3536.html"
            },
            {
                "tt_num": "G3800",
                "name": "基礎数学（解析）",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3800.html"
            },
            {
                "tt_num": "G4700",
                "name": "音楽史",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "竹内 直"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4700.html"
            },
            {
                "tt_num": "G4724",
                "name": "ピアノⅠ（Ｄ）",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4724.html"
            },
            {
                "tt_num": "G4860",
                "name": "工芸Ⅰ",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4860.html"
            },
            {
                "tt_num": "G4880",
                "name": "デザインⅢ",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "新田 恭子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4880.html"
            },
            {
                "tt_num": "G5711",
                "name": "栄養学",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5711.html"
            },
            {
                "tt_num": "G6513",
                "name": "英語文化交流論",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6513.html"
            },
            {
                "tt_num": "G1007",
                "name": "博物館展示論",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "巽 善信"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1007.html"
            },
            {
                "tt_num": "G1102",
                "name": "学習指導と学校図書館",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "家城 清美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1102.html"
            },
            {
                "tt_num": "G1152",
                "name": "学習指導と学校図書館",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "家城 清美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1152.html"
            },
            {
                "tt_num": "G2184",
                "name": "保育内容の指導法（健康）★（幼児と健康）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "飯田 智行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2184.html"
            },
            {
                "tt_num": "G2194",
                "name": "乳児保育",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岡 いくよ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2194.html"
            },
            {
                "tt_num": "G3538",
                "name": "山間地教育入門",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "河本 大地",
                    "中澤 静男"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3538.html"
            },
            {
                "tt_num": "G3550",
                "name": "文化遺産科学演習Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3550.html"
            },
            {
                "tt_num": "G3704",
                "name": "代数系入門",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "長谷川 武博"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3704.html"
            },
            {
                "tt_num": "G3805",
                "name": "図形と位相",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3805.html"
            },
            {
                "tt_num": "G3840",
                "name": "幾何構造",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3840.html"
            },
            {
                "tt_num": "G3842",
                "name": "算数・数学教育実践演習Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "高木 祥司",
                    "伊藤 直治",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "近藤 裕",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3842.html"
            },
            {
                "tt_num": "G3844",
                "name": "算数・数学教育実践演習Ⅲ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "伊藤 直治",
                    "高橋 亮",
                    "近藤 裕",
                    "高木 祥司",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3844.html"
            },
            {
                "tt_num": "G4043",
                "name": "臨海実習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松井 淳",
                    "石田 正樹",
                    "中野 智之",
                    "辻野 亮",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4043.html"
            },
            {
                "tt_num": "G4051",
                "name": "野外実習－自然の中の理科教育",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松井 淳",
                    "石田 正樹",
                    "信川 正順",
                    "和田 穣隆",
                    "藤井 智康",
                    "辻野 亮",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4051.html"
            },
            {
                "tt_num": "G4062",
                "name": "分析化学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "樋上 照男"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4062.html"
            },
            {
                "tt_num": "G4318",
                "name": "地学野外実習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "和田 穣隆"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4318.html"
            },
            {
                "tt_num": "G4343",
                "name": "考古学演習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "日野 宏"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4343.html"
            },
            {
                "tt_num": "G4347",
                "name": "自然科学史",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "杉本 舞"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4347.html"
            },
            {
                "tt_num": "G4360",
                "name": "量子化学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "川上 貴資"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4360.html"
            },
            {
                "tt_num": "G4858",
                "name": "地域と文化遺産教育",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山岸 公基",
                    "大山 明彦",
                    "金原 正明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4858.html"
            },
            {
                "tt_num": "G4894",
                "name": "コンピュータと文化遺産Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4894.html"
            },
            {
                "tt_num": "G4895",
                "name": "絵画Ⅰ（映像メディア表現を含む。）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4895.html"
            },
            {
                "tt_num": "G5043",
                "name": "正倉院の書蹟",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "西山 厚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5043.html"
            },
            {
                "tt_num": "G5222",
                "name": "看護学臨床実習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5222.html"
            },
            {
                "tt_num": "G5295",
                "name": "野外活動（キャンプ）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "立 正伸",
                    "笠次 良爾"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5295.html"
            },
            {
                "tt_num": "G5316",
                "name": "看護学Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山崎 裕美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5316.html"
            },
            {
                "tt_num": "G5317",
                "name": "看護学Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山崎 裕美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5317.html"
            },
            {
                "tt_num": "G5730",
                "name": "調理学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "光森 洋美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5730.html"
            },
            {
                "tt_num": "G5743",
                "name": "被服学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "木林 有理子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5743.html"
            },
            {
                "tt_num": "G5767",
                "name": "家庭科授業設計",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "中嶋 たや"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5767.html"
            },
            {
                "tt_num": "G5773",
                "name": "衣生活論",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "池田 仁美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5773.html"
            },
            {
                "tt_num": "G5907",
                "name": "視覚障害児の教育Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "稲本 正法"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5907.html"
            },
            {
                "tt_num": "G5909",
                "name": "視覚障害児の教育Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "稲本 正法"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5909.html"
            },
            {
                "tt_num": "G5910",
                "name": "障害児の発達心理学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松島 明日香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5910.html"
            },
            {
                "tt_num": "G5940",
                "name": "重複障害教育の理論と実際",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "越野 和之",
                    "木下 理恵",
                    "富井 奈菜実",
                    "中西 陽",
                    "堀田 千絵",
                    "全 有耳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5940.html"
            },
            {
                "tt_num": "G5952",
                "name": "言語治療学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "木村 秀生"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5952.html"
            },
            {
                "tt_num": "G5962",
                "name": "肢体不自由・重複障害教育実践論",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "原田 文孝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5962.html"
            },
            {
                "tt_num": "G5963",
                "name": "知的障害指導法実習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "越野 和之",
                    "富井 奈菜実"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5963.html"
            },
            {
                "tt_num": "G5965",
                "name": "特別支援教育実践演習Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5965.html"
            },
            {
                "tt_num": "G6113",
                "name": "子ども文化論",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "栗山 誠",
                    "椋田 善之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6113.html"
            },
            {
                "tt_num": "G6261",
                "name": "児童心理学特講",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "小川 絢子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6261.html"
            },
            {
                "tt_num": "G6307",
                "name": "教育調査法",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "池田 曜子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6307.html"
            },
            {
                "tt_num": "G6310",
                "name": "精神保健",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "竹下 三隆"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6310.html"
            },
            {
                "tt_num": "G6320",
                "name": "生涯学習支援特講Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6320.html"
            },
            {
                "tt_num": "G6914",
                "name": "子どもの保健",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岡 いくよ"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6914.html"
            },
            {
                "tt_num": "G8072",
                "name": "保育実習（保育所Ⅰ）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "横山 真貴子",
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8072.html"
            },
            {
                "tt_num": "G8073",
                "name": "保育実習（施設）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岩本 華子",
                    "横山 真貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8073.html"
            },
            {
                "tt_num": "G9981",
                "name": "給食指導",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "阪口 美香",
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9981.html"
            },
            {
                "tt_num": "G9984",
                "name": "新理数基礎ゼミナールⅠ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9984.html"
            },
            {
                "tt_num": "G9986",
                "name": "新理数教育Ⅲ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9986.html"
            },
            {
                "tt_num": "G9988",
                "name": "新理数教育Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9988.html"
            },
            {
                "tt_num": "G0731",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0731.html"
            },
            {
                "tt_num": "G0732",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "石井 僚",
                    "中山 留美子",
                    "出口 拓彦",
                    "堀 麻佑子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0732.html"
            },
            {
                "tt_num": "G0733",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "横山 真貴子",
                    "大西 賢治"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0733.html"
            },
            {
                "tt_num": "G0734",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "堀田 千絵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0734.html"
            },
            {
                "tt_num": "G0735",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0735.html"
            },
            {
                "tt_num": "G0736",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "渡邉 伸一",
                    "太田 満"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0736.html"
            },
            {
                "tt_num": "G0737",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0737.html"
            },
            {
                "tt_num": "G0738",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "和田 穣隆",
                    "石田 正樹",
                    "石井 俊行"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0738.html"
            },
            {
                "tt_num": "G0739",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0739.html"
            },
            {
                "tt_num": "G0740",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0740.html"
            },
            {
                "tt_num": "G0741",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0741.html"
            },
            {
                "tt_num": "G0742",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0742.html"
            },
            {
                "tt_num": "G0743",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0743.html"
            },
            {
                "tt_num": "G0744",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0744.html"
            },
            {
                "tt_num": "G0745",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0745.html"
            },
            {
                "tt_num": "G0746",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0746.html"
            },
            {
                "tt_num": "G1542",
                "name": "小学校図画工作",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "新田 恭子",
                    "川北 成彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1542.html"
            },
            {
                "tt_num": "G1548",
                "name": "小学校生活",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1548.html"
            },
            {
                "tt_num": "G1545",
                "name": "小学校音楽Ⅰ★（音楽Ⅰ）",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "劉 麟玉",
                    "小笠原 真也",
                    "宮田 知絵",
                    "前田 則子",
                    "北條 美香代",
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1545.html"
            },
            {
                "tt_num": "G1544",
                "name": "小学校図画工作",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "狩野 宏明",
                    "原山 健一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1544.html"
            },
            {
                "tt_num": "G1550",
                "name": "小学校生活",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "辻野 亮",
                    "中谷 憲一",
                    "山本 素世",
                    "和田 穣隆",
                    "渡邉 伸一",
                    "箕作 和彦",
                    "村松 大輔"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1550.html"
            },
            {
                "tt_num": "G2085",
                "name": "中等教科教育法Ⅳ（保健体育）",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "有馬 一彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2085.html"
            },
            {
                "tt_num": "G2228",
                "name": "教科内容研究（数学）",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "舟橋 友香",
                    "伊藤 直治",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "近藤 裕",
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2228.html"
            },
            {
                "tt_num": "G3449",
                "name": "日本史研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3449.html"
            },
            {
                "tt_num": "G3456",
                "name": "西洋史研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3456.html"
            },
            {
                "tt_num": "G3518",
                "name": "経済学・社会学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3518.html"
            },
            {
                "tt_num": "G4302",
                "name": "地質学",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "和田 穣隆"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4302.html"
            },
            {
                "tt_num": "G4754",
                "name": "声楽Ⅱ（Ｚ）",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4754.html"
            },
            {
                "tt_num": "G4758",
                "name": "ピアノⅣ（Ｄ）",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4758.html"
            },
            {
                "tt_num": "G6252",
                "name": "教育臨床心理学演習",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "出口 拓彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6252.html"
            },
            {
                "tt_num": "G2097",
                "name": "中等教科教育法Ⅳ（技術）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2097.html"
            },
            {
                "tt_num": "G3074",
                "name": "日本語学特講Ⅰ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "森下 訓子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3074.html"
            },
            {
                "tt_num": "G3443",
                "name": "法学",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3443.html"
            },
            {
                "tt_num": "G3482",
                "name": "地誌学概論",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3482.html"
            },
            {
                "tt_num": "G3773",
                "name": "数理プログラミング",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "村井 紘子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3773.html"
            },
            {
                "tt_num": "G3792",
                "name": "数学教育基礎",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "近藤 裕"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3792.html"
            },
            {
                "tt_num": "G4731",
                "name": "ピアノⅡ（Ａ）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4731.html"
            },
            {
                "tt_num": "G4732",
                "name": "ピアノⅡ（Ｃ）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "奥田 敬子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4732.html"
            },
            {
                "tt_num": "G4739",
                "name": "声楽Ⅳ（Ｘ）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4739.html"
            },
            {
                "tt_num": "G4877",
                "name": "絵画Ⅵ(絵画伝統技法 ）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4877.html"
            },
            {
                "tt_num": "G5023",
                "name": "仮名作品研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5023.html"
            },
            {
                "tt_num": "G5033",
                "name": "漢字創作法Ⅱ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5033.html"
            },
            {
                "tt_num": "G5200",
                "name": "体育心理学",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "中田 大貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5200.html"
            },
            {
                "tt_num": "G6202",
                "name": "生涯教育史特講",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6202.html"
            },
            {
                "tt_num": "G6221",
                "name": "教育方法学特講",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6221.html"
            },
            {
                "tt_num": "G6271",
                "name": "心理学調査法",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "出口 拓彦",
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6271.html"
            },
            {
                "tt_num": "G1563",
                "name": "初等教科教育法（英語）★（小学校外国語活動）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "兼重 昇"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1563.html"
            },
            {
                "tt_num": "G2026",
                "name": "中等教科教育法Ⅱ(社会・公民)",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2026.html"
            },
            {
                "tt_num": "G2053",
                "name": "中等教科教育法Ⅱ（音楽）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "長谷川 真由"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2053.html"
            },
            {
                "tt_num": "G2083",
                "name": "中等教科教育法Ⅱ（保健体育）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2083.html"
            },
            {
                "tt_num": "G2093",
                "name": "中等教科教育法Ⅱ（工業）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2093.html"
            },
            {
                "tt_num": "G3003",
                "name": "日本語学概説Ⅱ",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "森下 訓子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3003.html"
            },
            {
                "tt_num": "G3274",
                "name": "英会話Ⅱ",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3274.html"
            },
            {
                "tt_num": "G3745",
                "name": "代数構造Ⅰ",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3745.html"
            },
            {
                "tt_num": "G3831",
                "name": "コンピュータと数学",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "村井 紘子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3831.html"
            },
            {
                "tt_num": "G4236",
                "name": "化学概論Ⅱ",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4236.html"
            },
            {
                "tt_num": "G4741",
                "name": "ピアノⅡ（Ｄ）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4741.html"
            },
            {
                "tt_num": "G5035",
                "name": "楷書法",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5035.html"
            },
            {
                "tt_num": "G5319",
                "name": "表現運動・ダンス（体つくり運動を含む。）■（表現運動（ダンス））",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5319.html"
            },
            {
                "tt_num": "G5520",
                "name": "標準製図",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5520.html"
            },
            {
                "tt_num": "G1539",
                "name": "小学校算数★（算数）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "舟橋 友香",
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1539.html"
            },
            {
                "tt_num": "G1558",
                "name": "小学校算数★（算数）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "近藤 裕",
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1558.html"
            },
            {
                "tt_num": "G1559",
                "name": "小学校算数★（算数）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1559.html"
            },
            {
                "tt_num": "G2234",
                "name": "教科内容研究（書道）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "谷川 雅夫",
                    "豊田 宗児"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2234.html"
            },
            {
                "tt_num": "G3418",
                "name": "社会科教育研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3418.html"
            },
            {
                "tt_num": "G3444",
                "name": "法学・政治学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3444.html"
            },
            {
                "tt_num": "G3454",
                "name": "西洋史研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3454.html"
            },
            {
                "tt_num": "G3513",
                "name": "経済学・社会学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3513.html"
            },
            {
                "tt_num": "G3529",
                "name": "地理学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "根田 克彦",
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3529.html"
            },
            {
                "tt_num": "G3533",
                "name": "地理学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "河本 大地",
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3533.html"
            },
            {
                "tt_num": "G3715",
                "name": "情報数理学",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "伊藤 直治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3715.html"
            },
            {
                "tt_num": "G4032",
                "name": "遺伝学実験",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4032.html"
            },
            {
                "tt_num": "G4050",
                "name": "水圏科学",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "藤井 智康"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4050.html"
            },
            {
                "tt_num": "G4322",
                "name": "化学実験（コンピュータ活用を含む。）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "山崎 祥子",
                    "梶原 篤",
                    "高島 弘"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4322.html"
            },
            {
                "tt_num": "G4639",
                "name": "ピアノⅣ（Ａ）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4639.html"
            },
            {
                "tt_num": "G4744",
                "name": "声楽Ⅳ（Ｙ）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4744.html"
            },
            {
                "tt_num": "G4834",
                "name": "実材",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "大坂 一成"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4834.html"
            },
            {
                "tt_num": "G5251",
                "name": "球技（種目別Ⅱ）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "竹村 匡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5251.html"
            },
            {
                "tt_num": "G5264",
                "name": "生理学（運動生理学を含む。）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5264.html"
            },
            {
                "tt_num": "G5518",
                "name": "金属工作理論",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5518.html"
            },
            {
                "tt_num": "G5551",
                "name": "電気設計製作",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5551.html"
            },
            {
                "tt_num": "G5924",
                "name": "障害児心理学演習",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "中西 陽"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5924.html"
            },
            {
                "tt_num": "G6121",
                "name": "心理学実験",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "出口 拓彦",
                    "石井 僚",
                    "堀 麻佑子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6121.html"
            },
            {
                "tt_num": "G2099",
                "name": "中等教科教育法Ⅳ（社会・公民）",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2099.html"
            },
            {
                "tt_num": "G3222",
                "name": "英作文Ⅱ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3222.html"
            },
            {
                "tt_num": "G3459",
                "name": "法学・政治学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3459.html"
            },
            {
                "tt_num": "G3717",
                "name": "情報システム論",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3717.html"
            },
            {
                "tt_num": "G3748",
                "name": "線形代数",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3748.html"
            },
            {
                "tt_num": "G4591",
                "name": "ソルフェージュ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4591.html"
            },
            {
                "tt_num": "G4646",
                "name": "日本音楽実習Ⅱ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "林 美音子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4646.html"
            },
            {
                "tt_num": "G4755",
                "name": "声楽Ⅳ（Ｚ）",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4755.html"
            },
            {
                "tt_num": "G4833",
                "name": "彫刻Ⅱ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "大坂 一成"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4833.html"
            },
            {
                "tt_num": "G4847",
                "name": "デッサンⅡ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4847.html"
            },
            {
                "tt_num": "G5054",
                "name": "名蹟鑑賞",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5054.html"
            },
            {
                "tt_num": "G5281",
                "name": "レクリエーション理論",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "蓬田 高正"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5281.html"
            },
            {
                "tt_num": "G5527",
                "name": "機械実験実習",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5527.html"
            },
            {
                "tt_num": "G2041",
                "name": "中等教科教育法Ⅰ（理科）",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "森本 弘一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2041.html"
            },
            {
                "tt_num": "G2062",
                "name": "中等教科教育法Ⅱ（美術）",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2062.html"
            },
            {
                "tt_num": "G2179",
                "name": "子どもと健康",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "井上 邦子",
                    "笠次 良爾",
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2179.html"
            },
            {
                "tt_num": "G3435",
                "name": "日本古代・中世史",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3435.html"
            },
            {
                "tt_num": "G4637",
                "name": "ピアノⅣ（Ｃ）",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "奥田 敬子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4637.html"
            },
            {
                "tt_num": "G5002",
                "name": "漢字創作法Ⅰ",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5002.html"
            },
            {
                "tt_num": "G5272",
                "name": "運動学（運動方法学を含む。）",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5272.html"
            },
            {
                "tt_num": "G5701",
                "name": "家族関係学",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "立松 麻衣子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5701.html"
            },
            {
                "tt_num": "G5913",
                "name": "特別支援教育原論",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5913.html"
            },
            {
                "tt_num": "G6246",
                "name": "教育課程特講",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6246.html"
            },
            {
                "tt_num": "G6308",
                "name": "生涯学習概論Ⅱ",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6308.html"
            },
            {
                "tt_num": "G1101",
                "name": "情報メディアの活用",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1101.html"
            },
            {
                "tt_num": "G1546",
                "name": "小学校音楽Ⅱ★（音楽Ⅱ）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "奥田 敬子",
                    "小笠原 真也"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1546.html"
            },
            {
                "tt_num": "G2002",
                "name": "中等教科教育法Ⅱ（国語）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2002.html"
            },
            {
                "tt_num": "G2056",
                "name": "中等教科教育法Ⅳ（音楽）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2056.html"
            },
            {
                "tt_num": "G2078",
                "name": "初等教科教育法（体育）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "小坂 美保"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2078.html"
            },
            {
                "tt_num": "G2079",
                "name": "初等教科教育法（体育）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2079.html"
            },
            {
                "tt_num": "G2080",
                "name": "初等教科教育法（体育）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "西川 潔"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2080.html"
            },
            {
                "tt_num": "G3255",
                "name": "言語コミュニケーション論",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3255.html"
            },
            {
                "tt_num": "G3414",
                "name": "社会科教育研究Ⅱ",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3414.html"
            },
            {
                "tt_num": "G3514",
                "name": "社会学概論",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3514.html"
            },
            {
                "tt_num": "G4033",
                "name": "遺伝学",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4033.html"
            },
            {
                "tt_num": "G4281",
                "name": "有機化学",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "山崎 祥子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4281.html"
            },
            {
                "tt_num": "G4821",
                "name": "美術教育特講Ⅰ",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4821.html"
            },
            {
                "tt_num": "G5045",
                "name": "篆刻法",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5045.html"
            },
            {
                "tt_num": "G5506",
                "name": "材料工作設計",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5506.html"
            },
            {
                "tt_num": "G5762",
                "name": "保育学(実習を含む。）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5762.html"
            },
            {
                "tt_num": "G2191",
                "name": "保育内容の指導法（音楽表現）★（幼児の音楽表現）",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2191.html"
            },
            {
                "tt_num": "G3004",
                "name": "日本語学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "森 篤嗣"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3004.html"
            },
            {
                "tt_num": "G3042",
                "name": "日本語表現法（文章表現を含む。）",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "前田 広幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3042.html"
            },
            {
                "tt_num": "G3063",
                "name": "古典文学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3063.html"
            },
            {
                "tt_num": "G3254",
                "name": "英語学特講",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3254.html"
            },
            {
                "tt_num": "G3279",
                "name": "国際理解教育演習Ⅰ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3279.html"
            },
            {
                "tt_num": "G3404",
                "name": "哲学・倫理学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3404.html"
            },
            {
                "tt_num": "G3416",
                "name": "社会科教育研究Ⅳ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3416.html"
            },
            {
                "tt_num": "G3532",
                "name": "東洋史概説",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "細見 和弘"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3532.html"
            },
            {
                "tt_num": "G3764",
                "name": "数学教育論",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3764.html"
            },
            {
                "tt_num": "G4104",
                "name": "地学概論Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "藤井 智康",
                    "信川 正順",
                    "和田 穣隆"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4104.html"
            },
            {
                "tt_num": "G4538",
                "name": "保育内容特講",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "横山 真貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4538.html"
            },
            {
                "tt_num": "G4734",
                "name": "声楽Ⅱ（Ｘ）",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4734.html"
            },
            {
                "tt_num": "G4849",
                "name": "絵画Ⅲ(構図研究)",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4849.html"
            },
            {
                "tt_num": "G5004",
                "name": "漢字作品研究Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5004.html"
            },
            {
                "tt_num": "G5014",
                "name": "書道史Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5014.html"
            },
            {
                "tt_num": "G5225",
                "name": "健康相談活動の理論及び方法",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5225.html"
            },
            {
                "tt_num": "G5529",
                "name": "材料力学",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5529.html"
            },
            {
                "tt_num": "G5704",
                "name": "家族福祉論",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "立松 麻衣子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5704.html"
            },
            {
                "tt_num": "G5735",
                "name": "食品学",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "光森 洋美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5735.html"
            },
            {
                "tt_num": "G6212",
                "name": "教育哲学・思想特講",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6212.html"
            },
            {
                "tt_num": "G6526",
                "name": "日本文化史",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6526.html"
            },
            {
                "tt_num": "G6916",
                "name": "保育者論",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "残華 雅子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6916.html"
            },
            {
                "tt_num": "G6919",
                "name": "子ども家庭支援論★（相談援助）",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6919.html"
            },
            {
                "tt_num": "G0710",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0710.html"
            },
            {
                "tt_num": "G0711",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "石井 僚",
                    "中山 留美子",
                    "出口 拓彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0711.html"
            },
            {
                "tt_num": "G0712",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "横山 真貴子",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0712.html"
            },
            {
                "tt_num": "G0713",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "堀田 千絵"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0713.html"
            },
            {
                "tt_num": "G0714",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "棚橋 尚子",
                    "前田 広幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0714.html"
            },
            {
                "tt_num": "G0715",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "今 正秀",
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0715.html"
            },
            {
                "tt_num": "G0716",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "門田 守",
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0716.html"
            },
            {
                "tt_num": "G0717",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "伊藤 直治",
                    "高橋 亮",
                    "近藤 裕",
                    "高木 祥司",
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0717.html"
            },
            {
                "tt_num": "G0718",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "和田 穣隆",
                    "石田 正樹",
                    "信川 正順",
                    "梶原 篤",
                    "山崎 祥子",
                    "松山 豊樹",
                    "中村 元彦",
                    "藤井 智康",
                    "常田 琢",
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0718.html"
            },
            {
                "tt_num": "G0719",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "世良 啓太",
                    "薮 哲郎",
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0719.html"
            },
            {
                "tt_num": "G0720",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "中川 愛",
                    "杉山 薫",
                    "立松 麻衣子",
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0720.html"
            },
            {
                "tt_num": "G0721",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0721.html"
            },
            {
                "tt_num": "G0722",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0722.html"
            },
            {
                "tt_num": "G0723",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0723.html"
            },
            {
                "tt_num": "G0725",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0725.html"
            },
            {
                "tt_num": "G0726",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "金原 正明",
                    "大山 明彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0726.html"
            },
            {
                "tt_num": "G2063",
                "name": "初等教科教育法（図画工作）",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2063.html"
            },
            {
                "tt_num": "G2103",
                "name": "初等教科教育法（家庭）",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "松本 歩子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2103.html"
            },
            {
                "tt_num": "G3406",
                "name": "哲学・倫理学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3406.html"
            },
            {
                "tt_num": "G3531",
                "name": "東洋史",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "細見 和弘"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3531.html"
            },
            {
                "tt_num": "G3810",
                "name": "トポロジー",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "張 娟姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3810.html"
            },
            {
                "tt_num": "G4045",
                "name": "生理学実験",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8",
                    "火9"
                ],
                "teacher": [
                    "石田 正樹"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4045.html"
            },
            {
                "tt_num": "G4312",
                "name": "実践物理実験",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8",
                    "火9"
                ],
                "teacher": [
                    "松山 豊樹",
                    "中村 元彦",
                    "常田 琢"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4312.html"
            },
            {
                "tt_num": "G4856",
                "name": "文化遺産芸術学演習Ⅰ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4856.html"
            },
            {
                "tt_num": "G5037",
                "name": "草書法",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5037.html"
            },
            {
                "tt_num": "G5062",
                "name": "仮名条幅研究",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5062.html"
            },
            {
                "tt_num": "G5309",
                "name": "体育・スポーツ経営学",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "稲葉 慎太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5309.html"
            },
            {
                "tt_num": "G5710",
                "name": "食品保蔵学",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5710.html"
            },
            {
                "tt_num": "G5966",
                "name": "障害児教育実践学演習",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "木下 理恵"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5966.html"
            },
            {
                "tt_num": "G6243",
                "name": "生涯教育政策特講",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6243.html"
            },
            {
                "tt_num": "G6531",
                "name": "異文化理解研究",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6531.html"
            },
            {
                "tt_num": "G6821",
                "name": "教育人権アプローチ演習",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6821.html"
            },
            {
                "tt_num": "G0066",
                "name": "教師のための情報モラル",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0066.html"
            },
            {
                "tt_num": "G2013",
                "name": "中等教科教育法Ⅳ(英語）",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2013.html"
            },
            {
                "tt_num": "G2105",
                "name": "中等教科教育法Ⅳ（家庭）",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2105.html"
            },
            {
                "tt_num": "G2231",
                "name": "教科内容研究（美術）",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "原山 健一",
                    "山岸 公基",
                    "竹内 晋平",
                    "宇田 秀士",
                    "大山 明彦",
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2231.html"
            },
            {
                "tt_num": "G3474",
                "name": "自然と地域の未来を探る★（地域生態論）",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3474.html"
            },
            {
                "tt_num": "G4024",
                "name": "文化遺産科学実験Ⅰ",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10",
                    "火11"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4024.html"
            },
            {
                "tt_num": "G4539",
                "name": "保育内容演習",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "横山 真貴子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4539.html"
            },
            {
                "tt_num": "G4548",
                "name": "合唱Ⅱ",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4548.html"
            },
            {
                "tt_num": "G4549",
                "name": "合唱Ⅳ",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4549.html"
            },
            {
                "tt_num": "G5046",
                "name": "仮名創作法Ⅰ",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5046.html"
            },
            {
                "tt_num": "G5267",
                "name": "スポーツ医学",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5267.html"
            },
            {
                "tt_num": "G5557",
                "name": "情報技術実習",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5557.html"
            },
            {
                "tt_num": "G6103",
                "name": "幼年教育学演習",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6103.html"
            },
            {
                "tt_num": "G6112",
                "name": "幼年心理学演習",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6112.html"
            },
            {
                "tt_num": "G6920",
                "name": "保育者論",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6920.html"
            },
            {
                "tt_num": "G2043",
                "name": "中等教科教育法Ⅱ（理科）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2043.html"
            },
            {
                "tt_num": "G2071",
                "name": "中等教科教育法Ⅱ（書道）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2071.html"
            },
            {
                "tt_num": "G2108",
                "name": "中等教科教育法Ⅱ（情報）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2108.html"
            },
            {
                "tt_num": "G2189",
                "name": "保育内容の指導法（造形表現）★（幼児の造形表現）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "竹内 晋平",
                    "川口 奈々子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2189.html"
            },
            {
                "tt_num": "G2190",
                "name": "保育内容の指導法（造形表現）★（幼児の造形表現）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "川口 奈々子",
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2190.html"
            },
            {
                "tt_num": "G3071",
                "name": "漢文学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3071.html"
            },
            {
                "tt_num": "G3080",
                "name": "国語科教育概説",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3080.html"
            },
            {
                "tt_num": "G5751",
                "name": "住居学(製図を含む。）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "藤平 眞紀子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5751.html"
            },
            {
                "tt_num": "G6506",
                "name": "日本語コミュニケーション",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6506.html"
            },
            {
                "tt_num": "G2040",
                "name": "初等教科教育法（理科）",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "森本 弘一",
                    "信川 正順",
                    "中澤 隆",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2040.html"
            },
            {
                "tt_num": "G2095",
                "name": "中等教科教育法Ⅱ（技術）",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2095.html"
            },
            {
                "tt_num": "G2102",
                "name": "中等教科教育法Ⅱ（家庭）",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2102.html"
            },
            {
                "tt_num": "G2226",
                "name": "教科内容研究（国語）",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "日高 佳紀",
                    "前田 広幸",
                    "橋本 昭典",
                    "有馬 義貴",
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2226.html"
            },
            {
                "tt_num": "G3492",
                "name": "日本史概説Ⅱ",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "谷山 正道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3492.html"
            },
            {
                "tt_num": "G3702",
                "name": "プログラミングとデータベース",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "竹本 有紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3702.html"
            },
            {
                "tt_num": "G4046",
                "name": "生物学概論Ⅱ",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4046.html"
            },
            {
                "tt_num": "G4854",
                "name": "アジアの中の日本美術史",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4854.html"
            },
            {
                "tt_num": "G4886",
                "name": "デザインⅡ",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "新田 恭子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4886.html"
            },
            {
                "tt_num": "G5034",
                "name": "生活書式法",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5034.html"
            },
            {
                "tt_num": "G5242",
                "name": "スポーツ社会学",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5242.html"
            },
            {
                "tt_num": "G5503",
                "name": "木材工作理論",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5503.html"
            },
            {
                "tt_num": "G6504",
                "name": "日本語教育論",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6504.html"
            },
            {
                "tt_num": "G2011",
                "name": "中等教科教育法Ⅱ（英語）",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "吉村 公宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2011.html"
            },
            {
                "tt_num": "G3076",
                "name": "近代文学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "日高 佳紀"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3076.html"
            },
            {
                "tt_num": "G4336",
                "name": "気象学",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "酒井 敏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4336.html"
            },
            {
                "tt_num": "G6245",
                "name": "指導と評価",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "北川 剛司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6245.html"
            },
            {
                "tt_num": "G6525",
                "name": "比較言語文化論Ⅱ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6525.html"
            },
            {
                "tt_num": "G2007",
                "name": "中等教科教育法Ⅳ（国語）",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "前田 広幸",
                    "岸江 信介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2007.html"
            },
            {
                "tt_num": "G2227",
                "name": "教科内容研究（社会）",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "梶尾 悠史",
                    "根田 克彦",
                    "太田 満",
                    "渡邉 伸一",
                    "今 正秀",
                    "西田 慎",
                    "河本 大地",
                    "森口 洋一",
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2227.html"
            },
            {
                "tt_num": "G2233",
                "name": "教科内容研究（技術）",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "世良 啓太",
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2233.html"
            },
            {
                "tt_num": "G3278",
                "name": "英語学概論",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "吉村 公宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3278.html"
            },
            {
                "tt_num": "G3282",
                "name": "実践英語研究Ⅱ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3282.html"
            },
            {
                "tt_num": "G3841",
                "name": "グラフ理論",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "張 娟姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3841.html"
            },
            {
                "tt_num": "G4001",
                "name": "物質反応科学",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4001.html"
            },
            {
                "tt_num": "G4817",
                "name": "持続発展教育と文化遺産",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "中澤 静男"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4817.html"
            },
            {
                "tt_num": "G6273",
                "name": "人間環境心理学",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6273.html"
            },
            {
                "tt_num": "G6811",
                "name": "情報通信システム工学",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6811.html"
            },
            {
                "tt_num": "G6909",
                "name": "子どもの食と栄養",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6909.html"
            },
            {
                "tt_num": "G1576",
                "name": "初等教科教育法（英語）★（小学校外国語活動）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "エデソル・ドミニク ガイ"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1576.html"
            },
            {
                "tt_num": "G2125",
                "name": "幼児理解（教育（保育）相談を含む。）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2125.html"
            },
            {
                "tt_num": "G3044",
                "name": "日本語学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "前田 広幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3044.html"
            },
            {
                "tt_num": "G3078",
                "name": "日本文学概説Ⅱ",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "日高 佳紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3078.html"
            },
            {
                "tt_num": "G3423",
                "name": "政治学概論（国際政治を含む。）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "浅野 詠子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3423.html"
            },
            {
                "tt_num": "G4735",
                "name": "声楽Ⅱ（Ｙ）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4735.html"
            },
            {
                "tt_num": "G4862",
                "name": "工芸Ⅱ",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4862.html"
            },
            {
                "tt_num": "G5050",
                "name": "古筆研究Ⅰ",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "瀨川 賢一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5050.html"
            },
            {
                "tt_num": "G5308",
                "name": "球技（種目別Ⅰ）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "西田 裕之"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5308.html"
            },
            {
                "tt_num": "G5560",
                "name": "栽培学原論",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5560.html"
            },
            {
                "tt_num": "G6120",
                "name": "心理学概論",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "中山 留美子",
                    "出口 拓彦",
                    "市来 百合子",
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6120.html"
            },
            {
                "tt_num": "G6232",
                "name": "教育社会学特講",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6232.html"
            },
            {
                "tt_num": "G6921",
                "name": "児童家庭福祉論",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6921.html"
            },
            {
                "tt_num": "G1521",
                "name": "★（家庭）",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立松 麻衣子",
                    "杉山 薫",
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1521.html"
            },
            {
                "tt_num": "G1551",
                "name": "小学校家庭",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立松 麻衣子",
                    "杉山 薫",
                    "村上 睦美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1551.html"
            },
            {
                "tt_num": "G1555",
                "name": "小学校英語",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "エデソル・ドミニク ガイ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1555.html"
            },
            {
                "tt_num": "G3030",
                "name": "国語科教育学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3030.html"
            },
            {
                "tt_num": "G3077",
                "name": "日本文学史Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "田村 美由紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3077.html"
            },
            {
                "tt_num": "G3239",
                "name": "国際理解地域研究",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3239.html"
            },
            {
                "tt_num": "G3436",
                "name": "日本史研究Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3436.html"
            },
            {
                "tt_num": "G3703",
                "name": "数理と情報",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3703.html"
            },
            {
                "tt_num": "G3836",
                "name": "確率論Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3836.html"
            },
            {
                "tt_num": "G4284",
                "name": "有機化学実験",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8",
                    "木9"
                ],
                "teacher": [
                    "山崎 祥子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4284.html"
            },
            {
                "tt_num": "G4321",
                "name": "物理学実験（コンピュータ活用を含む。）",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8",
                    "木9"
                ],
                "teacher": [
                    "常田 琢",
                    "松山 豊樹",
                    "中村 元彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4321.html"
            },
            {
                "tt_num": "G4516",
                "name": "合奏Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4516.html"
            },
            {
                "tt_num": "G5226",
                "name": "公衆衛生学",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "笠次 良爾",
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5226.html"
            },
            {
                "tt_num": "G5516",
                "name": "金属工作設計",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5516.html"
            },
            {
                "tt_num": "G5904",
                "name": "肢体不自由の医学と心理",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5904.html"
            },
            {
                "tt_num": "G1001",
                "name": "博物館資料論",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "巽 善信"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1001.html"
            },
            {
                "tt_num": "G2183",
                "name": "子どもと表現",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "劉 麟玉",
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2183.html"
            },
            {
                "tt_num": "G3013",
                "name": "漢字学",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3013.html"
            },
            {
                "tt_num": "G3419",
                "name": "社会科教育研究Ⅳ",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3419.html"
            },
            {
                "tt_num": "G3727",
                "name": "確率論Ⅰ",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3727.html"
            },
            {
                "tt_num": "G4515",
                "name": "指揮法Ⅱ",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4515.html"
            },
            {
                "tt_num": "G4761",
                "name": "オペラⅠ",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4761.html"
            },
            {
                "tt_num": "G4845",
                "name": "絵画Ⅱ(人物画研究）",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4845.html"
            },
            {
                "tt_num": "G5211",
                "name": "スポーツ指導方法論",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "田附 俊一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5211.html"
            },
            {
                "tt_num": "G5562",
                "name": "栽培演習",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5562.html"
            },
            {
                "tt_num": "G6277",
                "name": "教育心理学演習",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "石井 僚"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6277.html"
            },
            {
                "tt_num": "G6282",
                "name": "認知発達演習",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "中山 留美子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6282.html"
            },
            {
                "tt_num": "G6319",
                "name": "学校教育相談演習",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "市来 百合子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6319.html"
            },
            {
                "tt_num": "G2061",
                "name": "初等教科教育法（図画工作）",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2061.html"
            },
            {
                "tt_num": "G2104",
                "name": "初等教科教育法（家庭）",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2104.html"
            },
            {
                "tt_num": "G2232",
                "name": "教科内容研究（保健体育）",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "立 正伸",
                    "高橋 豪仁",
                    "笠次 良爾",
                    "井上 邦子",
                    "髙木 祐介",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2232.html"
            },
            {
                "tt_num": "G4072",
                "name": "文化遺産科学Ⅱ",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "青木 智史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4072.html"
            },
            {
                "tt_num": "G4276",
                "name": "熱とエネルギー",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "平井 國友"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4276.html"
            },
            {
                "tt_num": "G5933",
                "name": "障害児教育方法学演習",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "堀田 千絵"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5933.html"
            },
            {
                "tt_num": "G9970",
                "name": "日本人の宗教観",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9970.html"
            },
            {
                "tt_num": "G1100",
                "name": "読書と豊かな人間性",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "渡邉 良枝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1100.html"
            },
            {
                "tt_num": "G2120",
                "name": "教育・保育とカリキュラム★（幼児と教育）",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2120.html"
            },
            {
                "tt_num": "G2181",
                "name": "子どもと環境",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "森本 弘一",
                    "辻野 亮",
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2181.html"
            },
            {
                "tt_num": "G4256",
                "name": "量子力学の世界",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "松山 豊樹"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4256.html"
            },
            {
                "tt_num": "G4763",
                "name": "演奏実習Ⅰ（Ｂ）",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4763.html"
            },
            {
                "tt_num": "G4815",
                "name": "文化遺産記録保存演習Ⅰ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4815.html"
            },
            {
                "tt_num": "G4852",
                "name": "ユーラシア美術史",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4852.html"
            },
            {
                "tt_num": "G4870",
                "name": "工芸理論特講",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4870.html"
            },
            {
                "tt_num": "G5224",
                "name": "養護概説",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5224.html"
            },
            {
                "tt_num": "G5511",
                "name": "技術教材加工法",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5511.html"
            },
            {
                "tt_num": "G5934",
                "name": "知的障害教育方法",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "堀田 千絵"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5934.html"
            },
            {
                "tt_num": "G6309",
                "name": "生涯教育演習",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6309.html"
            },
            {
                "tt_num": "G6315",
                "name": "学習心理学特講",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6315.html"
            },
            {
                "tt_num": "G6521",
                "name": "国際文化論",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6521.html"
            },
            {
                "tt_num": "G6814",
                "name": "マルチメディア概論",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6814.html"
            },
            {
                "tt_num": "G1108",
                "name": "情報メディアの活用",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1108.html"
            },
            {
                "tt_num": "G2030",
                "name": "中等教科教育法Ⅱ（数学）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "高木 祥司",
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2030.html"
            },
            {
                "tt_num": "G2054",
                "name": "初等教科教育法（音楽）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "劉 麟玉",
                    "宮田 知絵",
                    "宮内 晴加",
                    "山中 信子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2054.html"
            },
            {
                "tt_num": "G2064",
                "name": "中等教科教育法Ⅳ（美術）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2064.html"
            },
            {
                "tt_num": "G2229",
                "name": "教科内容研究（理科）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "石井 俊行",
                    "松井 淳",
                    "石田 正樹",
                    "信川 正順",
                    "梶原 篤",
                    "山崎 祥子",
                    "松山 豊樹",
                    "森本 弘一",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "常田 琢",
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2229.html"
            },
            {
                "tt_num": "G3014",
                "name": "漢文学研究",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3014.html"
            },
            {
                "tt_num": "G3214",
                "name": "英米文学史Ⅱ",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3214.html"
            },
            {
                "tt_num": "G3506",
                "name": "経済学・社会学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3506.html"
            },
            {
                "tt_num": "G3537",
                "name": "哲学",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3537.html"
            },
            {
                "tt_num": "G4009",
                "name": "★（理科教育演習Ⅱ）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "石井 俊行",
                    "松井 淳",
                    "石田 正樹",
                    "信川 正順",
                    "梶原 篤",
                    "山崎 祥子",
                    "松山 豊樹",
                    "森本 弘一",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "常田 琢",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4009.html"
            },
            {
                "tt_num": "G4012",
                "name": "電磁気学",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "中村 元彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4012.html"
            },
            {
                "tt_num": "G4733",
                "name": "ピアノⅡ（Ｂ）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "奥田 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4733.html"
            },
            {
                "tt_num": "G4766",
                "name": "楽式論",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4766.html"
            },
            {
                "tt_num": "G4863",
                "name": "工芸Ⅳ",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4863.html"
            },
            {
                "tt_num": "G5541",
                "name": "情報概論",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5541.html"
            },
            {
                "tt_num": "G5765",
                "name": "家庭看護学（実習を含む。）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5765.html"
            },
            {
                "tt_num": "G6241",
                "name": "教育経営学特講",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6241.html"
            },
            {
                "tt_num": "G6546",
                "name": "日本語演習Ⅱ（読解）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "新谷 遙"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6546.html"
            },
            {
                "tt_num": "G1150",
                "name": "読書と豊かな人間性",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "渡邉 良枝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1150.html"
            },
            {
                "tt_num": "G2185",
                "name": "保育内容の指導法（人間関係）★（幼児と人間関係）",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "吉次 豊見"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2185.html"
            },
            {
                "tt_num": "G3058",
                "name": "古典文学研究",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3058.html"
            },
            {
                "tt_num": "G3216",
                "name": "英米文学作品研究",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3216.html"
            },
            {
                "tt_num": "G3259",
                "name": "言語文化研究Ⅱ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3259.html"
            },
            {
                "tt_num": "G3503",
                "name": "経済学",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3503.html"
            },
            {
                "tt_num": "G3771",
                "name": "複素解析",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3771.html"
            },
            {
                "tt_num": "G4102",
                "name": "天文学",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "信川 正順"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4102.html"
            },
            {
                "tt_num": "G4257",
                "name": "物理学概論Ⅱ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "中村 元彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4257.html"
            },
            {
                "tt_num": "G4512",
                "name": "作曲・編曲法基礎演習Ⅱ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4512.html"
            },
            {
                "tt_num": "G5231",
                "name": "体育原理",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "井上 邦子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5231.html"
            },
            {
                "tt_num": "G5544",
                "name": "栽培環境学",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5544.html"
            },
            {
                "tt_num": "G5552",
                "name": "電気回路学",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5552.html"
            },
            {
                "tt_num": "G5731",
                "name": "調理学実習",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8",
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5731.html"
            },
            {
                "tt_num": "G5776",
                "name": "被服構成学実習Ⅱ（実験を含む。）■（被服学実験）",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8",
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "木林 有理子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5776.html"
            },
            {
                "tt_num": "G5957",
                "name": "病弱児教育方法",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "森脇 勤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5957.html"
            },
            {
                "tt_num": "G6104",
                "name": "幼小期の教育",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6104.html"
            },
            {
                "tt_num": "G6291",
                "name": "心理学検査Ⅱ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "中山 留美子",
                    "出口 拓彦",
                    "石井 僚"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6291.html"
            },
            {
                "tt_num": "G6305",
                "name": "生涯教育計画特講Ⅰ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6305.html"
            },
            {
                "tt_num": "G6547",
                "name": "日本語演習Ⅱ（作文）",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "新谷 遙"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6547.html"
            },
            {
                "tt_num": "G2180",
                "name": "子どもと人間関係",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "吉次 豊見"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2180.html"
            },
            {
                "tt_num": "G3403",
                "name": "倫理学概論",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3403.html"
            },
            {
                "tt_num": "G3504",
                "name": "経済学・社会学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3504.html"
            },
            {
                "tt_num": "G3779",
                "name": "微分積分",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3779.html"
            },
            {
                "tt_num": "G4530",
                "name": "音楽学概論",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "竹内 直"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4530.html"
            },
            {
                "tt_num": "G4635",
                "name": "ピアノⅣ（Ｂ）",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "奥田 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4635.html"
            },
            {
                "tt_num": "G4762",
                "name": "演奏実習Ⅰ（Ａ）",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4762.html"
            },
            {
                "tt_num": "G5504",
                "name": "材料工作実習",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5504.html"
            },
            {
                "tt_num": "G6537",
                "name": "言語文化特論",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "阪村 圭英子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6537.html"
            },
            {
                "tt_num": "G1005",
                "name": "博物館情報・メディア論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "青木 智史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1005.html"
            },
            {
                "tt_num": "G1104",
                "name": "学校図書館メディアの構成",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山本 貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1104.html"
            },
            {
                "tt_num": "G1154",
                "name": "学校図書館メディアの構成",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山本 貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1154.html"
            },
            {
                "tt_num": "G2187",
                "name": "保育内容の指導法（環境Ⅱ）★（幼児と環境Ⅱ）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "藤崎 亜由子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2187.html"
            },
            {
                "tt_num": "G2216",
                "name": "教職実践演習（養教）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "笠次 良爾",
                    "辻井 啓之",
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2216.html"
            },
            {
                "tt_num": "G2230",
                "name": "教科内容研究（音楽）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "劉 麟玉",
                    "前田 則子",
                    "北條 美香代",
                    "水野 亜歴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2230.html"
            },
            {
                "tt_num": "G3544",
                "name": "文化遺産特論Ⅰ（考古学）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3544.html"
            },
            {
                "tt_num": "G3548",
                "name": "文化遺産特論Ⅱ（建築史）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "登谷 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3548.html"
            },
            {
                "tt_num": "G3549",
                "name": "文化遺産科学演習Ⅰ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3549.html"
            },
            {
                "tt_num": "G3806",
                "name": "幾何基礎",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3806.html"
            },
            {
                "tt_num": "G3843",
                "name": "算数・数学教育実践演習Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "高木 祥司",
                    "伊藤 直治",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "近藤 裕",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3843.html"
            },
            {
                "tt_num": "G3845",
                "name": "算数・数学教育実践演習Ⅳ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "伊藤 直治",
                    "高橋 亮",
                    "近藤 裕",
                    "高木 祥司",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3845.html"
            },
            {
                "tt_num": "G4074",
                "name": "文化遺産科学実験Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4074.html"
            },
            {
                "tt_num": "G4231",
                "name": "無機分析化学実験",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "丸尾 雅啓"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4231.html"
            },
            {
                "tt_num": "G4356",
                "name": "動物系統学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "下村 通誉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4356.html"
            },
            {
                "tt_num": "G4359",
                "name": "生物科学特別講義",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4359.html"
            },
            {
                "tt_num": "G4764",
                "name": "オペラⅡ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4764.html"
            },
            {
                "tt_num": "G4874",
                "name": "文化遺産保存修復概論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岡 岩太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4874.html"
            },
            {
                "tt_num": "G4878",
                "name": "絵画Ⅳ（日本画）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "井手本 貴子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4878.html"
            },
            {
                "tt_num": "G4882",
                "name": "グラフィックデザイン",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "吉田 幸代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4882.html"
            },
            {
                "tt_num": "G4883",
                "name": "デザイン理論特講",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "江藤 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4883.html"
            },
            {
                "tt_num": "G4887",
                "name": "日本工芸史",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4887.html"
            },
            {
                "tt_num": "G4888",
                "name": "コンピュータと文化遺産Ⅰ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4888.html"
            },
            {
                "tt_num": "G5022",
                "name": "仮名造形論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "瀨川 賢一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5022.html"
            },
            {
                "tt_num": "G5292",
                "name": "野外活動(雪上)",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "立 正伸",
                    "黒澤 毅",
                    "若吉 浩二"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5292.html"
            },
            {
                "tt_num": "G5303",
                "name": "障害者スポーツ論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5303.html"
            },
            {
                "tt_num": "G5312",
                "name": "予防医学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "冨岡 公子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5312.html"
            },
            {
                "tt_num": "G5314",
                "name": "細菌及び免疫学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "井上 寛一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5314.html"
            },
            {
                "tt_num": "G5315",
                "name": "疾病予防及び看護学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "木村 洋子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5315.html"
            },
            {
                "tt_num": "G5564",
                "name": "職業指導",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山本 桂子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5564.html"
            },
            {
                "tt_num": "G5774",
                "name": "衣生活文化論（実習を含む。）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "池田 仁美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5774.html"
            },
            {
                "tt_num": "G5912",
                "name": "聴覚障害児の教育Ⅰ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "中井 弘征"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5912.html"
            },
            {
                "tt_num": "G5917",
                "name": "聴覚障害児の教育Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "中井 弘征"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5917.html"
            },
            {
                "tt_num": "G5955",
                "name": "障害者福祉論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "趙 没名"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5955.html"
            },
            {
                "tt_num": "G5958",
                "name": "発達障害児生活指導論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "森下 勇"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5958.html"
            },
            {
                "tt_num": "G5964",
                "name": "特別支援教育実践演習Ⅰ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5964.html"
            },
            {
                "tt_num": "G6296",
                "name": "学校臨床心理学特講",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "竹島 克典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6296.html"
            },
            {
                "tt_num": "G6312",
                "name": "教育評価",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岡本 真彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6312.html"
            },
            {
                "tt_num": "G6314",
                "name": "社会心理学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "諏訪 晃一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6314.html"
            },
            {
                "tt_num": "G6321",
                "name": "生涯学習支援特講Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6321.html"
            },
            {
                "tt_num": "G8074",
                "name": "保育実習（保育所Ⅱ）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "横山 真貴子",
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8074.html"
            },
            {
                "tt_num": "G8075",
                "name": "保育実習（施設）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8075.html"
            },
            {
                "tt_num": "G9980",
                "name": "学級づくり",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "粕谷 貴志"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9980.html"
            },
            {
                "tt_num": "G9985",
                "name": "新理数基礎ゼミナールⅡ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9985.html"
            },
            {
                "tt_num": "G9987",
                "name": "新理数教育Ⅳ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9987.html"
            },
            {
                "tt_num": "G9989",
                "name": "新理数教育Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9989.html"
            },
            {
                "tt_num": "G1552",
                "name": "小学校英語",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "エデソル・ドミニク ガイ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1552.html"
            },
            {
                "tt_num": "G1556",
                "name": "小学校家庭",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立松 麻衣子",
                    "杉山 薫",
                    "村上 睦美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1556.html"
            },
            {
                "tt_num": "G1003",
                "name": "博物館実習",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "金原 正明",
                    "巽 善信",
                    "荻野 裕子",
                    "齊藤 純"
                ],
                "credits": 3,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1003.html"
            },
            {
                "tt_num": "G3520",
                "name": "地理学野外実験",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "河本 大地",
                    "根田 克彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3520.html"
            },
            {
                "tt_num": "G5294",
                "name": "地域スポーツ実習",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "井上 邦子",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5294.html"
            },
            {
                "tt_num": "G5301",
                "name": "保健体育演習",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "立 正伸",
                    "高橋 豪仁",
                    "笠次 良爾",
                    "井上 邦子",
                    "髙木 祐介",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5301.html"
            },
            {
                "tt_num": "G8071",
                "name": "事前・事後指導（保育実習Ⅰ）",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "横山 真貴子",
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8071.html"
            },
            {
                "tt_num": "G8076",
                "name": "事前・事後指導（保育実習Ⅱ）",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "横山 真貴子",
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8076.html"
            },
            {
                "tt_num": "G9979",
                "name": "学校支援実践",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "柿本 篤子",
                    "竹村 謙司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9979.html"
            }
        ]
    }
    var table = '<tr><th>時間割番号</th><th>科目名</th><th>開講期間</th><th>曜日・時限</th><th>単位数</th><th>教員名</th></tr>';
    for (var i = 0; i < data["subject"].length; i++) {
        var period;
        var teacher;
        for (var j = 0; j < data["subject"][i]["period"].length; j++) {
            if (j == 0) {
                period = data["subject"][i]["period"][j]
            } else {
                period += "，" + data["subject"][i]["period"][j]
            }
        }
        for (var k = 0; k < data["subject"][i]["teacher"].length; k++) {
            if (k == 0) {
                teacher = data["subject"][i]["teacher"][k]
            } else {
                teacher += "<br>" + data["subject"][i]["teacher"][k]
            }
        }
        table += '<tr><td>' + data["subject"][i]["tt_num"] + "</td><td>" + data["subject"][i]["name"] + '<br><a href="' + data["subject"][i]["page"] + '"class="syllabus" target="_blank">シラバス</a></td><td>' + data["subject"][i]["semester"] + "</td><td>" + period + "</td><td>" + data["subject"][i]["credits"] + "</td><td>" + teacher + "</td></tr>"
    }
    document.getElementById('data_content').innerHTML = '<table border="1">' + table + '</table>';
}

function change() {
    const tt_num = "G" + document.getElementById('tt_num').value
    const name = document.getElementById('name').value
    let semester_elements = document.getElementsByName('semester');
    let len = semester_elements.length;
    let semester = '';
    for (let l = 0; l < len; l++) {
        if (semester_elements.item(l).checked) {
            semester = semester_elements.item(l).value;
        }
    }
    if (semester == "すべて") {
        semester = ""
    }
    const period_arr = [];
    const period_element = document.getElementsByName('period');

    for (let i = 0; i < period_element.length; i++) {
        if (period_element[i].checked) {
            period_arr.push(period_element[i].value);
        }
    }

    var data = {
        "subject": [{
                "tt_num": "G0052",
                "name": "フィールドワークで地域に学ぶ",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0052.html"
            },
            {
                "tt_num": "G0002",
                "name": "ＥＳＤ-ＳＤＧｓ基礎論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0002.html"
            },
            {
                "tt_num": "G0041",
                "name": "戦後東アジアの残留日本人",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0041.html"
            },
            {
                "tt_num": "G0011",
                "name": "ＥＳＤ-ＳＤＧｓ基礎論",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0011.html"
            },
            {
                "tt_num": "G0040",
                "name": "ESDと生活科・総合的な学習の時間",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0040.html"
            },
            {
                "tt_num": "G0030",
                "name": "人権と教育",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0030.html"
            },
            {
                "tt_num": "G0036",
                "name": "探す・作る・伝えるアート",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0036.html"
            },
            {
                "tt_num": "G0003",
                "name": "ＥＳＤ概論",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0003.html"
            },
            {
                "tt_num": "G0042",
                "name": "仮名書道と実用書",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0042.html"
            },
            {
                "tt_num": "G0044",
                "name": "奈良と文学",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0044.html"
            },
            {
                "tt_num": "G8501",
                "name": "大学で学び直す「高校世界史」",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8501.html"
            },
            {
                "tt_num": "G0004",
                "name": "ＥＳＤ概論",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0004.html"
            },
            {
                "tt_num": "G0005",
                "name": "ＥＳＤと世界遺産",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0005.html"
            },
            {
                "tt_num": "G0009",
                "name": "「日の丸・君が代問題」の歴史的考察",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0009.html"
            },
            {
                "tt_num": "G0097",
                "name": "古典文学再入門　『竹取物語』を読み直す",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0097.html"
            },
            {
                "tt_num": "G0078",
                "name": "科学技術の歴史と身の回りの物質",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0078.html"
            },
            {
                "tt_num": "G0028",
                "name": "母と子の健康科学",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0028.html"
            },
            {
                "tt_num": "G0037",
                "name": "コミュニケーションワークショップ",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中山 留美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0037.html"
            },
            {
                "tt_num": "G0060",
                "name": "先端科学の基礎概念",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0060.html"
            },
            {
                "tt_num": "G0043",
                "name": "考古学と自然科学",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0043.html"
            },
            {
                "tt_num": "G0031",
                "name": "健康とライフスタイル",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "辻井 啓之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0031.html"
            },
            {
                "tt_num": "G0077",
                "name": "運動と健康",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0077.html"
            },
            {
                "tt_num": "G0072",
                "name": "数理の世界",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "高橋 亮",
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0072.html"
            },
            {
                "tt_num": "G0063",
                "name": "Science lesson in English",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "森本 弘一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0063.html"
            },
            {
                "tt_num": "G0038",
                "name": "サバイバルロジカルシンキング",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "中村 元彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0038.html"
            },
            {
                "tt_num": "G0080",
                "name": "キャリア形成と人権",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0080.html"
            },
            {
                "tt_num": "G0006",
                "name": "教師のための多様性理解",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "生田 周二",
                    "越野 和之",
                    "今 正秀",
                    "吉村 雅仁",
                    "河崎 智恵",
                    "和泉元 千春",
                    "橋崎 頼子",
                    "前田 康二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0006.html"
            },
            {
                "tt_num": "G0007",
                "name": "奈良と教育　-ここはどこ？　私はだれ？-",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "赤沢 早人",
                    "西村 拓生"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0007.html"
            },
            {
                "tt_num": "G8503",
                "name": "ESDと学校教育",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "中澤 静男",
                    "大西 浩明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8503.html"
            },
            {
                "tt_num": "G0010",
                "name": "教職へのキャリアデザイン",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "阪東 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0010.html"
            },
            {
                "tt_num": "G8502",
                "name": "教師力ケースメソッド",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "柿本 篤子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8502.html"
            },
            {
                "tt_num": "G0106",
                "name": "英語Ａ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0106.html"
            },
            {
                "tt_num": "G0110",
                "name": "英語Ｂ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0110.html"
            },
            {
                "tt_num": "G0114",
                "name": "英語Ｃ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0114.html"
            },
            {
                "tt_num": "G0116",
                "name": "英語Ｅ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "藤岡 住恵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0116.html"
            },
            {
                "tt_num": "G0119",
                "name": "英語Ｄ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0119.html"
            },
            {
                "tt_num": "G0300",
                "name": "日本語Ⅰ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0300.html"
            },
            {
                "tt_num": "G0302",
                "name": "日本語Ⅱ",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "湯通堂 誠"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0302.html"
            },
            {
                "tt_num": "G0101",
                "name": "英語Ｈ",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "徳永 和博"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0101.html"
            },
            {
                "tt_num": "G0104",
                "name": "英語Ｇ",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0104.html"
            },
            {
                "tt_num": "G0107",
                "name": "英語Ｆ",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "竹澤 由記子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0107.html"
            },
            {
                "tt_num": "G0112",
                "name": "英語Ｉ",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "山本 修"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0112.html"
            },
            {
                "tt_num": "G0108",
                "name": "英語Ａ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0108.html"
            },
            {
                "tt_num": "G0111",
                "name": "英語Ｂ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0111.html"
            },
            {
                "tt_num": "G0115",
                "name": "英語Ｃ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0115.html"
            },
            {
                "tt_num": "G0117",
                "name": "英語Ｅ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "藤岡 住恵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0117.html"
            },
            {
                "tt_num": "G0120",
                "name": "英語Ｄ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0120.html"
            },
            {
                "tt_num": "G0301",
                "name": "日本語Ⅰ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0301.html"
            },
            {
                "tt_num": "G0303",
                "name": "日本語Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "湯通堂 誠"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0303.html"
            },
            {
                "tt_num": "G0105",
                "name": "英語Ｇ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0105.html"
            },
            {
                "tt_num": "G0109",
                "name": "英語Ｆ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "竹澤 由記子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0109.html"
            },
            {
                "tt_num": "G0113",
                "name": "英語Ｉ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "山本 修"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0113.html"
            },
            {
                "tt_num": "G0153",
                "name": "英語Ｈ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "徳永 和博"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0153.html"
            },
            {
                "tt_num": "G0121",
                "name": "独語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "田島 昭洋"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0121.html"
            },
            {
                "tt_num": "G0125",
                "name": "仏語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "岩村 和泉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0125.html"
            },
            {
                "tt_num": "G0127",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "荊 明月"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0127.html"
            },
            {
                "tt_num": "G0133",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "趙 杰"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0133.html"
            },
            {
                "tt_num": "G0135",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "楊 莉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0135.html"
            },
            {
                "tt_num": "G0160",
                "name": "韓国語",
                "semester": "通年",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "丹原 邦博"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0160.html"
            },
            {
                "tt_num": "G0122",
                "name": "独語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "田島 昭洋"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0122.html"
            },
            {
                "tt_num": "G0128",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "楊 莉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0128.html"
            },
            {
                "tt_num": "G0134",
                "name": "中国語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0134.html"
            },
            {
                "tt_num": "G0145",
                "name": "仏語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "阪村 圭英子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0145.html"
            },
            {
                "tt_num": "G0161",
                "name": "韓国語",
                "semester": "通年",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "丹原 邦博"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0161.html"
            },
            {
                "tt_num": "G0600",
                "name": "体育実技Ⅰ（種目分け以前）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "松井 良明",
                    "竹村 匡弥",
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0600.html"
            },
            {
                "tt_num": "G0613",
                "name": "体育実技Ⅰ（運動場）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "松井 良明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0613.html"
            },
            {
                "tt_num": "G0614",
                "name": "体育実技Ⅰ（バドミントン）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "竹村 匡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0614.html"
            },
            {
                "tt_num": "G0615",
                "name": "体育実技Ⅰ（テニス）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0615.html"
            },
            {
                "tt_num": "G0621",
                "name": "体育実技Ⅰ（アクティブフイットネス）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0621.html"
            },
            {
                "tt_num": "G0601",
                "name": "体育実技Ⅱ（種目分け以前）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "松井 良明",
                    "竹村 匡弥",
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0601.html"
            },
            {
                "tt_num": "G0617",
                "name": "体育実技Ⅱ（運動場）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "松井 良明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0617.html"
            },
            {
                "tt_num": "G0618",
                "name": "体育実技Ⅱ（バドミントン）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "竹村 匡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0618.html"
            },
            {
                "tt_num": "G0619",
                "name": "体育実技Ⅱ（テニス）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0619.html"
            },
            {
                "tt_num": "G0622",
                "name": "体育実技Ⅱ（アクティブフィットネス）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0622.html"
            },
            {
                "tt_num": "G0602",
                "name": "体育実技Ⅰ（種目分け以前）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "立 正伸",
                    "井上 洋一",
                    "吉田 寿",
                    "髙木 祐介"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0602.html"
            },
            {
                "tt_num": "G0604",
                "name": "体育実技Ⅰ（バドミントン）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0604.html"
            },
            {
                "tt_num": "G0605",
                "name": "体育実技Ⅰ（テニス）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "井上 洋一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0605.html"
            },
            {
                "tt_num": "G0606",
                "name": "体育実技Ⅰ（アクティブフィットネス）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "吉田 寿"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0606.html"
            },
            {
                "tt_num": "G0607",
                "name": "体育実技Ⅰ（運動場）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0607.html"
            },
            {
                "tt_num": "G0603",
                "name": "体育実技Ⅱ（種目分け以前）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立 正伸",
                    "吉田 寿",
                    "髙木 祐介",
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0603.html"
            },
            {
                "tt_num": "G0608",
                "name": "体育実技Ⅱ（バドミントン）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0608.html"
            },
            {
                "tt_num": "G0609",
                "name": "体育実技Ⅱ（運動場）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0609.html"
            },
            {
                "tt_num": "G0610",
                "name": "体育実技Ⅱ（アクティブフィットネス）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "吉田 寿"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0610.html"
            },
            {
                "tt_num": "G0611",
                "name": "体育実技Ⅱ（テニス）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0611.html"
            },
            {
                "tt_num": "G0505",
                "name": "情報機器の操作",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0505.html"
            },
            {
                "tt_num": "G0502",
                "name": "情報機器の操作",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0502.html"
            },
            {
                "tt_num": "G0501",
                "name": "情報機器の操作",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0501.html"
            },
            {
                "tt_num": "G0503",
                "name": "情報機器の操作",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "伊藤 直治",
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0503.html"
            },
            {
                "tt_num": "G0400",
                "name": "日本国憲法",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0400.html"
            },
            {
                "tt_num": "G0401",
                "name": "日本国憲法",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0401.html"
            },
            {
                "tt_num": "G0210",
                "name": "外国語コミュニケーション（英語）Ｂ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0210.html"
            },
            {
                "tt_num": "G0214",
                "name": "外国語コミュニケーション（英語）Ｃ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0214.html"
            },
            {
                "tt_num": "G0216",
                "name": "外国語コミュニケーション（英語）Ｅ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0216.html"
            },
            {
                "tt_num": "G0219",
                "name": "外国語コミュニケーション（英語）Ｄ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "藤岡 住恵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0219.html"
            },
            {
                "tt_num": "G0223",
                "name": "外国語コミュニケーション（英語）Ａ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0223.html"
            },
            {
                "tt_num": "G0200",
                "name": "外国語コミュニケーション（英語）Ｊ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "徳永 和博"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0200.html"
            },
            {
                "tt_num": "G0201",
                "name": "外国語コミュニケーション（英語）Ｇ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0201.html"
            },
            {
                "tt_num": "G0202",
                "name": "外国語コミュニケーション（英語）Ｋ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0202.html"
            },
            {
                "tt_num": "G0204",
                "name": "外国語コミュニケーション（英語）Ｈ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "竹澤 由記子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0204.html"
            },
            {
                "tt_num": "G0212",
                "name": "外国語コミュニケーション（英語）Ｉ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "山本 修"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0212.html"
            },
            {
                "tt_num": "G0129",
                "name": "外国語コミュニケーション（中国語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "荊 明月"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0129.html"
            },
            {
                "tt_num": "G0131",
                "name": "外国語コミュニケーション（中国語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "趙 杰"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0131.html"
            },
            {
                "tt_num": "G0137",
                "name": "外国語コミュニケーション（独語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "田島 昭洋"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0137.html"
            },
            {
                "tt_num": "G0147",
                "name": "外国語コミュニケーション（仏語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "岩村 和泉"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0147.html"
            },
            {
                "tt_num": "G0226",
                "name": "外国語コミュニケーション（韓国語）Ａ",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "井上 直樹"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0226.html"
            },
            {
                "tt_num": "G0211",
                "name": "外国語コミュニケーション（英語）Ｍ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0211.html"
            },
            {
                "tt_num": "G0215",
                "name": "外国語コミュニケーション（英語）Ｎ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0215.html"
            },
            {
                "tt_num": "G0217",
                "name": "外国語コミュニケーション（英語）Ｐ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0217.html"
            },
            {
                "tt_num": "G0220",
                "name": "外国語コミュニケーション（英語）Ｏ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "藤岡 住恵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0220.html"
            },
            {
                "tt_num": "G0224",
                "name": "外国語コミュニケーション（英語）Ｌ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0224.html"
            },
            {
                "tt_num": "G0203",
                "name": "外国語コミュニケーション（英語）Ｖ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0203.html"
            },
            {
                "tt_num": "G0205",
                "name": "外国語コミュニケーション（英語）Ｓ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "竹澤 由記子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0205.html"
            },
            {
                "tt_num": "G0213",
                "name": "外国語コミュニケーション（英語）Ｔ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "山本 修"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0213.html"
            },
            {
                "tt_num": "G0221",
                "name": "外国語コミュニケーション（英語）Ｒ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0221.html"
            },
            {
                "tt_num": "G0222",
                "name": "外国語コミュニケーション（英語）Ｕ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "徳永 和博"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0222.html"
            },
            {
                "tt_num": "G0130",
                "name": "外国語コミュニケーション（中国語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "荊 明月"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0130.html"
            },
            {
                "tt_num": "G0132",
                "name": "外国語コミュニケーション（中国語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "趙 杰"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0132.html"
            },
            {
                "tt_num": "G0140",
                "name": "外国語コミュニケーション（独語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "田島 昭洋"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0140.html"
            },
            {
                "tt_num": "G0146",
                "name": "外国語コミュニケーション（仏語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "岩村 和泉"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0146.html"
            },
            {
                "tt_num": "G0227",
                "name": "外国語コミュニケーション（韓国語）Ｂ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "井上 直樹"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0227.html"
            },
            {
                "tt_num": "G2222",
                "name": "特別支援教育論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "越野 和之",
                    "木下 理恵",
                    "富井 奈菜実",
                    "堀田 千絵",
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2222.html"
            },
            {
                "tt_num": "G2132",
                "name": "教育基礎論",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2132.html"
            },
            {
                "tt_num": "G2134",
                "name": "教育基礎論",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2134.html"
            },
            {
                "tt_num": "G2148",
                "name": "教育基礎論",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2148.html"
            },
            {
                "tt_num": "G2149",
                "name": "教育基礎論",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2149.html"
            },
            {
                "tt_num": "G2123",
                "name": "教育心理学",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2123.html"
            },
            {
                "tt_num": "G2153",
                "name": "教育心理学",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2153.html"
            },
            {
                "tt_num": "G2140",
                "name": "教育社会学",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2140.html"
            },
            {
                "tt_num": "G2157",
                "name": "教育経営行政論",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2157.html"
            },
            {
                "tt_num": "G2128",
                "name": "カリキュラム論A▲（カリキュラム論（初等））",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2128.html"
            },
            {
                "tt_num": "G2137",
                "name": "カリキュラム論B▲（カリキュラム論（中等））",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2137.html"
            },
            {
                "tt_num": "G2129",
                "name": "カリキュラム論B▲（カリキュラム論（中等））",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2129.html"
            },
            {
                "tt_num": "G2147",
                "name": "カリキュラム論A▲（カリキュラム論（初等））",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2147.html"
            },
            {
                "tt_num": "G2240",
                "name": "特別支援教育論",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "越野 和之",
                    "木下 理恵",
                    "富井 奈菜実",
                    "堀田 千絵",
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2240.html"
            },
            {
                "tt_num": "G2144",
                "name": "教育経営行政論",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2144.html"
            },
            {
                "tt_num": "G2158",
                "name": "教育社会学",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2158.html"
            },
            {
                "tt_num": "G2156",
                "name": "学習心理学",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2156.html"
            },
            {
                "tt_num": "G2220",
                "name": "現代教師論Ａ",
                "semester": "通年",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "橋崎 頼子",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "笠次 良爾",
                    "世良 啓太",
                    "山中 矢展",
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2220.html"
            },
            {
                "tt_num": "G2221",
                "name": "現代教師論Ｂ",
                "semester": "通年",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "石井 僚",
                    "石田 正樹",
                    "和田 穣隆",
                    "米倉 陽子",
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2221.html"
            },
            {
                "tt_num": "G2242",
                "name": "現代教師論Ｃ",
                "semester": "通年",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "横山 真貴子",
                    "大山 明彦",
                    "金原 正明",
                    "橋本 昭典",
                    "北條 美香代",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2242.html"
            },
            {
                "tt_num": "G2243",
                "name": "現代教師論Ｄ",
                "semester": "通年",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "堀田 千絵",
                    "太田 満",
                    "渡邉 伸一",
                    "豊田 宗児",
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2243.html"
            },
            {
                "tt_num": "G2220",
                "name": "現代教師論Ａ",
                "semester": "通年",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "橋崎 頼子",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "笠次 良爾",
                    "世良 啓太",
                    "山中 矢展",
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2220.html"
            },
            {
                "tt_num": "G2221",
                "name": "現代教師論Ｂ",
                "semester": "通年",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "石井 僚",
                    "石田 正樹",
                    "和田 穣隆",
                    "米倉 陽子",
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2221.html"
            },
            {
                "tt_num": "G2242",
                "name": "現代教師論Ｃ",
                "semester": "通年",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "横山 真貴子",
                    "大山 明彦",
                    "金原 正明",
                    "橋本 昭典",
                    "北條 美香代",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2242.html"
            },
            {
                "tt_num": "G2243",
                "name": "現代教師論Ｄ",
                "semester": "通年",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "堀田 千絵",
                    "太田 満",
                    "渡邉 伸一",
                    "豊田 宗児",
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2243.html"
            },
            {
                "tt_num": "G1568",
                "name": "生徒指導・キャリア教育★（生徒指導・教育相談ⅠA)",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "石井 僚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1568.html"
            },
            {
                "tt_num": "G1569",
                "name": "生徒指導・キャリア教育★（生徒指導・教育相談ⅠA)",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "中山 留美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1569.html"
            },
            {
                "tt_num": "G1564",
                "name": "教育方法論★（教育方法・メディアA)",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1564.html"
            },
            {
                "tt_num": "G1565",
                "name": "教育方法論★（教育方法・メディアB）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "柿本 篤子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1565.html"
            },
            {
                "tt_num": "G1570",
                "name": "生徒指導・キャリア教育★（生徒指導・教育相談ⅠB）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1570.html"
            },
            {
                "tt_num": "G1571",
                "name": "生徒指導・キャリア教育★（生徒指導・教育相談ⅠB）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "出口 拓彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1571.html"
            },
            {
                "tt_num": "G1566",
                "name": "教育方法論★（教育方法・メディアA)",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1566.html"
            },
            {
                "tt_num": "G1567",
                "name": "教育方法論★（教育方法・メディアB）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "柿本 篤子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1567.html"
            },
            {
                "tt_num": "G2020",
                "name": "道徳教育の理論と方法B▲（道徳教育の理論と方法（中等））",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2020.html"
            },
            {
                "tt_num": "G2130",
                "name": "道徳教育の理論と方法A▲（道徳教育の理論と方法（初等））",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2130.html"
            },
            {
                "tt_num": "G2143",
                "name": "★（特別活動の理論と方法B▲（特別活動の理論と方法（中等）））",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2143.html"
            },
            {
                "tt_num": "G2223",
                "name": "総合的な学習の時間の指導法",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2223.html"
            },
            {
                "tt_num": "G1572",
                "name": "教育相談・進路指導（キャリア・カウンセリングを含む。）★（生徒指導・教育相談ⅡＡ）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "粕谷 貴志"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1572.html"
            },
            {
                "tt_num": "G1573",
                "name": "教育相談・進路指導（キャリア・カウンセリングを含む。）★（生徒指導・教育相談ⅡＡ）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "市来 百合子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1573.html"
            },
            {
                "tt_num": "G2241",
                "name": "総合的な学習の時間の指導法",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2241.html"
            },
            {
                "tt_num": "G1574",
                "name": "教育相談・進路指導（キャリアカウンセリングを含む。））★（生徒指導・教育相談ⅡＢ）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "粕谷 貴志"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1574.html"
            },
            {
                "tt_num": "G2029",
                "name": "道徳教育の理論と方法B▲（道徳教育の理論と方法（中等））",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2029.html"
            },
            {
                "tt_num": "G2131",
                "name": "道徳教育の理論と方法A▲（道徳教育の理論と方法（初等））",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2131.html"
            },
            {
                "tt_num": "G2224",
                "name": "特別活動の理論と方法B",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2224.html"
            },
            {
                "tt_num": "G2237",
                "name": "特別活動の理論と方法A",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2237.html"
            },
            {
                "tt_num": "G2199",
                "name": "教職実践演習（幼小中高）〔教育学〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "橋崎 頼子",
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2199.html"
            },
            {
                "tt_num": "G2200",
                "name": "教職実践演習（幼小中高）〔心理〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "出口 拓彦",
                    "中山 留美子",
                    "石井 僚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2200.html"
            },
            {
                "tt_num": "G2201",
                "name": "教職実践演習（幼小中高）〔幼稚園〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2201.html"
            },
            {
                "tt_num": "G2202",
                "name": "教職実践演習（幼小中高）〔特別支援〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "越野 和之",
                    "木下 理恵",
                    "富井 奈菜実",
                    "中西 陽",
                    "堀田 千絵",
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2202.html"
            },
            {
                "tt_num": "G2203",
                "name": "教職実践演習（幼小中高）〔国語〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "棚橋 尚子",
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2203.html"
            },
            {
                "tt_num": "G2204",
                "name": "教職実践演習（幼小中高）〔社会〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "西田 慎",
                    "太田 満",
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2204.html"
            },
            {
                "tt_num": "G2205",
                "name": "教職実践演習（幼小中高）〔数学〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "伊藤 直治",
                    "高橋 亮",
                    "近藤 裕",
                    "高木 祥司",
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2205.html"
            },
            {
                "tt_num": "G2206",
                "name": "教職実践演習（幼小中高）〔理科〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "森本 弘一",
                    "金原 正明",
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2206.html"
            },
            {
                "tt_num": "G2207",
                "name": "教職実践演習（幼小中高）〔音楽〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "北條 美香代",
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2207.html"
            },
            {
                "tt_num": "G2208",
                "name": "教職実践演習（幼小中高）〔美術〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "宇田 秀士",
                    "竹内 晋平",
                    "大山 明彦",
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2208.html"
            },
            {
                "tt_num": "G2209",
                "name": "教職実践演習（幼小中高）〔保健体育〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "髙木 祐介",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2209.html"
            },
            {
                "tt_num": "G2210",
                "name": "教職実践演習（幼小中高）〔家庭〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "杉山 薫",
                    "中川 愛",
                    "立松 麻衣子",
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2210.html"
            },
            {
                "tt_num": "G2211",
                "name": "教職実践演習（幼小中高）〔技術〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "世良 啓太",
                    "薮 哲郎",
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2211.html"
            },
            {
                "tt_num": "G2212",
                "name": "教職実践演習（幼小中高）〔英語〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2212.html"
            },
            {
                "tt_num": "G2217",
                "name": "教職実践演習（幼小中高）〔大学院〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2217.html"
            },
            {
                "tt_num": "G2218",
                "name": "教職実践演習（幼小中高）〔書道〕",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "谷川 雅夫",
                    "豊田 宗児"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2218.html"
            },
            {
                "tt_num": "G0251",
                "name": "板書実践指導A",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "谷川 雅夫",
                    "赤沢 早人",
                    "福光 佐今",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0251.html"
            },
            {
                "tt_num": "G0252",
                "name": "板書実践指導B",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "豊田 宗児",
                    "赤沢 早人",
                    "福光 佐今",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0252.html"
            },
            {
                "tt_num": "G0253",
                "name": "板書実践指導C",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "福光 佐今",
                    "赤沢 早人",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0253.html"
            },
            {
                "tt_num": "G0254",
                "name": "板書実践指導D",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "北山 聡佳",
                    "赤沢 早人",
                    "福光 佐今",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0254.html"
            },
            {
                "tt_num": "G0255",
                "name": "板書実践指導A",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "谷川 雅夫",
                    "赤沢 早人",
                    "福光 佐今",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0255.html"
            },
            {
                "tt_num": "G0256",
                "name": "板書実践指導B",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "豊田 宗児",
                    "赤沢 早人",
                    "福光 佐今",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0256.html"
            },
            {
                "tt_num": "G0257",
                "name": "板書実践指導C",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "福光 佐今",
                    "赤沢 早人",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏",
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0257.html"
            },
            {
                "tt_num": "G0258",
                "name": "板書実践指導D",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "北山 聡佳",
                    "赤沢 早人",
                    "福光 佐今",
                    "豊田 宗児",
                    "伊藤 剛和",
                    "谷川 雅夫",
                    "古田 壮宏"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0258.html"
            },
            {
                "tt_num": "G2225",
                "name": "学校フィールド演習Ⅱ（学校インターンシップ）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "竹村 謙司",
                    "柿本 篤子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2225.html"
            },
            {
                "tt_num": "G1578",
                "name": "学校フィールド演習Ⅰ（学校体験活動）",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1578.html"
            },
            {
                "tt_num": "G1578",
                "name": "学校フィールド演習Ⅰ（学校体験活動）",
                "semester": "通年",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1578.html"
            },
            {
                "tt_num": "G2161",
                "name": "★（教職入門）",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2161.html"
            },
            {
                "tt_num": "G2135",
                "name": "★（現代教師論）",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2135.html"
            },
            {
                "tt_num": "G2145",
                "name": "★（特別活動の理論と方法A▲（特別活動の理論と方法（初等）））",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2145.html"
            },
            {
                "tt_num": "G1531",
                "name": "★（教育実践基礎演習）",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1531.html"
            },
            {
                "tt_num": "G2021",
                "name": "初等教科教育法（社会）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2021.html"
            },
            {
                "tt_num": "G2022",
                "name": "初等教科教育法（社会）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2022.html"
            },
            {
                "tt_num": "G2045",
                "name": "中等教科教育法Ⅲ（理科）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "山崎 祥子",
                    "松山 豊樹",
                    "片岡 佐知子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2045.html"
            },
            {
                "tt_num": "G3447",
                "name": "日本史研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3447.html"
            },
            {
                "tt_num": "G3455",
                "name": "西洋史研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3455.html"
            },
            {
                "tt_num": "G3484",
                "name": "産業地域論",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3484.html"
            },
            {
                "tt_num": "G4727",
                "name": "ピアノⅠ（Ｂ）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "奥田 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4727.html"
            },
            {
                "tt_num": "G4730",
                "name": "声楽Ⅰ（Ｘ）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4730.html"
            },
            {
                "tt_num": "G4753",
                "name": "演奏法Ⅰ（声楽）（Ｙ）",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4753.html"
            },
            {
                "tt_num": "G4841",
                "name": "彩画",
                "semester": "前期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4841.html"
            },
            {
                "tt_num": "G1537",
                "name": "小学校国語（書写を含む。）★（国語（書写を含む。）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "有馬 義貴",
                    "前田 広幸",
                    "日高 佳紀",
                    "橋本 昭典",
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1537.html"
            },
            {
                "tt_num": "G2032",
                "name": "中等教科教育法Ⅲ（数学）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2032.html"
            },
            {
                "tt_num": "G3517",
                "name": "経済学・社会学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3517.html"
            },
            {
                "tt_num": "G4767",
                "name": "演奏実習Ⅱ（Ａ）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4767.html"
            },
            {
                "tt_num": "G4866",
                "name": "彩色実技",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4866.html"
            },
            {
                "tt_num": "G4891",
                "name": "彩画",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4891.html"
            },
            {
                "tt_num": "G5021",
                "name": "仮名作品研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5021.html"
            },
            {
                "tt_num": "G5030",
                "name": "書道（書写を中心とする。）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5030.html"
            },
            {
                "tt_num": "G5305",
                "name": "スポーツトレーニング論（演習を含む。）",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5305.html"
            },
            {
                "tt_num": "G5540",
                "name": "情報技術演習",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5540.html"
            },
            {
                "tt_num": "G5558",
                "name": "情報社会と法・倫理",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "伊藤 剛和",
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5558.html"
            },
            {
                "tt_num": "G5713",
                "name": "栄養生理学",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5713.html"
            },
            {
                "tt_num": "G5911",
                "name": "特別支援教育の行政と制度",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5911.html"
            },
            {
                "tt_num": "G6122",
                "name": "保育実践指導論",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "廣瀬 聡弥",
                    "横山 真貴子",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6122.html"
            },
            {
                "tt_num": "G6902",
                "name": "ものづくり学",
                "semester": "前期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6902.html"
            },
            {
                "tt_num": "G1515",
                "name": "★（図画工作）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "新田 恭子",
                    "川北 成彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1515.html"
            },
            {
                "tt_num": "G1541",
                "name": "小学校生活",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1541.html"
            },
            {
                "tt_num": "G1547",
                "name": "小学校図画工作",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "川北 成彦",
                    "新田 恭子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1547.html"
            },
            {
                "tt_num": "G2024",
                "name": "中等教科教育法Ⅰ(社会・地歴)",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2024.html"
            },
            {
                "tt_num": "G2035",
                "name": "中等教科教育法Ⅳ（数学）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "近藤 裕"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2035.html"
            },
            {
                "tt_num": "G2106",
                "name": "中等教科教育法Ⅲ（家庭）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2106.html"
            },
            {
                "tt_num": "G2188",
                "name": "保育内容の指導法（言葉）★（幼児と言葉）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "横山 真貴子",
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2188.html"
            },
            {
                "tt_num": "G3059",
                "name": "日本文学特講",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "横山 恵理"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3059.html"
            },
            {
                "tt_num": "G3221",
                "name": "国際理解教育演習Ⅱ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "吉村 公宏"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3221.html"
            },
            {
                "tt_num": "G3273",
                "name": "英会話Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3273.html"
            },
            {
                "tt_num": "G3411",
                "name": "社会科教育研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3411.html"
            },
            {
                "tt_num": "G3433",
                "name": "日本史研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3433.html"
            },
            {
                "tt_num": "G3441",
                "name": "法学・政治学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3441.html"
            },
            {
                "tt_num": "G3452",
                "name": "西洋史研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3452.html"
            },
            {
                "tt_num": "G3511",
                "name": "経済学・社会学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3511.html"
            },
            {
                "tt_num": "G3522",
                "name": "地理学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "河本 大地",
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3522.html"
            },
            {
                "tt_num": "G3528",
                "name": "地理学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "河本 大地",
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3528.html"
            },
            {
                "tt_num": "G4122",
                "name": "生態学実験",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6",
                    "月7"
                ],
                "teacher": [
                    "松井 淳",
                    "辻野 亮",
                    "村松 大輔"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4122.html"
            },
            {
                "tt_num": "G4768",
                "name": "演奏実習Ⅱ（Ｂ）",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4768.html"
            },
            {
                "tt_num": "G5032",
                "name": "行書法",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5032.html"
            },
            {
                "tt_num": "G5920",
                "name": "発達障害の心理学",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "中西 陽"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5920.html"
            },
            {
                "tt_num": "G5936",
                "name": "障害児保育",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "若林 隆泰"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5936.html"
            },
            {
                "tt_num": "G6500",
                "name": "日本語教授法特講",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6500.html"
            },
            {
                "tt_num": "G1540",
                "name": "小学校理科★（理科）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "森本 弘一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1540.html"
            },
            {
                "tt_num": "G1560",
                "name": "小学校理科★（理科）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1560.html"
            },
            {
                "tt_num": "G1562",
                "name": "初等教科教育法（英語）★（小学校外国語活動）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "兼重 昇"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1562.html"
            },
            {
                "tt_num": "G2182",
                "name": "子どもと言葉",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "横山 真貴子",
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2182.html"
            },
            {
                "tt_num": "G3415",
                "name": "社会科教育研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3415.html"
            },
            {
                "tt_num": "G3458",
                "name": "法学・政治学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3458.html"
            },
            {
                "tt_num": "G3523",
                "name": "地理学実験",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "根田 克彦",
                    "河本 大地"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3523.html"
            },
            {
                "tt_num": "G3742",
                "name": "代数構造Ⅱ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3742.html"
            },
            {
                "tt_num": "G4111",
                "name": "地質学実験",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "和田 穣隆"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4111.html"
            },
            {
                "tt_num": "G4738",
                "name": "声楽Ⅲ（Ｘ）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4738.html"
            },
            {
                "tt_num": "G4757",
                "name": "ピアノⅢ（Ｄ）",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4757.html"
            },
            {
                "tt_num": "G4816",
                "name": "文化遺産記録保存演習Ⅱ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4816.html"
            },
            {
                "tt_num": "G5061",
                "name": "漢字条幅研究",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5061.html"
            },
            {
                "tt_num": "G5260",
                "name": "解剖生理学",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5260.html"
            },
            {
                "tt_num": "G5555",
                "name": "電気実験実習",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5555.html"
            },
            {
                "tt_num": "G5707",
                "name": "生活統計学",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5707.html"
            },
            {
                "tt_num": "G5931",
                "name": "肢体不自由教育方法",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "能勢 ゆかり"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5931.html"
            },
            {
                "tt_num": "G6223",
                "name": "教育方法学演習",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6223.html"
            },
            {
                "tt_num": "G6571",
                "name": "言語文化研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "吉村 公宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6571.html"
            },
            {
                "tt_num": "G1575",
                "name": "初等教科教育法（英語）★（小学校外国語活動）",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "兼重 昇"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1575.html"
            },
            {
                "tt_num": "G3057",
                "name": "国語科教育学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3057.html"
            },
            {
                "tt_num": "G3220",
                "name": "英作文Ⅰ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3220.html"
            },
            {
                "tt_num": "G3412",
                "name": "社会科教育研究Ⅰ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3412.html"
            },
            {
                "tt_num": "G3741",
                "name": "代数基礎",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3741.html"
            },
            {
                "tt_num": "G3746",
                "name": "基礎数学（代数）",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "釣井 達也"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3746.html"
            },
            {
                "tt_num": "G4634",
                "name": "ピアノⅢ（Ｂ）",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "奥田 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4634.html"
            },
            {
                "tt_num": "G4638",
                "name": "ピアノⅢ（Ａ）",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4638.html"
            },
            {
                "tt_num": "G4645",
                "name": "日本音楽実習Ⅰ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "林 美音子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4645.html"
            },
            {
                "tt_num": "G4657",
                "name": "音楽理論",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "竹内 直"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4657.html"
            },
            {
                "tt_num": "G4830",
                "name": "彫刻Ⅲ",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "前芝 武史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4830.html"
            },
            {
                "tt_num": "G5290",
                "name": "生涯スポーツ論",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5290.html"
            },
            {
                "tt_num": "G5734",
                "name": "食生活論",
                "semester": "前期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5734.html"
            },
            {
                "tt_num": "G1561",
                "name": "小学校音楽Ⅰ★（音楽Ⅰ）",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "劉 麟玉",
                    "小笠原 真也",
                    "宮田 知絵",
                    "前田 則子",
                    "北條 美香代",
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1561.html"
            },
            {
                "tt_num": "G2039",
                "name": "初等教科教育法（生活）",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2039.html"
            },
            {
                "tt_num": "G2042",
                "name": "初等教科教育法（生活）",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "森本 弘一",
                    "太田 満",
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2042.html"
            },
            {
                "tt_num": "G3421",
                "name": "政治学",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "浅野 詠子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3421.html"
            },
            {
                "tt_num": "G5000",
                "name": "漢字造形論",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5000.html"
            },
            {
                "tt_num": "G5220",
                "name": "小児保健",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5220.html"
            },
            {
                "tt_num": "G6210",
                "name": "教育哲学・思想演習",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6210.html"
            },
            {
                "tt_num": "G1530",
                "name": "★（初等教科実践指導）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "竹内 晋平",
                    "宇田 秀士",
                    "前田 則子",
                    "高橋 豪仁",
                    "北條 美香代",
                    "立 正伸",
                    "劉 麟玉",
                    "井上 邦子",
                    "狩野 宏明",
                    "原山 健一",
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1530.html"
            },
            {
                "tt_num": "G2000",
                "name": "初等教科教育法（国語）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2000.html"
            },
            {
                "tt_num": "G2001",
                "name": "初等教科教育法（国語）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2001.html"
            },
            {
                "tt_num": "G3470",
                "name": "地理学概論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3470.html"
            },
            {
                "tt_num": "G3510",
                "name": "社会学",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3510.html"
            },
            {
                "tt_num": "G4241",
                "name": "理科教育概論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4241.html"
            },
            {
                "tt_num": "G4725",
                "name": "ピアノⅠ（Ｃ）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "奥田 敬子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4725.html"
            },
            {
                "tt_num": "G4813",
                "name": "彩色材料論",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4813.html"
            },
            {
                "tt_num": "G5001",
                "name": "漢字作品研究Ⅰ",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5001.html"
            },
            {
                "tt_num": "G5012",
                "name": "書道史Ⅰ",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5012.html"
            },
            {
                "tt_num": "G5311",
                "name": "器械運動",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5311.html"
            },
            {
                "tt_num": "G5553",
                "name": "情報基礎",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5553.html"
            },
            {
                "tt_num": "G6102",
                "name": "幼年教育学特講",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6102.html"
            },
            {
                "tt_num": "G6917",
                "name": "子育て支援★（保育相談支援）",
                "semester": "前期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "残華 雅子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6917.html"
            },
            {
                "tt_num": "G1103",
                "name": "学校経営と学校図書館",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "渡邉 良枝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1103.html"
            },
            {
                "tt_num": "G2006",
                "name": "初等教科教育法（国語）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2006.html"
            },
            {
                "tt_num": "G2008",
                "name": "初等教科教育法（国語）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2008.html"
            },
            {
                "tt_num": "G2055",
                "name": "中等教科教育法Ⅲ（音楽）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "長谷川 真由"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2055.html"
            },
            {
                "tt_num": "G2091",
                "name": "中等教科教育法Ⅰ（技術）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2091.html"
            },
            {
                "tt_num": "G2192",
                "name": "保育内容総論★（保育内容研究）",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "横山 真貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2192.html"
            },
            {
                "tt_num": "G3000",
                "name": "日本語学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "森 篤嗣"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3000.html"
            },
            {
                "tt_num": "G3020",
                "name": "近代文学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "日高 佳紀"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3020.html"
            },
            {
                "tt_num": "G3211",
                "name": "英米文学史Ⅰ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3211.html"
            },
            {
                "tt_num": "G4011",
                "name": "力学の世界",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "常田 琢"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4011.html"
            },
            {
                "tt_num": "G4021",
                "name": "文化遺産科学Ⅰ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4021.html"
            },
            {
                "tt_num": "G4820",
                "name": "美術教育特講Ⅱ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4820.html"
            },
            {
                "tt_num": "G5044",
                "name": "篆隷書法",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5044.html"
            },
            {
                "tt_num": "G5047",
                "name": "書道理論",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5047.html"
            },
            {
                "tt_num": "G5766",
                "name": "家庭電気・機械及び情報処理",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5766.html"
            },
            {
                "tt_num": "G5908",
                "name": "障害児教育の歴史",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5908.html"
            },
            {
                "tt_num": "G6270",
                "name": "心理学研究法",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "石井 僚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6270.html"
            },
            {
                "tt_num": "G6300",
                "name": "生涯教育計画特講Ⅱ",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6300.html"
            },
            {
                "tt_num": "G6906",
                "name": "社会的養護",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6906.html"
            },
            {
                "tt_num": "G6970",
                "name": "発達障害の理解と対応",
                "semester": "前期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "富井 奈菜実"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6970.html"
            },
            {
                "tt_num": "G1153",
                "name": "学校経営と学校図書館",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "渡邉 良枝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1153.html"
            },
            {
                "tt_num": "G2014",
                "name": "初等教科教育法（社会）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "西川 秀智"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2014.html"
            },
            {
                "tt_num": "G2017",
                "name": "初等教科教育法（社会）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2017.html"
            },
            {
                "tt_num": "G2066",
                "name": "中等教科教育法Ⅰ（美術）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2066.html"
            },
            {
                "tt_num": "G2070",
                "name": "中等教科教育法Ⅰ（書道）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2070.html"
            },
            {
                "tt_num": "G3041",
                "name": "日本語学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "前田 広幸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3041.html"
            },
            {
                "tt_num": "G3060",
                "name": "古典文学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3060.html"
            },
            {
                "tt_num": "G3280",
                "name": "実践英語表現研究",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3280.html"
            },
            {
                "tt_num": "G3405",
                "name": "哲学・倫理学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3405.html"
            },
            {
                "tt_num": "G3450",
                "name": "西洋史概説",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3450.html"
            },
            {
                "tt_num": "G4052",
                "name": "地球物理学実験",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8",
                    "火9"
                ],
                "teacher": [
                    "藤井 智康"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4052.html"
            },
            {
                "tt_num": "G4327",
                "name": "物理化学実験",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8",
                    "火9"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4327.html"
            },
            {
                "tt_num": "G4749",
                "name": "演奏法Ⅰ（声楽）（Ｚ）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4749.html"
            },
            {
                "tt_num": "G4752",
                "name": "演奏法Ⅰ（声楽）（Ｘ）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4752.html"
            },
            {
                "tt_num": "G5561",
                "name": "栽培実習",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5561.html"
            },
            {
                "tt_num": "G5752",
                "name": "地域生活論",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "立松 麻衣子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5752.html"
            },
            {
                "tt_num": "G5901",
                "name": "知的障害の医学",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5901.html"
            },
            {
                "tt_num": "G6242",
                "name": "教育経営学演習",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6242.html"
            },
            {
                "tt_num": "G6275",
                "name": "教育心理学特講",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "石井 僚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6275.html"
            },
            {
                "tt_num": "G6721",
                "name": "自然環境学",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "辻野 亮",
                    "村松 大輔"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6721.html"
            },
            {
                "tt_num": "G6820",
                "name": "教育人権アプローチ特講",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6820.html"
            },
            {
                "tt_num": "G6905",
                "name": "幼年教育総合研究（Ａ）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6905.html"
            },
            {
                "tt_num": "G6907",
                "name": "社会福祉論",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6907.html"
            },
            {
                "tt_num": "G6912",
                "name": "幼年教育総合研究（Ｂ）",
                "semester": "前期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6912.html"
            },
            {
                "tt_num": "G2193",
                "name": "保育の計画と評価★（保育課程論）",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2193.html"
            },
            {
                "tt_num": "G3251",
                "name": "英文法演習",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3251.html"
            },
            {
                "tt_num": "G3413",
                "name": "地域文化論",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3413.html"
            },
            {
                "tt_num": "G3712",
                "name": "情報数理基礎",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "伊藤 直治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3712.html"
            },
            {
                "tt_num": "G4110",
                "name": "地学概論Ⅰ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "和田 穣隆",
                    "信川 正順",
                    "藤井 智康"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4110.html"
            },
            {
                "tt_num": "G4520",
                "name": "民族音楽学",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4520.html"
            },
            {
                "tt_num": "G4541",
                "name": "合唱Ⅰ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4541.html"
            },
            {
                "tt_num": "G4542",
                "name": "合唱Ⅲ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4542.html"
            },
            {
                "tt_num": "G4812",
                "name": "デッサンⅠ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4812.html"
            },
            {
                "tt_num": "G4857",
                "name": "文化遺産芸術学演習Ⅱ",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4857.html"
            },
            {
                "tt_num": "G5270",
                "name": "水泳",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5270.html"
            },
            {
                "tt_num": "G5700",
                "name": "家庭経営学",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "立松 麻衣子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5700.html"
            },
            {
                "tt_num": "G5961",
                "name": "発達障害と心理検査",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "中西 陽"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5961.html"
            },
            {
                "tt_num": "G6815",
                "name": "情報と職業",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6815.html"
            },
            {
                "tt_num": "G6915",
                "name": "幼年教育総合研究（Ｃ）",
                "semester": "前期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "横山 真貴子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6915.html"
            },
            {
                "tt_num": "G1502",
                "name": "★（生活）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "辻野 亮",
                    "中谷 憲一",
                    "山本 素世",
                    "和田 穣隆",
                    "渡邉 伸一",
                    "箕作 和彦",
                    "村松 大輔"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1502.html"
            },
            {
                "tt_num": "G1543",
                "name": "小学校生活",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "辻野 亮",
                    "中谷 憲一",
                    "山本 素世",
                    "和田 穣隆",
                    "渡邉 伸一",
                    "箕作 和彦",
                    "村松 大輔"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1543.html"
            },
            {
                "tt_num": "G1549",
                "name": "小学校図画工作",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "原山 健一",
                    "狩野 宏明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1549.html"
            },
            {
                "tt_num": "G2010",
                "name": "中等教科教育法Ⅲ（英語）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2010.html"
            },
            {
                "tt_num": "G2046",
                "name": "中等教科教育法Ⅳ（理科）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "石田 正樹",
                    "信川 正順",
                    "和田 穣隆",
                    "藤井 智康",
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2046.html"
            },
            {
                "tt_num": "G3053",
                "name": "国語科教育学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3053.html"
            },
            {
                "tt_num": "G3431",
                "name": "古文書学演習",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3431.html"
            },
            {
                "tt_num": "G3490",
                "name": "日本近世・近代史",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "谷山 正道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3490.html"
            },
            {
                "tt_num": "G3706",
                "name": "計算機と暗号",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "多田 知正"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3706.html"
            },
            {
                "tt_num": "G4282",
                "name": "化学概論Ⅰ",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "山崎 祥子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4282.html"
            },
            {
                "tt_num": "G4748",
                "name": "声楽Ⅰ（Ｙ）",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4748.html"
            },
            {
                "tt_num": "G5905",
                "name": "障害児医学演習",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5905.html"
            },
            {
                "tt_num": "G6200",
                "name": "教育史特講",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6200.html"
            },
            {
                "tt_num": "G6230",
                "name": "教育社会学演習",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6230.html"
            },
            {
                "tt_num": "G6520",
                "name": "比較文化論",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6520.html"
            },
            {
                "tt_num": "G1518",
                "name": "★（体育）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "立 正伸",
                    "井上 邦子",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1518.html"
            },
            {
                "tt_num": "G1553",
                "name": "小学校体育",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "立 正伸",
                    "井上 邦子",
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1553.html"
            },
            {
                "tt_num": "G1554",
                "name": "小学校体育",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "立 正伸",
                    "井上 邦子",
                    "宮尾 夏姫"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1554.html"
            },
            {
                "tt_num": "G2044",
                "name": "初等教科教育法（理科）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "森本 弘一",
                    "信川 正順",
                    "高島 弘",
                    "山崎 祥子",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2044.html"
            },
            {
                "tt_num": "G2092",
                "name": "中等教科教育法Ⅰ（工業）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2092.html"
            },
            {
                "tt_num": "G2107",
                "name": "中等教科教育法Ⅰ（情報）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2107.html"
            },
            {
                "tt_num": "G3011",
                "name": "漢文学演習Ⅰ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3011.html"
            },
            {
                "tt_num": "G3061",
                "name": "日本文学概説Ⅰ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3061.html"
            },
            {
                "tt_num": "G3281",
                "name": "実践英語研究Ⅰ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3281.html"
            },
            {
                "tt_num": "G3432",
                "name": "日本史概説Ⅰ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3432.html"
            },
            {
                "tt_num": "G4230",
                "name": "無機化学",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "棚瀬 知明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4230.html"
            },
            {
                "tt_num": "G4743",
                "name": "声楽Ⅲ（Ｙ）",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4743.html"
            },
            {
                "tt_num": "G4851",
                "name": "造形芸術学特講",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4851.html"
            },
            {
                "tt_num": "G5010",
                "name": "書論ゼミ",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5010.html"
            },
            {
                "tt_num": "G5020",
                "name": "仮名書法論",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5020.html"
            },
            {
                "tt_num": "G5953",
                "name": "病弱児の医学と心理",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "辻井 啓之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5953.html"
            },
            {
                "tt_num": "G6201",
                "name": "教育史演習",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6201.html"
            },
            {
                "tt_num": "G6234",
                "name": "校外学習指導特講",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6234.html"
            },
            {
                "tt_num": "G6264",
                "name": "学校教育相談特講",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "市来 百合子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6264.html"
            },
            {
                "tt_num": "G6501",
                "name": "現代日本論",
                "semester": "前期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6501.html"
            },
            {
                "tt_num": "G4010",
                "name": "理科教育演習★（理科教育演習Ⅰ）",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "常田 琢",
                    "石田 正樹",
                    "信川 正順",
                    "梶原 篤",
                    "山崎 祥子",
                    "松山 豊樹",
                    "森本 弘一",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "石井 俊行",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4010.html"
            },
            {
                "tt_num": "G4750",
                "name": "声楽Ⅲ（Ｚ）",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4750.html"
            },
            {
                "tt_num": "G4844",
                "name": "絵画理論特講",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4844.html"
            },
            {
                "tt_num": "G6523",
                "name": "比較言語文化論Ⅰ",
                "semester": "前期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6523.html"
            },
            {
                "tt_num": "G1000",
                "name": "博物館概論",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "荻野 裕子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1000.html"
            },
            {
                "tt_num": "G2052",
                "name": "中等教科教育法Ⅰ（音楽）",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2052.html"
            },
            {
                "tt_num": "G5210",
                "name": "球技（基礎）",
                "semester": "前期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "井上 洋一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5210.html"
            },
            {
                "tt_num": "G1008",
                "name": "博物館経営論",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "巽 善信"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1008.html"
            },
            {
                "tt_num": "G2003",
                "name": "中等教科教育法Ⅲ（国語）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "有馬 義貴",
                    "日高 佳紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2003.html"
            },
            {
                "tt_num": "G2031",
                "name": "中等教科教育法Ⅰ（数学）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "田山 育男"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2031.html"
            },
            {
                "tt_num": "G2096",
                "name": "中等教科教育法Ⅲ（技術）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2096.html"
            },
            {
                "tt_num": "G2098",
                "name": "中等教科教育法Ⅲ（社会・地歴）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2098.html"
            },
            {
                "tt_num": "G2101",
                "name": "中等教科教育法Ⅰ（家庭）",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2101.html"
            },
            {
                "tt_num": "G3233",
                "name": "英米言語文化論",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3233.html"
            },
            {
                "tt_num": "G3710",
                "name": "コンピュータネットワーク",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "伊藤 直治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3710.html"
            },
            {
                "tt_num": "G4071",
                "name": "物理学概論Ⅰ",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "常田 琢"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4071.html"
            },
            {
                "tt_num": "G4291",
                "name": "物理化学",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4291.html"
            },
            {
                "tt_num": "G4506",
                "name": "指揮法Ⅰ",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4506.html"
            },
            {
                "tt_num": "G4832",
                "name": "彫刻Ⅰ",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "大坂 一成"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4832.html"
            },
            {
                "tt_num": "G5024",
                "name": "仮名創作法Ⅱ",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "瀨川 賢一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5024.html"
            },
            {
                "tt_num": "G5318",
                "name": "武道",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "藤猪 耕大"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5318.html"
            },
            {
                "tt_num": "G5524",
                "name": "機構学",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5524.html"
            },
            {
                "tt_num": "G5712",
                "name": "食品栄養学実験",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6",
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5712.html"
            },
            {
                "tt_num": "G5915",
                "name": "障害児教育学演習",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5915.html"
            },
            {
                "tt_num": "G6110",
                "name": "幼年心理学特講",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6110.html"
            },
            {
                "tt_num": "G6247",
                "name": "教育課程演習",
                "semester": "前期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6247.html"
            },
            {
                "tt_num": "G1538",
                "name": "小学校社会★（社会）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "森 伸宏",
                    "根田 克彦",
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1538.html"
            },
            {
                "tt_num": "G1557",
                "name": "小学校社会★（社会）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "根田 克彦",
                    "森 伸宏",
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1557.html"
            },
            {
                "tt_num": "G2004",
                "name": "中等教科教育法Ⅰ（国語）",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2004.html"
            },
            {
                "tt_num": "G3021",
                "name": "近代文学研究",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "田村 美由紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3021.html"
            },
            {
                "tt_num": "G3837",
                "name": "数理統計Ⅱ",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3837.html"
            },
            {
                "tt_num": "G4103",
                "name": "天文学実験",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8",
                    "木9"
                ],
                "teacher": [
                    "信川 正順"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4103.html"
            },
            {
                "tt_num": "G4320",
                "name": "応用物理学実験",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8",
                    "木9"
                ],
                "teacher": [
                    "常田 琢"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4320.html"
            },
            {
                "tt_num": "G4507",
                "name": "合奏Ⅰ",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4507.html"
            },
            {
                "tt_num": "G4831",
                "name": "彫刻理論特講",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "大坂 一成"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4831.html"
            },
            {
                "tt_num": "G4892",
                "name": "西洋美術史Ⅰ",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "永井 隆則"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4892.html"
            },
            {
                "tt_num": "G5031",
                "name": "漢字書法論",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5031.html"
            },
            {
                "tt_num": "G5049",
                "name": "古筆研究Ⅱ",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "瀨川 賢一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5049.html"
            },
            {
                "tt_num": "G5300",
                "name": "救急処置及び看護法",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "辻井 啓之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5300.html"
            },
            {
                "tt_num": "G5505",
                "name": "材料工作法",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5505.html"
            },
            {
                "tt_num": "G5525",
                "name": "機械設計製作",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5525.html"
            },
            {
                "tt_num": "G6114",
                "name": "社会的養護内容",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6114.html"
            },
            {
                "tt_num": "G6572",
                "name": "音声学・音韻論",
                "semester": "前期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6572.html"
            },
            {
                "tt_num": "G3040",
                "name": "日本語学概説Ⅰ（音声言語を含む。）",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "前田 広幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3040.html"
            },
            {
                "tt_num": "G3240",
                "name": "国際英語文化教育論",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "エデソル・ドミニク ガイ"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3240.html"
            },
            {
                "tt_num": "G3401",
                "name": "哲学・倫理学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3401.html"
            },
            {
                "tt_num": "G3417",
                "name": "社会科教育研究Ⅲ",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3417.html"
            },
            {
                "tt_num": "G3724",
                "name": "数理統計Ⅰ",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3724.html"
            },
            {
                "tt_num": "G4042",
                "name": "生物学概論Ⅰ",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "石田 正樹"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4042.html"
            },
            {
                "tt_num": "G4345",
                "name": "博物館資料保存論",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "巽 善信"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4345.html"
            },
            {
                "tt_num": "G4728",
                "name": "声楽Ⅰ（Ｚ）",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4728.html"
            },
            {
                "tt_num": "G4871",
                "name": "美術概論",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "永井 隆則"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4871.html"
            },
            {
                "tt_num": "G5221",
                "name": "学校保健",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5221.html"
            },
            {
                "tt_num": "G6251",
                "name": "教育臨床心理学特講",
                "semester": "前期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "出口 拓彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6251.html"
            },
            {
                "tt_num": "G3442",
                "name": "法学概論（国際法を含む。）",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3442.html"
            },
            {
                "tt_num": "G4121",
                "name": "植物生態学",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "松井 淳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4121.html"
            },
            {
                "tt_num": "G4747",
                "name": "演奏法Ⅱ（器楽）（Ａ）",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4747.html"
            },
            {
                "tt_num": "G6211",
                "name": "生涯教育文化特講",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6211.html"
            },
            {
                "tt_num": "G6522",
                "name": "日本語文献講読（文化）",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6522.html"
            },
            {
                "tt_num": "G2084",
                "name": "中等教科教育法Ⅲ（保健体育）",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2084.html"
            },
            {
                "tt_num": "G3451",
                "name": "西洋史",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3451.html"
            },
            {
                "tt_num": "G3711",
                "name": "コンピュータ情報処理",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "伊藤 直治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3711.html"
            },
            {
                "tt_num": "G3728",
                "name": "フーリエ解析",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3728.html"
            },
            {
                "tt_num": "G4041",
                "name": "細胞生物学",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "石田 正樹"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4041.html"
            },
            {
                "tt_num": "G4273",
                "name": "統計物理学",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "藤本 雅文"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4273.html"
            },
            {
                "tt_num": "G4531",
                "name": "作曲・編曲理論",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4531.html"
            },
            {
                "tt_num": "G4636",
                "name": "ピアノⅢ（Ｃ）",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "奥田 敬子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4636.html"
            },
            {
                "tt_num": "G4726",
                "name": "ピアノⅠ（Ａ）",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4726.html"
            },
            {
                "tt_num": "G5543",
                "name": "技術史",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "谷口 義昭",
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5543.html"
            },
            {
                "tt_num": "G6278",
                "name": "教育心理学実験",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "石井 僚",
                    "堀 麻佑子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6278.html"
            },
            {
                "tt_num": "G6304",
                "name": "生涯教育演習",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6304.html"
            },
            {
                "tt_num": "G6503",
                "name": "日本語文献講読（言語）",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6503.html"
            },
            {
                "tt_num": "G6810",
                "name": "システムプログラミング",
                "semester": "前期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6810.html"
            },
            {
                "tt_num": "G1006",
                "name": "博物館教育論",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "荻野 裕子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1006.html"
            },
            {
                "tt_num": "G2033",
                "name": "初等教科教育法（算数）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "近藤 裕"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2033.html"
            },
            {
                "tt_num": "G2034",
                "name": "初等教科教育法（算数）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "福本 義久"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2034.html"
            },
            {
                "tt_num": "G2037",
                "name": "初等教科教育法（算数）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2037.html"
            },
            {
                "tt_num": "G2081",
                "name": "中等教科教育法Ⅰ（保健体育）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2081.html"
            },
            {
                "tt_num": "G2186",
                "name": "保育内容の指導法（環境Ⅰ）★（幼児と環境Ⅰ）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "石井 俊行",
                    "辻野 亮"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2186.html"
            },
            {
                "tt_num": "G3232",
                "name": "英米文学特講",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3232.html"
            },
            {
                "tt_num": "G3505",
                "name": "経済学・社会学研究Ⅲ",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3505.html"
            },
            {
                "tt_num": "G4751",
                "name": "演奏法Ⅱ（器楽）（Ｂ）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4751.html"
            },
            {
                "tt_num": "G5509",
                "name": "木質材料学",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5509.html"
            },
            {
                "tt_num": "G6280",
                "name": "認知発達特講",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "中山 留美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6280.html"
            },
            {
                "tt_num": "G6541",
                "name": "日本語演習Ⅰ（読解）",
                "semester": "前期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "新谷 遙"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6541.html"
            },
            {
                "tt_num": "G2012",
                "name": "中等教科教育法Ⅰ（英語）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2012.html"
            },
            {
                "tt_num": "G2060",
                "name": "中等教科教育法Ⅲ（美術）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2060.html"
            },
            {
                "tt_num": "G3062",
                "name": "日本文学史Ⅰ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3062.html"
            },
            {
                "tt_num": "G3400",
                "name": "倫理学",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3400.html"
            },
            {
                "tt_num": "G3501",
                "name": "経済学概論（国際経済を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3501.html"
            },
            {
                "tt_num": "G3770",
                "name": "解析基礎",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3770.html"
            },
            {
                "tt_num": "G4309",
                "name": "生物学実験（コンピュータ活用を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8",
                    "金9"
                ],
                "teacher": [
                    "松井 淳",
                    "石田 正樹",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4309.html"
            },
            {
                "tt_num": "G4324",
                "name": "地学実験（コンピュータ活用を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8",
                    "金9"
                ],
                "teacher": [
                    "和田 穣隆",
                    "信川 正順",
                    "藤井 智康"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4324.html"
            },
            {
                "tt_num": "G4332",
                "name": "固体物理学",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "中村 元彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4332.html"
            },
            {
                "tt_num": "G4503",
                "name": "作曲・編曲法基礎演習Ⅰ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4503.html"
            },
            {
                "tt_num": "G4593",
                "name": "伴奏法",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4593.html"
            },
            {
                "tt_num": "G4861",
                "name": "工芸Ⅲ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4861.html"
            },
            {
                "tt_num": "G4881",
                "name": "デザインⅠ（映像メディア表現を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "新田 恭子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4881.html"
            },
            {
                "tt_num": "G5240",
                "name": "陸上競技",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5240.html"
            },
            {
                "tt_num": "G5262",
                "name": "栄養学（食品学を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5262.html"
            },
            {
                "tt_num": "G5512",
                "name": "金属工作実習（製図を含む。）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5512.html"
            },
            {
                "tt_num": "G5550",
                "name": "電気基礎",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5550.html"
            },
            {
                "tt_num": "G5760",
                "name": "育児学",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5760.html"
            },
            {
                "tt_num": "G5775",
                "name": "被服構成学実習Ⅰ■（被服構成学実習）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8",
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "木林 有理子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5775.html"
            },
            {
                "tt_num": "G6290",
                "name": "心理学検査Ⅰ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "出口 拓彦",
                    "中山 留美子",
                    "石井 僚"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6290.html"
            },
            {
                "tt_num": "G6303",
                "name": "生涯学習概論Ⅰ",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6303.html"
            },
            {
                "tt_num": "G6542",
                "name": "日本語演習Ⅰ（作文）",
                "semester": "前期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "新谷 遙"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6542.html"
            },
            {
                "tt_num": "G3012",
                "name": "漢文学概説",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3012.html"
            },
            {
                "tt_num": "G3502",
                "name": "経済学・社会学研究Ⅰ",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3502.html"
            },
            {
                "tt_num": "G3536",
                "name": "哲学概論",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3536.html"
            },
            {
                "tt_num": "G3800",
                "name": "基礎数学（解析）",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3800.html"
            },
            {
                "tt_num": "G4700",
                "name": "音楽史",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "竹内 直"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4700.html"
            },
            {
                "tt_num": "G4724",
                "name": "ピアノⅠ（Ｄ）",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4724.html"
            },
            {
                "tt_num": "G4860",
                "name": "工芸Ⅰ",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4860.html"
            },
            {
                "tt_num": "G4880",
                "name": "デザインⅢ",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "新田 恭子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4880.html"
            },
            {
                "tt_num": "G5711",
                "name": "栄養学",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5711.html"
            },
            {
                "tt_num": "G6513",
                "name": "英語文化交流論",
                "semester": "前期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6513.html"
            },
            {
                "tt_num": "G1007",
                "name": "博物館展示論",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "巽 善信"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1007.html"
            },
            {
                "tt_num": "G1102",
                "name": "学習指導と学校図書館",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "家城 清美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1102.html"
            },
            {
                "tt_num": "G1152",
                "name": "学習指導と学校図書館",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "家城 清美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1152.html"
            },
            {
                "tt_num": "G2184",
                "name": "保育内容の指導法（健康）★（幼児と健康）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "飯田 智行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2184.html"
            },
            {
                "tt_num": "G2194",
                "name": "乳児保育",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岡 いくよ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2194.html"
            },
            {
                "tt_num": "G3538",
                "name": "山間地教育入門",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "河本 大地",
                    "中澤 静男"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3538.html"
            },
            {
                "tt_num": "G3550",
                "name": "文化遺産科学演習Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3550.html"
            },
            {
                "tt_num": "G3704",
                "name": "代数系入門",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "長谷川 武博"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3704.html"
            },
            {
                "tt_num": "G3805",
                "name": "図形と位相",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3805.html"
            },
            {
                "tt_num": "G3840",
                "name": "幾何構造",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3840.html"
            },
            {
                "tt_num": "G3842",
                "name": "算数・数学教育実践演習Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "高木 祥司",
                    "伊藤 直治",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "近藤 裕",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3842.html"
            },
            {
                "tt_num": "G3844",
                "name": "算数・数学教育実践演習Ⅲ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "伊藤 直治",
                    "高橋 亮",
                    "近藤 裕",
                    "高木 祥司",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3844.html"
            },
            {
                "tt_num": "G4043",
                "name": "臨海実習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松井 淳",
                    "石田 正樹",
                    "中野 智之",
                    "辻野 亮",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4043.html"
            },
            {
                "tt_num": "G4051",
                "name": "野外実習－自然の中の理科教育",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松井 淳",
                    "石田 正樹",
                    "信川 正順",
                    "和田 穣隆",
                    "藤井 智康",
                    "辻野 亮",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4051.html"
            },
            {
                "tt_num": "G4062",
                "name": "分析化学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "樋上 照男"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4062.html"
            },
            {
                "tt_num": "G4318",
                "name": "地学野外実習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "和田 穣隆"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4318.html"
            },
            {
                "tt_num": "G4343",
                "name": "考古学演習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "日野 宏"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4343.html"
            },
            {
                "tt_num": "G4347",
                "name": "自然科学史",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "杉本 舞"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4347.html"
            },
            {
                "tt_num": "G4360",
                "name": "量子化学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "川上 貴資"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4360.html"
            },
            {
                "tt_num": "G4858",
                "name": "地域と文化遺産教育",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山岸 公基",
                    "大山 明彦",
                    "金原 正明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4858.html"
            },
            {
                "tt_num": "G4894",
                "name": "コンピュータと文化遺産Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4894.html"
            },
            {
                "tt_num": "G4895",
                "name": "絵画Ⅰ（映像メディア表現を含む。）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4895.html"
            },
            {
                "tt_num": "G5043",
                "name": "正倉院の書蹟",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "西山 厚"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5043.html"
            },
            {
                "tt_num": "G5222",
                "name": "看護学臨床実習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5222.html"
            },
            {
                "tt_num": "G5295",
                "name": "野外活動（キャンプ）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "立 正伸",
                    "笠次 良爾"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5295.html"
            },
            {
                "tt_num": "G5316",
                "name": "看護学Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山崎 裕美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5316.html"
            },
            {
                "tt_num": "G5317",
                "name": "看護学Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山崎 裕美子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5317.html"
            },
            {
                "tt_num": "G5730",
                "name": "調理学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "光森 洋美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5730.html"
            },
            {
                "tt_num": "G5743",
                "name": "被服学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "木林 有理子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5743.html"
            },
            {
                "tt_num": "G5767",
                "name": "家庭科授業設計",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "中嶋 たや"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5767.html"
            },
            {
                "tt_num": "G5773",
                "name": "衣生活論",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "池田 仁美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5773.html"
            },
            {
                "tt_num": "G5907",
                "name": "視覚障害児の教育Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "稲本 正法"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5907.html"
            },
            {
                "tt_num": "G5909",
                "name": "視覚障害児の教育Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "稲本 正法"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5909.html"
            },
            {
                "tt_num": "G5910",
                "name": "障害児の発達心理学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松島 明日香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5910.html"
            },
            {
                "tt_num": "G5940",
                "name": "重複障害教育の理論と実際",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "越野 和之",
                    "木下 理恵",
                    "富井 奈菜実",
                    "中西 陽",
                    "堀田 千絵",
                    "全 有耳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5940.html"
            },
            {
                "tt_num": "G5952",
                "name": "言語治療学",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "木村 秀生"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5952.html"
            },
            {
                "tt_num": "G5962",
                "name": "肢体不自由・重複障害教育実践論",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "原田 文孝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5962.html"
            },
            {
                "tt_num": "G5963",
                "name": "知的障害指導法実習",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "越野 和之",
                    "富井 奈菜実"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5963.html"
            },
            {
                "tt_num": "G5965",
                "name": "特別支援教育実践演習Ⅱ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5965.html"
            },
            {
                "tt_num": "G6113",
                "name": "子ども文化論",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "栗山 誠",
                    "椋田 善之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6113.html"
            },
            {
                "tt_num": "G6261",
                "name": "児童心理学特講",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "小川 絢子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6261.html"
            },
            {
                "tt_num": "G6307",
                "name": "教育調査法",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "池田 曜子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6307.html"
            },
            {
                "tt_num": "G6310",
                "name": "精神保健",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "竹下 三隆"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6310.html"
            },
            {
                "tt_num": "G6320",
                "name": "生涯学習支援特講Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6320.html"
            },
            {
                "tt_num": "G6914",
                "name": "子どもの保健",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岡 いくよ"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6914.html"
            },
            {
                "tt_num": "G8072",
                "name": "保育実習（保育所Ⅰ）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "横山 真貴子",
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8072.html"
            },
            {
                "tt_num": "G8073",
                "name": "保育実習（施設）",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岩本 華子",
                    "横山 真貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8073.html"
            },
            {
                "tt_num": "G9981",
                "name": "給食指導",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "阪口 美香",
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9981.html"
            },
            {
                "tt_num": "G9984",
                "name": "新理数基礎ゼミナールⅠ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9984.html"
            },
            {
                "tt_num": "G9986",
                "name": "新理数教育Ⅲ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9986.html"
            },
            {
                "tt_num": "G9988",
                "name": "新理数教育Ⅰ",
                "semester": "前期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9988.html"
            },
            {
                "tt_num": "G0731",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0731.html"
            },
            {
                "tt_num": "G0732",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "石井 僚",
                    "中山 留美子",
                    "出口 拓彦",
                    "堀 麻佑子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0732.html"
            },
            {
                "tt_num": "G0733",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "横山 真貴子",
                    "大西 賢治"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0733.html"
            },
            {
                "tt_num": "G0734",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "堀田 千絵"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0734.html"
            },
            {
                "tt_num": "G0735",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0735.html"
            },
            {
                "tt_num": "G0736",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "渡邉 伸一",
                    "太田 満"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0736.html"
            },
            {
                "tt_num": "G0737",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0737.html"
            },
            {
                "tt_num": "G0738",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "和田 穣隆",
                    "石田 正樹",
                    "石井 俊行"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0738.html"
            },
            {
                "tt_num": "G0739",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0739.html"
            },
            {
                "tt_num": "G0740",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0740.html"
            },
            {
                "tt_num": "G0741",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0741.html"
            },
            {
                "tt_num": "G0742",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0742.html"
            },
            {
                "tt_num": "G0743",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0743.html"
            },
            {
                "tt_num": "G0744",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0744.html"
            },
            {
                "tt_num": "G0745",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0745.html"
            },
            {
                "tt_num": "G0746",
                "name": "大学での学び入門",
                "semester": "前期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0746.html"
            },
            {
                "tt_num": "G1542",
                "name": "小学校図画工作",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "新田 恭子",
                    "川北 成彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1542.html"
            },
            {
                "tt_num": "G1548",
                "name": "小学校生活",
                "semester": "前期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1548.html"
            },
            {
                "tt_num": "G1545",
                "name": "小学校音楽Ⅰ★（音楽Ⅰ）",
                "semester": "前期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "劉 麟玉",
                    "小笠原 真也",
                    "宮田 知絵",
                    "前田 則子",
                    "北條 美香代",
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1545.html"
            },
            {
                "tt_num": "G1544",
                "name": "小学校図画工作",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "狩野 宏明",
                    "原山 健一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1544.html"
            },
            {
                "tt_num": "G1550",
                "name": "小学校生活",
                "semester": "前期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "辻野 亮",
                    "中谷 憲一",
                    "山本 素世",
                    "和田 穣隆",
                    "渡邉 伸一",
                    "箕作 和彦",
                    "村松 大輔"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1550.html"
            },
            {
                "tt_num": "G2085",
                "name": "中等教科教育法Ⅳ（保健体育）",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "有馬 一彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2085.html"
            },
            {
                "tt_num": "G2228",
                "name": "教科内容研究（数学）",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "舟橋 友香",
                    "伊藤 直治",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "近藤 裕",
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2228.html"
            },
            {
                "tt_num": "G3449",
                "name": "日本史研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3449.html"
            },
            {
                "tt_num": "G3456",
                "name": "西洋史研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3456.html"
            },
            {
                "tt_num": "G3518",
                "name": "経済学・社会学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3518.html"
            },
            {
                "tt_num": "G4302",
                "name": "地質学",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "和田 穣隆"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4302.html"
            },
            {
                "tt_num": "G4754",
                "name": "声楽Ⅱ（Ｚ）",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4754.html"
            },
            {
                "tt_num": "G4758",
                "name": "ピアノⅣ（Ｄ）",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4758.html"
            },
            {
                "tt_num": "G6252",
                "name": "教育臨床心理学演習",
                "semester": "後期",
                "period": [
                    "月1",
                    "月2"
                ],
                "teacher": [
                    "出口 拓彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6252.html"
            },
            {
                "tt_num": "G2097",
                "name": "中等教科教育法Ⅳ（技術）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2097.html"
            },
            {
                "tt_num": "G3074",
                "name": "日本語学特講Ⅰ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "森下 訓子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3074.html"
            },
            {
                "tt_num": "G3443",
                "name": "法学",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3443.html"
            },
            {
                "tt_num": "G3482",
                "name": "地誌学概論",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3482.html"
            },
            {
                "tt_num": "G3773",
                "name": "数理プログラミング",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "村井 紘子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3773.html"
            },
            {
                "tt_num": "G3792",
                "name": "数学教育基礎",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "近藤 裕"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3792.html"
            },
            {
                "tt_num": "G4731",
                "name": "ピアノⅡ（Ａ）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4731.html"
            },
            {
                "tt_num": "G4732",
                "name": "ピアノⅡ（Ｃ）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "奥田 敬子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4732.html"
            },
            {
                "tt_num": "G4739",
                "name": "声楽Ⅳ（Ｘ）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4739.html"
            },
            {
                "tt_num": "G4877",
                "name": "絵画Ⅵ(絵画伝統技法 ）",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4877.html"
            },
            {
                "tt_num": "G5023",
                "name": "仮名作品研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5023.html"
            },
            {
                "tt_num": "G5033",
                "name": "漢字創作法Ⅱ",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5033.html"
            },
            {
                "tt_num": "G5200",
                "name": "体育心理学",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "中田 大貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5200.html"
            },
            {
                "tt_num": "G6202",
                "name": "生涯教育史特講",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "板橋 孝幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6202.html"
            },
            {
                "tt_num": "G6221",
                "name": "教育方法学特講",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "赤沢 早人"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6221.html"
            },
            {
                "tt_num": "G6271",
                "name": "心理学調査法",
                "semester": "後期",
                "period": [
                    "月3",
                    "月4"
                ],
                "teacher": [
                    "出口 拓彦",
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6271.html"
            },
            {
                "tt_num": "G1563",
                "name": "初等教科教育法（英語）★（小学校外国語活動）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "兼重 昇"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1563.html"
            },
            {
                "tt_num": "G2026",
                "name": "中等教科教育法Ⅱ(社会・公民)",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2026.html"
            },
            {
                "tt_num": "G2053",
                "name": "中等教科教育法Ⅱ（音楽）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "長谷川 真由"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2053.html"
            },
            {
                "tt_num": "G2083",
                "name": "中等教科教育法Ⅱ（保健体育）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2083.html"
            },
            {
                "tt_num": "G2093",
                "name": "中等教科教育法Ⅱ（工業）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2093.html"
            },
            {
                "tt_num": "G3003",
                "name": "日本語学概説Ⅱ",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "森下 訓子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3003.html"
            },
            {
                "tt_num": "G3274",
                "name": "英会話Ⅱ",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "マーティン パーソンズ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3274.html"
            },
            {
                "tt_num": "G3745",
                "name": "代数構造Ⅰ",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3745.html"
            },
            {
                "tt_num": "G3831",
                "name": "コンピュータと数学",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "村井 紘子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3831.html"
            },
            {
                "tt_num": "G4236",
                "name": "化学概論Ⅱ",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4236.html"
            },
            {
                "tt_num": "G4741",
                "name": "ピアノⅡ（Ｄ）",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4741.html"
            },
            {
                "tt_num": "G5035",
                "name": "楷書法",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5035.html"
            },
            {
                "tt_num": "G5319",
                "name": "表現運動・ダンス（体つくり運動を含む。）■（表現運動（ダンス））",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "井上 邦子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5319.html"
            },
            {
                "tt_num": "G5520",
                "name": "標準製図",
                "semester": "後期",
                "period": [
                    "月5",
                    "月6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5520.html"
            },
            {
                "tt_num": "G1539",
                "name": "小学校算数★（算数）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "舟橋 友香",
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1539.html"
            },
            {
                "tt_num": "G1558",
                "name": "小学校算数★（算数）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "近藤 裕",
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1558.html"
            },
            {
                "tt_num": "G1559",
                "name": "小学校算数★（算数）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1559.html"
            },
            {
                "tt_num": "G2234",
                "name": "教科内容研究（書道）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "谷川 雅夫",
                    "豊田 宗児"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2234.html"
            },
            {
                "tt_num": "G3418",
                "name": "社会科教育研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3418.html"
            },
            {
                "tt_num": "G3444",
                "name": "法学・政治学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3444.html"
            },
            {
                "tt_num": "G3454",
                "name": "西洋史研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "西田 慎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3454.html"
            },
            {
                "tt_num": "G3513",
                "name": "経済学・社会学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3513.html"
            },
            {
                "tt_num": "G3529",
                "name": "地理学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "根田 克彦",
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3529.html"
            },
            {
                "tt_num": "G3533",
                "name": "地理学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "河本 大地",
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3533.html"
            },
            {
                "tt_num": "G3715",
                "name": "情報数理学",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "伊藤 直治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3715.html"
            },
            {
                "tt_num": "G4032",
                "name": "遺伝学実験",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4032.html"
            },
            {
                "tt_num": "G4050",
                "name": "水圏科学",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "藤井 智康"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4050.html"
            },
            {
                "tt_num": "G4322",
                "name": "化学実験（コンピュータ活用を含む。）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "山崎 祥子",
                    "梶原 篤",
                    "高島 弘"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4322.html"
            },
            {
                "tt_num": "G4639",
                "name": "ピアノⅣ（Ａ）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4639.html"
            },
            {
                "tt_num": "G4744",
                "name": "声楽Ⅳ（Ｙ）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4744.html"
            },
            {
                "tt_num": "G4834",
                "name": "実材",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "大坂 一成"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4834.html"
            },
            {
                "tt_num": "G5251",
                "name": "球技（種目別Ⅱ）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "竹村 匡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5251.html"
            },
            {
                "tt_num": "G5264",
                "name": "生理学（運動生理学を含む。）",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5264.html"
            },
            {
                "tt_num": "G5518",
                "name": "金属工作理論",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5518.html"
            },
            {
                "tt_num": "G5551",
                "name": "電気設計製作",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8",
                    "月9"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5551.html"
            },
            {
                "tt_num": "G5924",
                "name": "障害児心理学演習",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "中西 陽"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5924.html"
            },
            {
                "tt_num": "G6121",
                "name": "心理学実験",
                "semester": "後期",
                "period": [
                    "月7",
                    "月8"
                ],
                "teacher": [
                    "出口 拓彦",
                    "石井 僚",
                    "堀 麻佑子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6121.html"
            },
            {
                "tt_num": "G2099",
                "name": "中等教科教育法Ⅳ（社会・公民）",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2099.html"
            },
            {
                "tt_num": "G3222",
                "name": "英作文Ⅱ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3222.html"
            },
            {
                "tt_num": "G3459",
                "name": "法学・政治学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3459.html"
            },
            {
                "tt_num": "G3717",
                "name": "情報システム論",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3717.html"
            },
            {
                "tt_num": "G3748",
                "name": "線形代数",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "川崎 謙一郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3748.html"
            },
            {
                "tt_num": "G4591",
                "name": "ソルフェージュ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4591.html"
            },
            {
                "tt_num": "G4646",
                "name": "日本音楽実習Ⅱ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "林 美音子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4646.html"
            },
            {
                "tt_num": "G4755",
                "name": "声楽Ⅳ（Ｚ）",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4755.html"
            },
            {
                "tt_num": "G4833",
                "name": "彫刻Ⅱ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "大坂 一成"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4833.html"
            },
            {
                "tt_num": "G4847",
                "name": "デッサンⅡ",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4847.html"
            },
            {
                "tt_num": "G5054",
                "name": "名蹟鑑賞",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5054.html"
            },
            {
                "tt_num": "G5281",
                "name": "レクリエーション理論",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "蓬田 高正"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5281.html"
            },
            {
                "tt_num": "G5527",
                "name": "機械実験実習",
                "semester": "後期",
                "period": [
                    "月9",
                    "月10"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5527.html"
            },
            {
                "tt_num": "G2041",
                "name": "中等教科教育法Ⅰ（理科）",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "森本 弘一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2041.html"
            },
            {
                "tt_num": "G2062",
                "name": "中等教科教育法Ⅱ（美術）",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2062.html"
            },
            {
                "tt_num": "G2179",
                "name": "子どもと健康",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "井上 邦子",
                    "笠次 良爾",
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2179.html"
            },
            {
                "tt_num": "G3435",
                "name": "日本古代・中世史",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3435.html"
            },
            {
                "tt_num": "G4637",
                "name": "ピアノⅣ（Ｃ）",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "奥田 敬子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4637.html"
            },
            {
                "tt_num": "G5002",
                "name": "漢字創作法Ⅰ",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5002.html"
            },
            {
                "tt_num": "G5272",
                "name": "運動学（運動方法学を含む。）",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "立 正伸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5272.html"
            },
            {
                "tt_num": "G5701",
                "name": "家族関係学",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "立松 麻衣子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5701.html"
            },
            {
                "tt_num": "G5913",
                "name": "特別支援教育原論",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5913.html"
            },
            {
                "tt_num": "G6246",
                "name": "教育課程特講",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "橋崎 頼子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6246.html"
            },
            {
                "tt_num": "G6308",
                "name": "生涯学習概論Ⅱ",
                "semester": "後期",
                "period": [
                    "火1",
                    "火2"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6308.html"
            },
            {
                "tt_num": "G1101",
                "name": "情報メディアの活用",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1101.html"
            },
            {
                "tt_num": "G1546",
                "name": "小学校音楽Ⅱ★（音楽Ⅱ）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "奥田 敬子",
                    "小笠原 真也"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1546.html"
            },
            {
                "tt_num": "G2002",
                "name": "中等教科教育法Ⅱ（国語）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2002.html"
            },
            {
                "tt_num": "G2056",
                "name": "中等教科教育法Ⅳ（音楽）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2056.html"
            },
            {
                "tt_num": "G2078",
                "name": "初等教科教育法（体育）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "小坂 美保"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2078.html"
            },
            {
                "tt_num": "G2079",
                "name": "初等教科教育法（体育）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2079.html"
            },
            {
                "tt_num": "G2080",
                "name": "初等教科教育法（体育）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "西川 潔"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2080.html"
            },
            {
                "tt_num": "G3255",
                "name": "言語コミュニケーション論",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3255.html"
            },
            {
                "tt_num": "G3414",
                "name": "社会科教育研究Ⅱ",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3414.html"
            },
            {
                "tt_num": "G3514",
                "name": "社会学概論",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "渡邉 伸一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3514.html"
            },
            {
                "tt_num": "G4033",
                "name": "遺伝学",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4033.html"
            },
            {
                "tt_num": "G4281",
                "name": "有機化学",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "山崎 祥子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4281.html"
            },
            {
                "tt_num": "G4821",
                "name": "美術教育特講Ⅰ",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4821.html"
            },
            {
                "tt_num": "G5045",
                "name": "篆刻法",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5045.html"
            },
            {
                "tt_num": "G5506",
                "name": "材料工作設計",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5506.html"
            },
            {
                "tt_num": "G5762",
                "name": "保育学(実習を含む。）",
                "semester": "後期",
                "period": [
                    "火3",
                    "火4"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5762.html"
            },
            {
                "tt_num": "G2191",
                "name": "保育内容の指導法（音楽表現）★（幼児の音楽表現）",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "劉 麟玉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2191.html"
            },
            {
                "tt_num": "G3004",
                "name": "日本語学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "森 篤嗣"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3004.html"
            },
            {
                "tt_num": "G3042",
                "name": "日本語表現法（文章表現を含む。）",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "前田 広幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3042.html"
            },
            {
                "tt_num": "G3063",
                "name": "古典文学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3063.html"
            },
            {
                "tt_num": "G3254",
                "name": "英語学特講",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "米倉 陽子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3254.html"
            },
            {
                "tt_num": "G3279",
                "name": "国際理解教育演習Ⅰ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3279.html"
            },
            {
                "tt_num": "G3404",
                "name": "哲学・倫理学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3404.html"
            },
            {
                "tt_num": "G3416",
                "name": "社会科教育研究Ⅳ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "太田 満"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3416.html"
            },
            {
                "tt_num": "G3532",
                "name": "東洋史概説",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "細見 和弘"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3532.html"
            },
            {
                "tt_num": "G3764",
                "name": "数学教育論",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3764.html"
            },
            {
                "tt_num": "G4104",
                "name": "地学概論Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "藤井 智康",
                    "信川 正順",
                    "和田 穣隆"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4104.html"
            },
            {
                "tt_num": "G4538",
                "name": "保育内容特講",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "横山 真貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4538.html"
            },
            {
                "tt_num": "G4734",
                "name": "声楽Ⅱ（Ｘ）",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4734.html"
            },
            {
                "tt_num": "G4849",
                "name": "絵画Ⅲ(構図研究)",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4849.html"
            },
            {
                "tt_num": "G5004",
                "name": "漢字作品研究Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "福光 佐今"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5004.html"
            },
            {
                "tt_num": "G5014",
                "name": "書道史Ⅱ",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5014.html"
            },
            {
                "tt_num": "G5225",
                "name": "健康相談活動の理論及び方法",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5225.html"
            },
            {
                "tt_num": "G5529",
                "name": "材料力学",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5529.html"
            },
            {
                "tt_num": "G5704",
                "name": "家族福祉論",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "立松 麻衣子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5704.html"
            },
            {
                "tt_num": "G5735",
                "name": "食品学",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "光森 洋美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5735.html"
            },
            {
                "tt_num": "G6212",
                "name": "教育哲学・思想特講",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "浅井 健介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6212.html"
            },
            {
                "tt_num": "G6526",
                "name": "日本文化史",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6526.html"
            },
            {
                "tt_num": "G6916",
                "name": "保育者論",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "残華 雅子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6916.html"
            },
            {
                "tt_num": "G6919",
                "name": "子ども家庭支援論★（相談援助）",
                "semester": "後期",
                "period": [
                    "火5",
                    "火6"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6919.html"
            },
            {
                "tt_num": "G0710",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0710.html"
            },
            {
                "tt_num": "G0711",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "石井 僚",
                    "中山 留美子",
                    "出口 拓彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0711.html"
            },
            {
                "tt_num": "G0712",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "横山 真貴子",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0712.html"
            },
            {
                "tt_num": "G0713",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "堀田 千絵"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0713.html"
            },
            {
                "tt_num": "G0714",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "棚橋 尚子",
                    "前田 広幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0714.html"
            },
            {
                "tt_num": "G0715",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "今 正秀",
                    "根田 克彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0715.html"
            },
            {
                "tt_num": "G0716",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "門田 守",
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0716.html"
            },
            {
                "tt_num": "G0717",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "伊藤 直治",
                    "高橋 亮",
                    "近藤 裕",
                    "高木 祥司",
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0717.html"
            },
            {
                "tt_num": "G0718",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "和田 穣隆",
                    "石田 正樹",
                    "信川 正順",
                    "梶原 篤",
                    "山崎 祥子",
                    "松山 豊樹",
                    "中村 元彦",
                    "藤井 智康",
                    "常田 琢",
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0718.html"
            },
            {
                "tt_num": "G0719",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "世良 啓太",
                    "薮 哲郎",
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0719.html"
            },
            {
                "tt_num": "G0720",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "中川 愛",
                    "杉山 薫",
                    "立松 麻衣子",
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0720.html"
            },
            {
                "tt_num": "G0721",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0721.html"
            },
            {
                "tt_num": "G0722",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0722.html"
            },
            {
                "tt_num": "G0723",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0723.html"
            },
            {
                "tt_num": "G0725",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0725.html"
            },
            {
                "tt_num": "G0726",
                "name": "専修基礎ゼミ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "金原 正明",
                    "大山 明彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0726.html"
            },
            {
                "tt_num": "G2063",
                "name": "初等教科教育法（図画工作）",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2063.html"
            },
            {
                "tt_num": "G2103",
                "name": "初等教科教育法（家庭）",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "松本 歩子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2103.html"
            },
            {
                "tt_num": "G3406",
                "name": "哲学・倫理学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3406.html"
            },
            {
                "tt_num": "G3531",
                "name": "東洋史",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "細見 和弘"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3531.html"
            },
            {
                "tt_num": "G3810",
                "name": "トポロジー",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "張 娟姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3810.html"
            },
            {
                "tt_num": "G4045",
                "name": "生理学実験",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8",
                    "火9"
                ],
                "teacher": [
                    "石田 正樹"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4045.html"
            },
            {
                "tt_num": "G4312",
                "name": "実践物理実験",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8",
                    "火9"
                ],
                "teacher": [
                    "松山 豊樹",
                    "中村 元彦",
                    "常田 琢"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4312.html"
            },
            {
                "tt_num": "G4856",
                "name": "文化遺産芸術学演習Ⅰ",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4856.html"
            },
            {
                "tt_num": "G5037",
                "name": "草書法",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5037.html"
            },
            {
                "tt_num": "G5062",
                "name": "仮名条幅研究",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5062.html"
            },
            {
                "tt_num": "G5309",
                "name": "体育・スポーツ経営学",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "稲葉 慎太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5309.html"
            },
            {
                "tt_num": "G5710",
                "name": "食品保蔵学",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5710.html"
            },
            {
                "tt_num": "G5966",
                "name": "障害児教育実践学演習",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "木下 理恵"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5966.html"
            },
            {
                "tt_num": "G6243",
                "name": "生涯教育政策特講",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6243.html"
            },
            {
                "tt_num": "G6531",
                "name": "異文化理解研究",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6531.html"
            },
            {
                "tt_num": "G6821",
                "name": "教育人権アプローチ演習",
                "semester": "後期",
                "period": [
                    "火7",
                    "火8"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6821.html"
            },
            {
                "tt_num": "G0066",
                "name": "教師のための情報モラル",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G0066.html"
            },
            {
                "tt_num": "G2013",
                "name": "中等教科教育法Ⅳ(英語）",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2013.html"
            },
            {
                "tt_num": "G2105",
                "name": "中等教科教育法Ⅳ（家庭）",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2105.html"
            },
            {
                "tt_num": "G2231",
                "name": "教科内容研究（美術）",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "原山 健一",
                    "山岸 公基",
                    "竹内 晋平",
                    "宇田 秀士",
                    "大山 明彦",
                    "狩野 宏明"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2231.html"
            },
            {
                "tt_num": "G3474",
                "name": "自然と地域の未来を探る★（地域生態論）",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "河本 大地"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3474.html"
            },
            {
                "tt_num": "G4024",
                "name": "文化遺産科学実験Ⅰ",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10",
                    "火11"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4024.html"
            },
            {
                "tt_num": "G4539",
                "name": "保育内容演習",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "横山 真貴子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4539.html"
            },
            {
                "tt_num": "G4548",
                "name": "合唱Ⅱ",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4548.html"
            },
            {
                "tt_num": "G4549",
                "name": "合唱Ⅳ",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "福田 清美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4549.html"
            },
            {
                "tt_num": "G5046",
                "name": "仮名創作法Ⅰ",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "北山 聡佳"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5046.html"
            },
            {
                "tt_num": "G5267",
                "name": "スポーツ医学",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5267.html"
            },
            {
                "tt_num": "G5557",
                "name": "情報技術実習",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5557.html"
            },
            {
                "tt_num": "G6103",
                "name": "幼年教育学演習",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6103.html"
            },
            {
                "tt_num": "G6112",
                "name": "幼年心理学演習",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6112.html"
            },
            {
                "tt_num": "G6920",
                "name": "保育者論",
                "semester": "後期",
                "period": [
                    "火9",
                    "火10"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6920.html"
            },
            {
                "tt_num": "G2043",
                "name": "中等教科教育法Ⅱ（理科）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2043.html"
            },
            {
                "tt_num": "G2071",
                "name": "中等教科教育法Ⅱ（書道）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "谷川 雅夫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2071.html"
            },
            {
                "tt_num": "G2108",
                "name": "中等教科教育法Ⅱ（情報）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "伊藤 剛和"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2108.html"
            },
            {
                "tt_num": "G2189",
                "name": "保育内容の指導法（造形表現）★（幼児の造形表現）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "竹内 晋平",
                    "川口 奈々子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2189.html"
            },
            {
                "tt_num": "G2190",
                "name": "保育内容の指導法（造形表現）★（幼児の造形表現）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "川口 奈々子",
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2190.html"
            },
            {
                "tt_num": "G3071",
                "name": "漢文学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3071.html"
            },
            {
                "tt_num": "G3080",
                "name": "国語科教育概説",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3080.html"
            },
            {
                "tt_num": "G5751",
                "name": "住居学(製図を含む。）",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "藤平 眞紀子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5751.html"
            },
            {
                "tt_num": "G6506",
                "name": "日本語コミュニケーション",
                "semester": "後期",
                "period": [
                    "水1",
                    "水2"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6506.html"
            },
            {
                "tt_num": "G2040",
                "name": "初等教科教育法（理科）",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "森本 弘一",
                    "信川 正順",
                    "中澤 隆",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "石井 俊行"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2040.html"
            },
            {
                "tt_num": "G2095",
                "name": "中等教科教育法Ⅱ（技術）",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2095.html"
            },
            {
                "tt_num": "G2102",
                "name": "中等教科教育法Ⅱ（家庭）",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2102.html"
            },
            {
                "tt_num": "G2226",
                "name": "教科内容研究（国語）",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "日高 佳紀",
                    "前田 広幸",
                    "橋本 昭典",
                    "有馬 義貴",
                    "棚橋 尚子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2226.html"
            },
            {
                "tt_num": "G3492",
                "name": "日本史概説Ⅱ",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "谷山 正道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3492.html"
            },
            {
                "tt_num": "G3702",
                "name": "プログラミングとデータベース",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "竹本 有紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3702.html"
            },
            {
                "tt_num": "G4046",
                "name": "生物学概論Ⅱ",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4046.html"
            },
            {
                "tt_num": "G4854",
                "name": "アジアの中の日本美術史",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4854.html"
            },
            {
                "tt_num": "G4886",
                "name": "デザインⅡ",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "新田 恭子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4886.html"
            },
            {
                "tt_num": "G5034",
                "name": "生活書式法",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "豊田 宗児"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5034.html"
            },
            {
                "tt_num": "G5242",
                "name": "スポーツ社会学",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "高橋 豪仁"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5242.html"
            },
            {
                "tt_num": "G5503",
                "name": "木材工作理論",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5503.html"
            },
            {
                "tt_num": "G6504",
                "name": "日本語教育論",
                "semester": "後期",
                "period": [
                    "水3",
                    "水4"
                ],
                "teacher": [
                    "和泉元 千春"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6504.html"
            },
            {
                "tt_num": "G2011",
                "name": "中等教科教育法Ⅱ（英語）",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "吉村 公宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2011.html"
            },
            {
                "tt_num": "G3076",
                "name": "近代文学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "日高 佳紀"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3076.html"
            },
            {
                "tt_num": "G4336",
                "name": "気象学",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "酒井 敏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4336.html"
            },
            {
                "tt_num": "G6245",
                "name": "指導と評価",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "北川 剛司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6245.html"
            },
            {
                "tt_num": "G6525",
                "name": "比較言語文化論Ⅱ",
                "semester": "後期",
                "period": [
                    "木1",
                    "木2"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6525.html"
            },
            {
                "tt_num": "G2007",
                "name": "中等教科教育法Ⅳ（国語）",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "前田 広幸",
                    "岸江 信介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2007.html"
            },
            {
                "tt_num": "G2227",
                "name": "教科内容研究（社会）",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "梶尾 悠史",
                    "根田 克彦",
                    "太田 満",
                    "渡邉 伸一",
                    "今 正秀",
                    "西田 慎",
                    "河本 大地",
                    "森口 洋一",
                    "奥田 喜道"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2227.html"
            },
            {
                "tt_num": "G2233",
                "name": "教科内容研究（技術）",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "世良 啓太",
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2233.html"
            },
            {
                "tt_num": "G3278",
                "name": "英語学概論",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "吉村 公宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3278.html"
            },
            {
                "tt_num": "G3282",
                "name": "実践英語研究Ⅱ",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "佐藤 臨太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3282.html"
            },
            {
                "tt_num": "G3841",
                "name": "グラフ理論",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "張 娟姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3841.html"
            },
            {
                "tt_num": "G4001",
                "name": "物質反応科学",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "梶原 篤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4001.html"
            },
            {
                "tt_num": "G4817",
                "name": "持続発展教育と文化遺産",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "中澤 静男"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4817.html"
            },
            {
                "tt_num": "G6273",
                "name": "人間環境心理学",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6273.html"
            },
            {
                "tt_num": "G6811",
                "name": "情報通信システム工学",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6811.html"
            },
            {
                "tt_num": "G6909",
                "name": "子どもの食と栄養",
                "semester": "後期",
                "period": [
                    "木3",
                    "木4"
                ],
                "teacher": [
                    "杉山 薫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6909.html"
            },
            {
                "tt_num": "G1576",
                "name": "初等教科教育法（英語）★（小学校外国語活動）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "エデソル・ドミニク ガイ"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1576.html"
            },
            {
                "tt_num": "G2125",
                "name": "幼児理解（教育（保育）相談を含む。）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2125.html"
            },
            {
                "tt_num": "G3044",
                "name": "日本語学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "前田 広幸"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3044.html"
            },
            {
                "tt_num": "G3078",
                "name": "日本文学概説Ⅱ",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "日高 佳紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3078.html"
            },
            {
                "tt_num": "G3423",
                "name": "政治学概論（国際政治を含む。）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "浅野 詠子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3423.html"
            },
            {
                "tt_num": "G4735",
                "name": "声楽Ⅱ（Ｙ）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4735.html"
            },
            {
                "tt_num": "G4862",
                "name": "工芸Ⅱ",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4862.html"
            },
            {
                "tt_num": "G5050",
                "name": "古筆研究Ⅰ",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "瀨川 賢一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5050.html"
            },
            {
                "tt_num": "G5308",
                "name": "球技（種目別Ⅰ）",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "西田 裕之"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5308.html"
            },
            {
                "tt_num": "G5560",
                "name": "栽培学原論",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5560.html"
            },
            {
                "tt_num": "G6120",
                "name": "心理学概論",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "中山 留美子",
                    "出口 拓彦",
                    "市来 百合子",
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6120.html"
            },
            {
                "tt_num": "G6232",
                "name": "教育社会学特講",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "粕谷 圭佑"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6232.html"
            },
            {
                "tt_num": "G6921",
                "name": "児童家庭福祉論",
                "semester": "後期",
                "period": [
                    "木5",
                    "木6"
                ],
                "teacher": [
                    "岩本 華子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6921.html"
            },
            {
                "tt_num": "G1521",
                "name": "★（家庭）",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立松 麻衣子",
                    "杉山 薫",
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1521.html"
            },
            {
                "tt_num": "G1551",
                "name": "小学校家庭",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立松 麻衣子",
                    "杉山 薫",
                    "村上 睦美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1551.html"
            },
            {
                "tt_num": "G1555",
                "name": "小学校英語",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "エデソル・ドミニク ガイ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1555.html"
            },
            {
                "tt_num": "G3030",
                "name": "国語科教育学演習Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "米田 猛"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3030.html"
            },
            {
                "tt_num": "G3077",
                "name": "日本文学史Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "田村 美由紀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3077.html"
            },
            {
                "tt_num": "G3239",
                "name": "国際理解地域研究",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3239.html"
            },
            {
                "tt_num": "G3436",
                "name": "日本史研究Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "今 正秀"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3436.html"
            },
            {
                "tt_num": "G3703",
                "name": "数理と情報",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3703.html"
            },
            {
                "tt_num": "G3836",
                "name": "確率論Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3836.html"
            },
            {
                "tt_num": "G4284",
                "name": "有機化学実験",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8",
                    "木9"
                ],
                "teacher": [
                    "山崎 祥子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4284.html"
            },
            {
                "tt_num": "G4321",
                "name": "物理学実験（コンピュータ活用を含む。）",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8",
                    "木9"
                ],
                "teacher": [
                    "常田 琢",
                    "松山 豊樹",
                    "中村 元彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4321.html"
            },
            {
                "tt_num": "G4516",
                "name": "合奏Ⅱ",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4516.html"
            },
            {
                "tt_num": "G5226",
                "name": "公衆衛生学",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "笠次 良爾",
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5226.html"
            },
            {
                "tt_num": "G5516",
                "name": "金属工作設計",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "世良 啓太"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5516.html"
            },
            {
                "tt_num": "G5904",
                "name": "肢体不自由の医学と心理",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "全 有耳"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5904.html"
            },
            {
                "tt_num": "G1001",
                "name": "博物館資料論",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "巽 善信"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1001.html"
            },
            {
                "tt_num": "G2183",
                "name": "子どもと表現",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "劉 麟玉",
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2183.html"
            },
            {
                "tt_num": "G3013",
                "name": "漢字学",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3013.html"
            },
            {
                "tt_num": "G3419",
                "name": "社会科教育研究Ⅳ",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "森口 洋一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3419.html"
            },
            {
                "tt_num": "G3727",
                "name": "確率論Ⅰ",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "高木 祥司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3727.html"
            },
            {
                "tt_num": "G4515",
                "name": "指揮法Ⅱ",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4515.html"
            },
            {
                "tt_num": "G4761",
                "name": "オペラⅠ",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4761.html"
            },
            {
                "tt_num": "G4845",
                "name": "絵画Ⅱ(人物画研究）",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "狩野 宏明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4845.html"
            },
            {
                "tt_num": "G5211",
                "name": "スポーツ指導方法論",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "田附 俊一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5211.html"
            },
            {
                "tt_num": "G5562",
                "name": "栽培演習",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5562.html"
            },
            {
                "tt_num": "G6277",
                "name": "教育心理学演習",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "石井 僚"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6277.html"
            },
            {
                "tt_num": "G6282",
                "name": "認知発達演習",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "中山 留美子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6282.html"
            },
            {
                "tt_num": "G6319",
                "name": "学校教育相談演習",
                "semester": "後期",
                "period": [
                    "木9",
                    "木10"
                ],
                "teacher": [
                    "市来 百合子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6319.html"
            },
            {
                "tt_num": "G2061",
                "name": "初等教科教育法（図画工作）",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "宇田 秀士"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2061.html"
            },
            {
                "tt_num": "G2104",
                "name": "初等教科教育法（家庭）",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2104.html"
            },
            {
                "tt_num": "G2232",
                "name": "教科内容研究（保健体育）",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "立 正伸",
                    "高橋 豪仁",
                    "笠次 良爾",
                    "井上 邦子",
                    "髙木 祐介",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2232.html"
            },
            {
                "tt_num": "G4072",
                "name": "文化遺産科学Ⅱ",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "青木 智史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4072.html"
            },
            {
                "tt_num": "G4276",
                "name": "熱とエネルギー",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "平井 國友"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4276.html"
            },
            {
                "tt_num": "G5933",
                "name": "障害児教育方法学演習",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "堀田 千絵"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5933.html"
            },
            {
                "tt_num": "G9970",
                "name": "日本人の宗教観",
                "semester": "後期",
                "period": [
                    "金1",
                    "金2"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9970.html"
            },
            {
                "tt_num": "G1100",
                "name": "読書と豊かな人間性",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "渡邉 良枝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1100.html"
            },
            {
                "tt_num": "G2120",
                "name": "教育・保育とカリキュラム★（幼児と教育）",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2120.html"
            },
            {
                "tt_num": "G2181",
                "name": "子どもと環境",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "森本 弘一",
                    "辻野 亮",
                    "舟橋 友香"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2181.html"
            },
            {
                "tt_num": "G4256",
                "name": "量子力学の世界",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "松山 豊樹"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4256.html"
            },
            {
                "tt_num": "G4763",
                "name": "演奏実習Ⅰ（Ｂ）",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4763.html"
            },
            {
                "tt_num": "G4815",
                "name": "文化遺産記録保存演習Ⅰ",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "大山 明彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4815.html"
            },
            {
                "tt_num": "G4852",
                "name": "ユーラシア美術史",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "山岸 公基"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4852.html"
            },
            {
                "tt_num": "G4870",
                "name": "工芸理論特講",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4870.html"
            },
            {
                "tt_num": "G5224",
                "name": "養護概説",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "笠次 良爾"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5224.html"
            },
            {
                "tt_num": "G5511",
                "name": "技術教材加工法",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5511.html"
            },
            {
                "tt_num": "G5934",
                "name": "知的障害教育方法",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "堀田 千絵"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5934.html"
            },
            {
                "tt_num": "G6309",
                "name": "生涯教育演習",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6309.html"
            },
            {
                "tt_num": "G6315",
                "name": "学習心理学特講",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "堀 麻佑子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6315.html"
            },
            {
                "tt_num": "G6521",
                "name": "国際文化論",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "小村 明子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6521.html"
            },
            {
                "tt_num": "G6814",
                "name": "マルチメディア概論",
                "semester": "後期",
                "period": [
                    "金3",
                    "金4"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6814.html"
            },
            {
                "tt_num": "G1108",
                "name": "情報メディアの活用",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "古田 壮宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1108.html"
            },
            {
                "tt_num": "G2030",
                "name": "中等教科教育法Ⅱ（数学）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "高木 祥司",
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2030.html"
            },
            {
                "tt_num": "G2054",
                "name": "初等教科教育法（音楽）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "劉 麟玉",
                    "宮田 知絵",
                    "宮内 晴加",
                    "山中 信子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2054.html"
            },
            {
                "tt_num": "G2064",
                "name": "中等教科教育法Ⅳ（美術）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "竹内 晋平"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2064.html"
            },
            {
                "tt_num": "G2229",
                "name": "教科内容研究（理科）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "石井 俊行",
                    "松井 淳",
                    "石田 正樹",
                    "信川 正順",
                    "梶原 篤",
                    "山崎 祥子",
                    "松山 豊樹",
                    "森本 弘一",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "常田 琢",
                    "小長谷 達郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2229.html"
            },
            {
                "tt_num": "G3014",
                "name": "漢文学研究",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "橋本 昭典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3014.html"
            },
            {
                "tt_num": "G3214",
                "name": "英米文学史Ⅱ",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3214.html"
            },
            {
                "tt_num": "G3506",
                "name": "経済学・社会学研究Ⅳ",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3506.html"
            },
            {
                "tt_num": "G3537",
                "name": "哲学",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3537.html"
            },
            {
                "tt_num": "G4009",
                "name": "★（理科教育演習Ⅱ）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "石井 俊行",
                    "松井 淳",
                    "石田 正樹",
                    "信川 正順",
                    "梶原 篤",
                    "山崎 祥子",
                    "松山 豊樹",
                    "森本 弘一",
                    "和田 穣隆",
                    "中村 元彦",
                    "藤井 智康",
                    "常田 琢",
                    "小長谷 達郎"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4009.html"
            },
            {
                "tt_num": "G4012",
                "name": "電磁気学",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "中村 元彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4012.html"
            },
            {
                "tt_num": "G4733",
                "name": "ピアノⅡ（Ｂ）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "奥田 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4733.html"
            },
            {
                "tt_num": "G4766",
                "name": "楽式論",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4766.html"
            },
            {
                "tt_num": "G4863",
                "name": "工芸Ⅳ",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "原山 健一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4863.html"
            },
            {
                "tt_num": "G5541",
                "name": "情報概論",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5541.html"
            },
            {
                "tt_num": "G5765",
                "name": "家庭看護学（実習を含む。）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "中川 愛"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5765.html"
            },
            {
                "tt_num": "G6241",
                "name": "教育経営学特講",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "山中 矢展"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6241.html"
            },
            {
                "tt_num": "G6546",
                "name": "日本語演習Ⅱ（読解）",
                "semester": "後期",
                "period": [
                    "金5",
                    "金6"
                ],
                "teacher": [
                    "新谷 遙"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6546.html"
            },
            {
                "tt_num": "G1150",
                "name": "読書と豊かな人間性",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "渡邉 良枝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1150.html"
            },
            {
                "tt_num": "G2185",
                "name": "保育内容の指導法（人間関係）★（幼児と人間関係）",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "吉次 豊見"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2185.html"
            },
            {
                "tt_num": "G3058",
                "name": "古典文学研究",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "有馬 義貴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3058.html"
            },
            {
                "tt_num": "G3216",
                "name": "英米文学作品研究",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "門田 守"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3216.html"
            },
            {
                "tt_num": "G3259",
                "name": "言語文化研究Ⅱ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "アムンルド トーマス"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3259.html"
            },
            {
                "tt_num": "G3503",
                "name": "経済学",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3503.html"
            },
            {
                "tt_num": "G3771",
                "name": "複素解析",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3771.html"
            },
            {
                "tt_num": "G4102",
                "name": "天文学",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "信川 正順"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4102.html"
            },
            {
                "tt_num": "G4257",
                "name": "物理学概論Ⅱ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "中村 元彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4257.html"
            },
            {
                "tt_num": "G4512",
                "name": "作曲・編曲法基礎演習Ⅱ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "北條 美香代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4512.html"
            },
            {
                "tt_num": "G5231",
                "name": "体育原理",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "井上 邦子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5231.html"
            },
            {
                "tt_num": "G5544",
                "name": "栽培環境学",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "箕作 和彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5544.html"
            },
            {
                "tt_num": "G5552",
                "name": "電気回路学",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "薮 哲郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5552.html"
            },
            {
                "tt_num": "G5731",
                "name": "調理学実習",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8",
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "村上 睦美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5731.html"
            },
            {
                "tt_num": "G5776",
                "name": "被服構成学実習Ⅱ（実験を含む。）■（被服学実験）",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8",
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "木林 有理子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5776.html"
            },
            {
                "tt_num": "G5957",
                "name": "病弱児教育方法",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "森脇 勤"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5957.html"
            },
            {
                "tt_num": "G6104",
                "name": "幼小期の教育",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "廣瀬 聡弥"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6104.html"
            },
            {
                "tt_num": "G6291",
                "name": "心理学検査Ⅱ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "中山 留美子",
                    "出口 拓彦",
                    "石井 僚"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6291.html"
            },
            {
                "tt_num": "G6305",
                "name": "生涯教育計画特講Ⅰ",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "片岡 弘勝"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6305.html"
            },
            {
                "tt_num": "G6547",
                "name": "日本語演習Ⅱ（作文）",
                "semester": "後期",
                "period": [
                    "金7",
                    "金8"
                ],
                "teacher": [
                    "新谷 遙"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6547.html"
            },
            {
                "tt_num": "G2180",
                "name": "子どもと人間関係",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "吉次 豊見"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2180.html"
            },
            {
                "tt_num": "G3403",
                "name": "倫理学概論",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "梶尾 悠史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3403.html"
            },
            {
                "tt_num": "G3504",
                "name": "経済学・社会学研究Ⅱ",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "森 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3504.html"
            },
            {
                "tt_num": "G3779",
                "name": "微分積分",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "高橋 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3779.html"
            },
            {
                "tt_num": "G4530",
                "name": "音楽学概論",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "竹内 直"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4530.html"
            },
            {
                "tt_num": "G4635",
                "name": "ピアノⅣ（Ｂ）",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "奥田 尚子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4635.html"
            },
            {
                "tt_num": "G4762",
                "name": "演奏実習Ⅰ（Ａ）",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "前田 則子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4762.html"
            },
            {
                "tt_num": "G5504",
                "name": "材料工作実習",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "谷口 義昭"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5504.html"
            },
            {
                "tt_num": "G6537",
                "name": "言語文化特論",
                "semester": "後期",
                "period": [
                    "金9",
                    "金10"
                ],
                "teacher": [
                    "阪村 圭英子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6537.html"
            },
            {
                "tt_num": "G1005",
                "name": "博物館情報・メディア論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "青木 智史"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1005.html"
            },
            {
                "tt_num": "G1104",
                "name": "学校図書館メディアの構成",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山本 貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1104.html"
            },
            {
                "tt_num": "G1154",
                "name": "学校図書館メディアの構成",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山本 貴子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1154.html"
            },
            {
                "tt_num": "G2187",
                "name": "保育内容の指導法（環境Ⅱ）★（幼児と環境Ⅱ）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "藤崎 亜由子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2187.html"
            },
            {
                "tt_num": "G2216",
                "name": "教職実践演習（養教）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "笠次 良爾",
                    "辻井 啓之",
                    "髙木 祐介"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2216.html"
            },
            {
                "tt_num": "G2230",
                "name": "教科内容研究（音楽）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "劉 麟玉",
                    "前田 則子",
                    "北條 美香代",
                    "水野 亜歴"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G2230.html"
            },
            {
                "tt_num": "G3544",
                "name": "文化遺産特論Ⅰ（考古学）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3544.html"
            },
            {
                "tt_num": "G3548",
                "name": "文化遺産特論Ⅱ（建築史）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "登谷 伸宏"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3548.html"
            },
            {
                "tt_num": "G3549",
                "name": "文化遺産科学演習Ⅰ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3549.html"
            },
            {
                "tt_num": "G3806",
                "name": "幾何基礎",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3806.html"
            },
            {
                "tt_num": "G3843",
                "name": "算数・数学教育実践演習Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "高木 祥司",
                    "伊藤 直治",
                    "高橋 亮",
                    "川崎 謙一郎",
                    "近藤 裕",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3843.html"
            },
            {
                "tt_num": "G3845",
                "name": "算数・数学教育実践演習Ⅳ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "川崎 謙一郎",
                    "伊藤 直治",
                    "高橋 亮",
                    "近藤 裕",
                    "高木 祥司",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3845.html"
            },
            {
                "tt_num": "G4074",
                "name": "文化遺産科学実験Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "金原 正明"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4074.html"
            },
            {
                "tt_num": "G4231",
                "name": "無機分析化学実験",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "丸尾 雅啓"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4231.html"
            },
            {
                "tt_num": "G4356",
                "name": "動物系統学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "下村 通誉"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4356.html"
            },
            {
                "tt_num": "G4359",
                "name": "生物科学特別講義",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4359.html"
            },
            {
                "tt_num": "G4764",
                "name": "オペラⅡ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "水野 亜歴"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4764.html"
            },
            {
                "tt_num": "G4874",
                "name": "文化遺産保存修復概論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岡 岩太郎"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4874.html"
            },
            {
                "tt_num": "G4878",
                "name": "絵画Ⅳ（日本画）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "井手本 貴子"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4878.html"
            },
            {
                "tt_num": "G4882",
                "name": "グラフィックデザイン",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "吉田 幸代"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4882.html"
            },
            {
                "tt_num": "G4883",
                "name": "デザイン理論特講",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "江藤 亮"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4883.html"
            },
            {
                "tt_num": "G4887",
                "name": "日本工芸史",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4887.html"
            },
            {
                "tt_num": "G4888",
                "name": "コンピュータと文化遺産Ⅰ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G4888.html"
            },
            {
                "tt_num": "G5022",
                "name": "仮名造形論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "瀨川 賢一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5022.html"
            },
            {
                "tt_num": "G5292",
                "name": "野外活動(雪上)",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "立 正伸",
                    "黒澤 毅",
                    "若吉 浩二"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5292.html"
            },
            {
                "tt_num": "G5303",
                "name": "障害者スポーツ論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5303.html"
            },
            {
                "tt_num": "G5312",
                "name": "予防医学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "冨岡 公子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5312.html"
            },
            {
                "tt_num": "G5314",
                "name": "細菌及び免疫学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "井上 寛一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5314.html"
            },
            {
                "tt_num": "G5315",
                "name": "疾病予防及び看護学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "木村 洋子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5315.html"
            },
            {
                "tt_num": "G5564",
                "name": "職業指導",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "山本 桂子"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5564.html"
            },
            {
                "tt_num": "G5774",
                "name": "衣生活文化論（実習を含む。）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "池田 仁美"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5774.html"
            },
            {
                "tt_num": "G5912",
                "name": "聴覚障害児の教育Ⅰ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "中井 弘征"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5912.html"
            },
            {
                "tt_num": "G5917",
                "name": "聴覚障害児の教育Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "中井 弘征"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5917.html"
            },
            {
                "tt_num": "G5955",
                "name": "障害者福祉論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "趙 没名"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5955.html"
            },
            {
                "tt_num": "G5958",
                "name": "発達障害児生活指導論",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "森下 勇"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5958.html"
            },
            {
                "tt_num": "G5964",
                "name": "特別支援教育実践演習Ⅰ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "越野 和之"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5964.html"
            },
            {
                "tt_num": "G6296",
                "name": "学校臨床心理学特講",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "竹島 克典"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6296.html"
            },
            {
                "tt_num": "G6312",
                "name": "教育評価",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "岡本 真彦"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6312.html"
            },
            {
                "tt_num": "G6314",
                "name": "社会心理学",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "諏訪 晃一"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6314.html"
            },
            {
                "tt_num": "G6321",
                "name": "生涯学習支援特講Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "生田 周二"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G6321.html"
            },
            {
                "tt_num": "G8074",
                "name": "保育実習（保育所Ⅱ）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "横山 真貴子",
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8074.html"
            },
            {
                "tt_num": "G8075",
                "name": "保育実習（施設）",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "担当教員未定"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8075.html"
            },
            {
                "tt_num": "G9980",
                "name": "学級づくり",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "粕谷 貴志"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9980.html"
            },
            {
                "tt_num": "G9985",
                "name": "新理数基礎ゼミナールⅡ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9985.html"
            },
            {
                "tt_num": "G9987",
                "name": "新理数教育Ⅳ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9987.html"
            },
            {
                "tt_num": "G9989",
                "name": "新理数教育Ⅱ",
                "semester": "後期",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "松山 豊樹",
                    "松井 淳",
                    "伊藤 直治",
                    "石田 正樹",
                    "信川 正順",
                    "高橋 亮",
                    "山崎 祥子",
                    "和田 穣隆",
                    "川崎 謙一郎",
                    "藤井 智康",
                    "常田 琢",
                    "近藤 裕",
                    "片岡 佐知子",
                    "高木 祥司",
                    "小川 泰朗",
                    "舟橋 友香"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9989.html"
            },
            {
                "tt_num": "G1552",
                "name": "小学校英語",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "エデソル・ドミニク ガイ"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1552.html"
            },
            {
                "tt_num": "G1556",
                "name": "小学校家庭",
                "semester": "後期",
                "period": [
                    "木7",
                    "木8"
                ],
                "teacher": [
                    "立松 麻衣子",
                    "杉山 薫",
                    "村上 睦美"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1556.html"
            },
            {
                "tt_num": "G1003",
                "name": "博物館実習",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "金原 正明",
                    "巽 善信",
                    "荻野 裕子",
                    "齊藤 純"
                ],
                "credits": 3,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G1003.html"
            },
            {
                "tt_num": "G3520",
                "name": "地理学野外実験",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "河本 大地",
                    "根田 克彦"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G3520.html"
            },
            {
                "tt_num": "G5294",
                "name": "地域スポーツ実習",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "高橋 豪仁",
                    "井上 邦子",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5294.html"
            },
            {
                "tt_num": "G5301",
                "name": "保健体育演習",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "立 正伸",
                    "高橋 豪仁",
                    "笠次 良爾",
                    "井上 邦子",
                    "髙木 祐介",
                    "宮尾 夏姫"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G5301.html"
            },
            {
                "tt_num": "G8071",
                "name": "事前・事後指導（保育実習Ⅰ）",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "横山 真貴子",
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8071.html"
            },
            {
                "tt_num": "G8076",
                "name": "事前・事後指導（保育実習Ⅱ）",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "残華 雅子",
                    "横山 真貴子",
                    "廣瀬 聡弥",
                    "大西 賢治"
                ],
                "credits": 1,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G8076.html"
            },
            {
                "tt_num": "G9979",
                "name": "学校支援実践",
                "semester": "通年",
                "period": [
                    "集中"
                ],
                "teacher": [
                    "柿本 篤子",
                    "竹村 謙司"
                ],
                "credits": 2,
                "page": "https://www.nara-edu.ac.jp/ADMIN/KYOUMU/syllabus/2021/detail/2021_01_G9979.html"
            }
        ]
    }
    var table = '<tr><th>時間割番号</th><th>科目名</th><th>開講期間</th><th>曜日・時限</th><th>単位数</th><th>教員名</th></tr>';
    for (var i = 0; i < data["subject"].length; i++) {
        if (data["subject"][i]["tt_num"].indexOf(tt_num) != -1) {
            if (data["subject"][i]["name"].indexOf(name) != -1) {
                if (data["subject"][i]["semester"].indexOf(semester) != -1) {
                    if (period_arr.length == 0) {
                        var period;
                        var teacher;
                        for (var j = 0; j < data["subject"][i]["period"].length; j++) {
                            if (j == 0) {
                                period = data["subject"][i]["period"][j]
                            } else {
                                period += "，" + data["subject"][i]["period"][j]
                            }
                        }
                        for (var k = 0; k < data["subject"][i]["teacher"].length; k++) {
                            if (k == 0) {
                                teacher = data["subject"][i]["teacher"][k]
                            } else {
                                teacher += "<br>" + data["subject"][i]["teacher"][k]
                            }
                        }
                        table += '<tr><td>' + data["subject"][i]["tt_num"] + "</td><td>" + data["subject"][i]["name"] + '<br><a href="' + data["subject"][i]["page"] + '"class="syllabus" target="_blank">シラバス</a></td><td>' + data["subject"][i]["semester"] + "</td><td>" + period + "</td><td>" + data["subject"][i]["credits"] + "</td><td>" + teacher + "</td></tr>"
                    } else {
                        period_loop: for (var m = 0; m < period_arr.length; m++) {
                            for (var n = 0; n < data["subject"][i]["period"].length; n++) {
                                if (period_arr[m] == data["subject"][i]["period"][n]) {
                                    var period;
                                    var teacher;
                                    for (var j = 0; j < data["subject"][i]["period"].length; j++) {
                                        if (j == 0) {
                                            period = data["subject"][i]["period"][j]
                                        } else {
                                            period += "，" + data["subject"][i]["period"][j]
                                        }
                                    }
                                    for (var k = 0; k < data["subject"][i]["teacher"].length; k++) {
                                        if (k == 0) {
                                            teacher = data["subject"][i]["teacher"][k]
                                        } else {
                                            teacher += "<br>" + data["subject"][i]["teacher"][k]
                                        }
                                    }
                                    table += '<tr><td>' + data["subject"][i]["tt_num"] + "</td><td>" + data["subject"][i]["name"] + '<br><a href="' + data["subject"][i]["page"] + '"class="syllabus" target="_blank">シラバス</a></td><td>' + data["subject"][i]["semester"] + "</td><td>" + period + "</td><td>" + data["subject"][i]["credits"] + "</td><td>" + teacher + "</td></tr>"
                                    break period_loop
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById('data_content').innerHTML = '<table>' + table + '</table>';
}
