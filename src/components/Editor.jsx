import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width:${({ open }) => (open ? "100%" : "50%")};
`;

const Header = styled(Box)`
  display: flex;
  flex-direction: row;
  background: #060606;
  color: white;
  justify-content: space-between;
  height: 35px;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
`;
const CloseButton = styled(CloseFullscreenIcon)`
  transition: margin-right 0.3s;
  margin-right: ${({ open }) => (open ? "0.5rem" : "0")};
`;

const Editor = ({ title, icon, color,mode,value,onChange }) => {
  const [open, setOpen] = useState(true);

  console.log('open',open)
  function handleChange(value) {
    onChange(value)
  }

  return (

    <Container open={open}>
      <Header>
        <Heading>
          <Box
            sx={{
              backgroundColor: color,
              color: "black",
              height: 20,
              width: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0.5,
              marginRight: 2
            }}
            component="span"
          >
            {icon}
          </Box>
          {title}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen(prevState => !prevState)}
        />
      </Header>

   
      <AceEditor
        mode={mode}
        theme="monokai"
        onChange={handleChange}
        name="html-editor"
        value={value}
        width={open ? "100%" : "50%"} 
        style={{ transition: "width 0.3s", maxWidth: open ? "100%" : "50%" }} 
        editorProps={{ $blockScrolling: true }}
      />

    </Container>
 
  );
};

export default Editor;