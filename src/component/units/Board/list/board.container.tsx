import BoardListPresenter from "./board.presenter";

const DataCard = [
  { Category: "카테고리1", title: "카드1" },
  { Category: "카테고리2", title: "카드2" },
  { Category: "카테고리3", title: "카드3" },
  { Category: "카테고리4", title: "카드4" },
  { Category: "카테고리5", title: "카드5" },
  { Category: "카테고리6", title: "카드6" },
  { Category: "카테고리7", title: "카드7" },
  { Category: "카테고리8", title: "카드8" },
  { Category: "카테고리9", title: "카드9" },
];

export default function BoardListContainer() {
  return <BoardListPresenter DataCard={DataCard} />;
}
