import { BarLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "100px auto",
};

const Spinners = ({ loading }) => {
  return (
    <BarLoader
      color="#211F1F"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinners;
