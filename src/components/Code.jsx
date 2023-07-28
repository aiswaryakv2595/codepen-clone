import React, { useEffect, useState } from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material';
import useLocalStorage from '../hooks/useLocalStorage';
const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
`;

const OutputFrame = styled('iframe')`
  flex-grow: 1;
  position: static;
  border: none;
  color: white;
`;

const Code = () => {
  const [html, setHtml] = useLocalStorage('html','');
  const [css, setCss] = useLocalStorage('css','');
  const [js, setJs] = useLocalStorage('js','');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}
          <style>${css}</style>
          <script>${js}</script>
          </body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
    <Container>
      <Editor title="HTML" icon="/" color="#FF3C41" mode="html" value={html} onChange={setHtml} />
      <Editor title="CSS" icon="*" color="#0EBEFF" mode="css" value={css} onChange={setCss} />
      <Editor title="Javascript" icon="()" color="#FCD000" mode="javascript" value={js} onChange={setJs} />
      
    </Container>
    <OutputFrame srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" height="100%" />
    </>
  );
};

export default Code;