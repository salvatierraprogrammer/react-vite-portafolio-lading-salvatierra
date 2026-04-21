import { Box, Typography, Container, Stack } from "@mui/material";
import { colors, fonts } from "../theme/styles";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      background: "#070F1E",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      py: 4,
    }}
  >
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography
          sx={{
            fontFamily: fonts.display,
            fontSize: "1rem",
            color: colors.gold,
            fontWeight: 700,
          }}
        >
          Diego Salvatierra
        </Typography>

        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: "0.78rem",
            color: colors.textSecondary,
            textAlign: { xs: "center", sm: "right" },
          }}
        >
          © 2026 · Salud · Tecnología · Seguridad · CABA, Argentina
        </Typography>
      </Stack>
    </Container>
  </Box>
);

export default Footer;