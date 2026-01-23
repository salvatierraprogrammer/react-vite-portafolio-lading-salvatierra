import { Container, Typography, Button, Box, Paper } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {colors} from '../theme/styles.jsx';

const Contact = () => (
  <Box 
    sx={{ 
      background: `linear-gradient(135deg, ${colors.backgroundDark} 0%, ${colors.backgroundMedium} 100%)`,
      py: 10,
      px: 2,
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Paper
      elevation={0}
      sx={{
        p: { xs: 4, md: 6 },
        maxWidth: 600,
        textAlign: "center",
        borderRadius: 4,
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${colors.electricBlue}40`, // Borde sutil con transparencia
        boxShadow: `0 0 20px ${colors.cyanGlow}`, // Efecto de brillo de los flyers
      }}
    >
      <Typography 
        variant="h3" 
        fontWeight="800" 
        sx={{ 
          color: colors.highlightYellow, // Color de "CONSULTA SIN CARGO"
          mb: 1,
          textTransform: 'uppercase',
          letterSpacing: 1
        }}
      >
        Contacto Directo
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
        <LocationOnIcon sx={{ color: colors.electricBlue, mr: 1 }} />
        <Typography sx={{ color: colors.textSecondary, fontWeight: 500 }}>
          Atención en CABA y Alrededores
        </Typography>
      </Box>

      <Typography 
        variant="body1" 
        sx={{ 
          color: colors.textPrimary, 
          mb: 4, 
          opacity: 0.9,
          lineHeight: 1.6
        }}
      >
        ¿Tenés alguna duda? Realizá tu consulta sin cargo. 
        Obtené un diagnóstico profesional de forma inmediata.
      </Typography>

      <Button
        variant="contained"
        size="large"
        startIcon={<WhatsAppIcon />}
        href="https://wa.me/5491132752125"
        target="_blank"
        sx={{
          backgroundColor: colors.whatsappGreen,
          color: "#fff",
          px: 5,
          py: 1.5,
          fontSize: "1.1rem",
          fontWeight: "bold",
          borderRadius: "50px",
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#1eb954",
            transform: "scale(1.05)",
            boxShadow: `0 0 15px ${colors.whatsappGreen}80`,
          },
        }}
      >
        Escribirme por WhatsApp
      </Button>

      <Typography 
        variant="caption" 
        display="block" 
        sx={{ mt: 3, color: colors.textSecondary, fontStyle: 'italic' }}
      >
        Más de 5 años de experiencia brindando soluciones.
      </Typography>
    </Paper>
  </Box>
);

export default Contact;