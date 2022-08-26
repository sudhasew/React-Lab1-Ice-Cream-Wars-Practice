type AdProps = {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
};

export const Ad = (props: AdProps) => {
  const styles = {
    fontSize: props.fontSize + "px",
  };
  return (
    <div className="adContainer">
      <button className="btnCont">
        <h2 className="paraVote">Vote For</h2>
        <h2 className="flavor" style={styles}>
          {props.flavor}
        </h2>
      </button>
    </div>
  );
};
