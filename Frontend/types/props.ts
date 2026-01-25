import { Dispatch, SetStateAction } from "react";

type MsgProps = {
  currState: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};
export default MsgProps;
