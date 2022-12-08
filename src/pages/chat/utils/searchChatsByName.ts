const searchChatsByName = (e: Event) => {
  const chats = document.querySelectorAll(".user__item");
  chats.forEach((chat: HTMLElement) => {
    const chatName = chat
      .querySelector(".user__name")
      ?.textContent?.toLowerCase();

    if (
      chatName?.includes((e.target as HTMLInputElement).value.toLowerCase())
    ) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

export { searchChatsByName };

//крайне плохая реализоция сёрча, но пришлось,
// так как рендер сайдбара костыльно был сделан изначально(по неопытности с взвимодействием со стором на нативном js)
// и уже немало логики взаимодействует.. поэтому не хочется перерывать тысячу файлов ради сёрча
