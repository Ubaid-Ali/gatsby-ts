import React from "react";
import Layout from "../components/Layout";

// import material-ui
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

// Index.tsx
export default () => {
  const classes = useStyles();

  return (
    <div>
      <Layout>
        <div className={classes.root}>
          <Button variant="contained" color="secondary">
            Material-ui Button
        </Button>
        </div>
        
        <h1>Home Page</h1>
        <p>This is just index file.</p>
      </Layout>
    </div>
  );
};
