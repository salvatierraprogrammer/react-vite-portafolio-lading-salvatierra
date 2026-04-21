import { Container, Typography, Button, Box, Paper } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { colors, fonts } from "../theme/styles";

const Contact = () => (
  <Box
    id="contacto"
    sx={{
      background: `linear-gradient(135deg, ${colors.backgroundDark} 0%, ${colors.backgroundMedium} 100%)`,
      py: { xs: 10, md: 14 },
      px: 2,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Paper
      elevation={0}
      sx={{
        p: { xs: 5, md: 7 },
        maxWidth: 620,
        width: "100%",
        textAlign: "center",
        borderRadius: "20px",
        background: colors.backgroundCard,
        border: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {/* Tag */}
      <Typography
        sx={{
          fontFamily: fonts.body,
          fontSize: "0.72rem",
          fontWeight: 600,
          color: colors.gold,
          letterSpacing: "2px",
          textTransform: "uppercase",
          mb: 1.5,
        }}
      >
        Contacto
      </Typography>

      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: fonts.display,
          fontSize: { xs: "2rem", md: "2.6rem" },
          fontWeight: 700,
          color: colors.textPrimary,
          mb: 1,
        }}
      >
        ¿Empezamos?
      </Typography>

      {/* Divider */}
      <Box
        sx={{
          width: 48,
          height: 3,
          background: colors.gold,
          borderRadius: 2,
          mx: "auto",
          my: 3,
        }}
      />

      {/* Location */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <LocationOnIcon sx={{ color: colors.gold, mr: 0.75, fontSize: "1rem" }} />
        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: "0.88rem",
            color: colors.textSecondary,
            fontWeight: 500,
          }}
        >
          Atención en CABA y Alrededores
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: fonts.body,
          fontSize: "0.95rem",
          color: colors.textSecondary,
          lineHeight: 1.7,
          mb: 4,
          maxWidth: 420,
          mx: "auto",
        }}
      >
        Contame qué necesitás y te respondo rápido. La primera consulta no te
        cuesta nada.
      </Typography>

      {/* WhatsApp Button */}
      <Button
        variant="contained"
        size="large"
        startIcon={<WhatsAppIcon />}
        href="https://wa.me/5491132752125"
        target="_blank"
        sx={{
          background: colors.whatsappGreen,
          color: "#fff",
          fontFamily: fonts.body,
          px: 5,
          py: 1.75,
          fontSize: "1.05rem",
          fontWeight: 700,
          borderRadius: "50px",
          textTransform: "none",
          boxShadow: "0 4px 30px rgba(37,211,102,0.25)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "#1eb954",
            boxShadow: "0 8px 40px rgba(37,211,102,0.35)",
            transform: "translateY(-2px)",
          },
        }}
      >
        Escribirme por WhatsApp
      </Button>

      <Typography
        sx={{
          fontFamily: fonts.body,
          fontSize: "0.82rem",
          color: colors.textSecondary,
          mt: 2,
        }}
      >
        Respondo en el día · Consulta gratuita · Sin compromiso
      </Typography>

      <Typography
        sx={{
          fontFamily: fonts.body,
          fontSize: "0.82rem",
          color: colors.textSecondary,
          fontStyle: "italic",
          mt: 3,
          pt: 3,
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        Más de 5 años de experiencia brindando soluciones.
      </Typography>
    </Paper>
  </Box>
);

export default Contact;