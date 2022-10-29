import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Title } from '@mantine/core';

export default function Arrow() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((count) => {
      console.log('inside 1:', count);
      return count + 1;
    });
    setCount((count) => {
      console.log('inside 2:', count);
      return count + 1;
    });
    console.log('outside :', count);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title order={3} color="blue.5">
            Double setState Arrow Way
          </Title>
          <Alert severity="success">{count}</Alert>
          <Button size="small" onClick={add} variant="contained">
            ADD COUNT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
