import { Box, Container, Stack, Typography } from "@mui/material";
import { colors, fonts } from "../theme/styles";

const items = [
  { icon: "✓", label: "Diagnóstico gratuito", sub: "sin compromiso" },
  { icon: "📍", label: "A domicilio", sub: "en CABA y GBA" },
  { icon: "🔒", label: "Garantía", sub: "en cada servicio" },
  { icon: "⚡", label: "Respuesta", sub: "el mismo día" },
];

const TrustBar = () => (
  <Box
    sx={{
      background: colors.backgroundCard,
      borderTop: "1px solid rgba(201,168,76,0.12)",
      borderBottom: "1px solid rgba(201,168,76,0.12)",
      py: 3.5,
    }}
  >
    <Container>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        gap={{ xs: 3, md: 6 }}
        alignItems="center"
      >
        {items.map((item) => (
          <Box
            key={item.label}
            sx={{ display: "flex", alignItems: "center", gap: 1.25 }}
          >
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1 }}>
              {item.icon}
            </Typography>
            <Typography
              sx={{
                fontFamily: fonts.body,
                fontSize: "0.88rem",
                color: colors.textSecondary,
              }}
            >
              <Box component="strong" sx={{ color: colors.textPrimary }}>
                {item.label}
              </Box>{" "}
              {item.sub}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  </Box>
);

export default TrustBar;