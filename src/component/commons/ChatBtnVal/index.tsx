export const ValidationURL = (session: string, router: string) => {
  const EditRouter = "edit";
  // console.log("채팅버튼", EditRouter, session, router);
  if (EditRouter === router || session === router) {
    return "채팅목록";
  } else {
    console.log("JS 채팅버튼", EditRouter, session, router);
    return "채팅걸기";
  }
};
