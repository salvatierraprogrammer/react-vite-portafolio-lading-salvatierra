import { Box, Container, Typography, Button, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { colors, fonts } from "../theme/styles";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const Hero = () => (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      background: `linear-gradient(135deg, ${colors.backgroundDark} 0%, ${colors.backgroundMedium} 100%)`,
      color: colors.textPrimary,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Grid overlay */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Radial glow */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
      }}
    />

    <Container sx={{ position: "relative", zIndex: 1, py: { xs: 14, md: 8 } }}>
      {/* Badge */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          background: "rgba(201,168,76,0.1)",
          border: "1px solid rgba(201,168,76,0.3)",
          color: colors.gold,
          fontSize: "0.72rem",
          fontWeight: 600,
          px: 2,
          py: 0.75,
          borderRadius: "50px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          mb: 3,
        }}
      >
        <FiberManualRecordIcon
          sx={{
            fontSize: 10,
            color: colors.whatsappGreen,
            animation: `${pulse} 2s infinite`,
          }}
        />
        Disponible en CABA y alrededores
      </Box>

      {/* Heading */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: fonts.display,
          fontSize: { xs: "2.6rem", md: "4.5rem", lg: "5rem" },
          fontWeight: 900,
          lineHeight: 1.05,
          maxWidth: 700,
          mb: 2,
        }}
      >
        Soluciones que{" "}
        <Box component="span" sx={{ color: colors.gold }}>
          resuelven
        </Box>{" "}
        tu problema, hoy.
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontFamily: fonts.body,
          fontSize: "1.05rem",
          fontWeight: 300,
          color: colors.textSecondary,
          maxWidth: 480,
          lineHeight: 1.7,
          mb: 5,
        }}
      >
        Reparación de celulares · Cámaras de seguridad · Webs y apps ·
        Acompañamiento terapéutico. Más de 5 años de experiencia con atención
        personalizada.
      </Typography>

      {/* CTAs */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          href="https://wa.me/5491162589112"
          target="_blank"
          sx={{
            background: colors.gold,
            color: colors.backgroundDark,
            fontFamily: fonts.body,
            fontWeight: 700,
            fontSize: "1rem",
            px: 4,
            py: 1.75,
            borderRadius: "50px",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              background: colors.goldLight,
              boxShadow: "none",
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Escribirme por WhatsApp
        </Button>

        <Button
          variant="outlined"
          href="#servicios"
          sx={{
            borderColor: "rgba(201,168,76,0.35)",
            color: colors.textPrimary,
            fontFamily: fonts.body,
            fontWeight: 400,
            fontSize: "0.95rem",
            px: 4,
            py: 1.75,
            borderRadius: "50px",
            textTransform: "none",
            "&:hover": {
              borderColor: colors.gold,
              color: colors.gold,
              background: "transparent",
            },
            transition: "all 0.3s ease",
          }}
        >
          Ver servicios
        </Button>
      </Stack>

      {/* Stats */}
      <Stack
        direction="row"
        spacing={{ xs: 4, md: 6 }}
        sx={{ mt: { xs: 6, md: 8 } }}
      >
        {[
          { num: "+5", label: "Años de experiencia" },
          { num: "100%", label: "Consulta sin cargo" },
          { num: "24hs", label: "Respuesta rápida" },
        ].map((s) => (
          <Box key={s.label}>
            <Typography
              sx={{
                fontFamily: fonts.display,
                fontSize: "2rem",
                fontWeight: 700,
                color: colors.gold,
                lineHeight: 1,
              }}
            >
              {s.num}
            </Typography>
            <Typography
              sx={{
                fontFamily: fonts.body,
                fontSize: "0.75rem",
                color: colors.textSecondary,
                mt: 0.5,
              }}
            >
              {s.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  </Box>
);

export default Hero;