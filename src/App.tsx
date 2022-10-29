import * as React from 'react';
import { Container, Center } from '@mantine/core';
import Grid from '@mui/material/Grid';
import { Title } from '@mantine/core';

import Simple from './Simple';
import Arrow from './Arrow';

export default function App() {
  return (
    <Container>
      <Center>
        <div className="App">
          <Title order={1}>React and setState</Title>
          <br />
          <br />
          <Simple />
          <br />
          <br />
          <Arrow />
        </div>
      </Center>
    </Container>
  );
}
