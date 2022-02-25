import React from "react";
import { Wrapper, Box, BoxHeading, IconButton } from "./Modal.style";
import ClickMuncher from "../../Helpers/ClickMuncher";
import { Heading2 } from "../../ThemeComponents/Headings";
import { IoMdClose } from "react-icons/io";
const Modal = ({ children, removeModel, heading }) => {
  const removeModelHandler = (e) => {
    removeModel();
  };
  const [opacity, setOpacity] = React.useState(0);
  React.useEffect(() => {
    setOpacity(1);
    return () => {
      setOpacity(0);
    };
  }, []);
  return (
    <Wrapper onClick={removeModelHandler}>
      <ClickMuncher>
        <Box opacity={opacity}>
          <BoxHeading>
            <Heading2>{heading}</Heading2>
            <IconButton onClick={removeModelHandler}>
              <IoMdClose color="red" />
            </IconButton>
          </BoxHeading>
          {children}
        </Box>
      </ClickMuncher>
    </Wrapper>
  );
};

export default Modal;

Modal.defaultProps = {
  heading: "No Heading Given",
};
