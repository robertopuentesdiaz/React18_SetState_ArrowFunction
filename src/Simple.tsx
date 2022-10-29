import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Title } from '@mantine/core';

export default function Simple() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
    console.log('outside :', count);
    setCount(count + 1);
    console.log('outside :', count);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title order={3} color="blue.5">
            Double setState Funny Way
          </Title>
          <Alert severity="info">{count}</Alert>
          <Button size="small" onClick={add} variant="contained">
            ADD COUNT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
