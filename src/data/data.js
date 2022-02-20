const data = [
  {
    id: "1",
    name: "Овен",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
    img: "https://m.netinfo.bg/edna/img/zodiac/aries.svg",
    description:
      "Ако сте обвързани, днес прекарайте повече време с човека до вас и направете нещо заедно. Ако пък нямате партньор, вижте се с приятел. Имате желание да се срещате с хора и да споделяте, така че компанията ще ви се отрази добре. В днешния ден ще се чувствате вдъхновени от някаква идея или от нещо, което предстои.",
    date: "21.03 - 20.04",
  },

  {
    id: "2",
    name: "Лъв",
    img: "https://m.netinfo.bg/edna/img/zodiac/leo.svg",
    description:
      "Днешният ден ще бъде по-приятен за вас, ако за момент забравите за правилата и за реда и оставите събитията да следват своя собствен ход. Дори да си мислите как да изпълните някои задачи, не забравяйте да си почивате и да отделите време за приятни занимания. Откажете се от контрола и просто се насладете на деня.",
    date: "23.07 - 23.08",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "3",
    name: "Стрелец",
    img: "https://m.netinfo.bg/edna/img/zodiac/sagittarius.svg",
    description:
      "Днес не се оставяйте на рутината, защото, ако излезете навън и направите нещо интересно, ще се разнообразите и ще се почувствате по-добре. Вечерта бъдете по-внимателни, защото е възможно да влезете в спор с партньора си и някой да реагира по-остро. И все пак, ако успеете да говорите искрено и спокойно, вероятно всичко бързо ще мине и замине.",
    date: "23.11 - 21.12",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "4",
    name: "Телец",
    img: "https://m.netinfo.bg/edna/img/zodiac/taurus.svg",
    description:
      "Днес повечето от вас ще предпочетат по-активните занимания – спорт, игри с децата или забавления с приятели. Ще бъдете настроени творчески и ще търсите начини да разнообразите деня си. В личните отношения – и любовни, и приятелски, всичко ще върви чудесно. Използвайте позитивните влияния, за да обсъдите с партньора си нещо, за което не сте успели да постигнете компромис.",
    date: "21.04 - 21.05",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "5",
    name: "Дева",
    img: "https://m.netinfo.bg/edna/img/zodiac/virgo.svg",
    description:
      "Днес повечето от вас ще предпочетат по-активните занимания – спорт, игри с децата или забавления с приятели. Ще бъдете настроени творчески и ще търсите начини да разнообразите деня си. В личните отношения – и любовни, и приятелски, всичко ще върви чудесно. Използвайте позитивните влияния, за да обсъдите с партньора си нещо, за което не сте успели да постигнете компромис.",
    date: "24.08 - 23.09",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "6",
    name: "Козирог",
    img: "https://m.netinfo.bg/edna/img/zodiac/capricorn.svg",
    description:
      "Днес повечето от вас ще предпочетат по-активните занимания – спорт, игри с децата или забавления с приятели. Ще бъдете настроени творчески и ще търсите начини да разнообразите деня си. В личните отношения – и любовни, и приятелски, всичко ще върви чудесно. Използвайте позитивните влияния, за да обсъдите с партньора си нещо, за което не сте успели да постигнете компромис.",
    date: "22.12 - 20.01",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "7",
    name: "Близнаци",
    img: "https://m.netinfo.bg/edna/img/zodiac/gemini.svg",
    description:
      "Днес повечето от вас ще предпочетат по-активните занимания – спорт, игри с децата или забавления с приятели. Ще бъдете настроени творчески и ще търсите начини да разнообразите деня си. В личните отношения – и любовни, и приятелски, всичко ще върви чудесно. Използвайте позитивните влияния, за да обсъдите с партньора си нещо, за което не сте успели да постигнете компромис.",
    date: "22.05 - 21.06",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "8",
    name: "Везни",
    img: "https://m.netinfo.bg/edna/img/zodiac/libra.svg",
    description:
      "Днес повечето от вас ще предпочетат по-активните занимания – спорт, игри с децата или забавления с приятели. Ще бъдете настроени творчески и ще търсите начини да разнообразите деня си. В личните отношения – и любовни, и приятелски, всичко ще върви чудесно. Използвайте позитивните влияния, за да обсъдите с партньора си нещо, за което не сте успели да постигнете компромис.",
    date: "21.01 - 19.02",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "9",
    name: "Водолей",
    img: "https://m.netinfo.bg/edna/img/zodiac/aquarius.svg",
    description:
      "Днес повечето от вас ще предпочетат по-активните занимания – спорт, игри с децата или забавления с приятели. Ще бъдете настроени творчески и ще търсите начини да разнообразите деня си. В личните отношения – и любовни, и приятелски, всичко ще върви чудесно. Използвайте позитивните влияния, за да обсъдите с партньора си нещо, за което не сте успели да постигнете компромис.",
    date: "21.01 - 19.02",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "10",
    name: "Рак   ",
    img: "https://m.netinfo.bg/edna/img/zodiac/cancer.svg",
    description:
      "Днес повечето от вас ще предпочетат по-активните занимания – спорт, игри с децата или забавления с приятели. Ще бъдете настроени творчески и ще търсите начини да разнообразите деня си. В личните отношения – и любовни, и приятелски, всичко ще върви чудесно. Използвайте позитивните влияния, за да обсъдите с партньора си нещо, за което не сте успели да постигнете компромис.",
    date: "22.06 - 22.07",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "11",
    name: "Скорпион",
    img: "https://m.netinfo.bg/edna/img/zodiac/scorpio.svg",
    description:
      "Днес повечето от вас ще предпочетат по-активните занимания – спорт, игри с децата или забавления с приятели. Ще бъдете настроени творчески и ще търсите начини да разнообразите деня си. В личните отношения – и любовни, и приятелски, всичко ще върви чудесно. Използвайте позитивните влияния, за да обсъдите с партньора си нещо, за което не сте успели да постигнете компромис.",
    date: "24.10 - 22.11",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },

  {
    id: "12",
    name: "Риби",
    img: "https://m.netinfo.bg/edna/img/zodiac/pisces.svg",
    description:
      "Днес повечето от вас ще предпочетат по-активните занимания – спорт, игри с децата или забавления с приятели. Ще бъдете настроени творчески и ще търсите начини да разнообразите деня си. В личните отношения – и любовни, и приятелски, всичко ще върви чудесно. Използвайте позитивните влияния, за да обсъдите с партньора си нещо, за което не сте успели да постигнете компромис.",
    date: "20.02 - 20.03",
    daily: "Дневен хороскоп",
    monthly: "Месечен хороскоп",
  },
];

export default data;
