const chatScrollBottom = () => {
  const chatWindow = document.querySelector(".chat-main__messages");
  chatWindow ? (chatWindow.scrollTop = chatWindow?.scrollHeight) : null;
};

export { chatScrollBottom };
