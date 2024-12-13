import React from "react";
import { Box, Typography } from "@strapi/design-system";

const Welcome = () => {
  return (
    <Box padding={8} background="neutral0">
      <Typography as="h1" variant="alpha">
        Welcome to Kanta Dashboard
      </Typography>
      <Typography as="p" variant="epsilon" textColor="neutral600">
        Manage your admin settings and exchange data here.
      </Typography>
    </Box>
  );
};

export default Welcome;
