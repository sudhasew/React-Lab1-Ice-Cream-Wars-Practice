type userProps = {
  user: string;
};

export const Header = (props: userProps) => {
  return (
    <div className="headers">
      <h1 className="headTitle">Ice Cream Wars</h1>
      <h4 style={{ fontSize: "20px", fontWeight: "400", marginTop: "0" }}>
        {props.user}
      </h4>
    </div>
  );
};
