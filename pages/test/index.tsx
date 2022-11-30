export default function TestPage() {
  return (
    <>
      <div className="input">
        <div className="send">
          <img alt="" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img alt="" />
          </label>
          <button>Send</button>
        </div>
      </div>
    </>
  );
}
