export const ValidationURL = (session: string, router: string) => {
  const EditRouter = "edit";
  if (EditRouter === router || session === router) {
    return "채팅목록";
  } else {
    return "채팅걸기";
  }
};
