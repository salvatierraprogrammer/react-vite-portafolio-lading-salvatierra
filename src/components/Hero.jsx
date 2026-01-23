import { Box, Container, Typography } from "@mui/material";

const Hero = () => (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      background: "linear-gradient(135deg, #020617, #0f172a)",
      color: "white",
    }}
  >
    <Container>
      <Typography variant="h3" fontWeight="bold">
        Diego Oscar Salvatierra
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, opacity: 0.85 }}>
        Salud · Tecnología · Seguridad
      </Typography>
    </Container>
  </Box>
);

export default Hero;
