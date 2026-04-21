import { Container, Grid, Typography, Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { colors, fonts } from "../theme/styles";

// 👉 Importar imágenes
import reparacionImg from "../assets/reparacion_celulares.png";
import camarasImg from "../assets/instalacion_camara.png";
import webImg from "../assets/desarrollo_web.png";
import mobileImg from "../assets/desarrollo_mobile.png";
import atImg from "../assets/at.png";

const services = [
  {
    title: "Reparación de celulares y tablets",
    description:
      "Diagnóstico rápido, repuestos de calidad y reparación garantizada de tus dispositivos móviles.",
    image: reparacionImg,
    icon: "📱",
    link: "https://reparacionesfoucault.netlify.app/",
    whatsapp: "5491162589112",
  },
  {
    title: "Cámaras de seguridad (CCTV)",
    description:
      "Instalación y configuración profesional de sistemas de videovigilancia para hogares y comercios.",
    image: camarasImg,
    icon: "📷",
    link: "https://trancacam.netlify.app/",
    whatsapp: "5491162589112",
  },
  {
    title: "Desarrollo de páginas web",
    description:
      "Sitios modernos, rápidos y optimizados para que tu negocio tenga presencia digital real.",
    image: webImg,
    icon: "💻",
    link: "https://formulario-tu-pagina-web.netlify.app/",
    whatsapp: "5491162589112",
  },
  {
    title: "Apps móviles Android",
    description:
      "Desarrollo de aplicaciones con React Native y Expo. Tu idea, convertida en app funcional.",
    image: mobileImg,
    icon: "📲",
    link: "https://salvatierra-diego-portafolio.netlify.app/",
    whatsapp: "5491162589112",
  },
  {
    title: "Acompañante Terapéutico",
    description:
      "Acompañamiento profesional y humano para niños, adultos y adultos mayores. Con formación y vocación.",
    image: atImg,
    icon: "🤝",
    link: "https://diego-salvatierra-acompaniante-terape.netlify.app/",
    whatsapp: "5491162589112",
  },
];

const Services = () => (
  <Box
    id="servicios"
    sx={{
      background: colors.backgroundDark,
      py: { xs: 10, md: 14 },
    }}
  >
    <Container>
      {/* Header */}
      <Box sx={{ mb: 7 }}>
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
          Lo que hago
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: fonts.display,
            fontSize: { xs: "2rem", md: "2.8rem" },
            fontWeight: 700,
            color: colors.textPrimary,
            mb: 1.5,
          }}
        >
          Servicios profesionales
        </Typography>

        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: colors.textSecondary,
            maxWidth: 520,
            lineHeight: 1.65,
            mb: 3,
          }}
        >
          Cada servicio es atendido de forma directa, sin intermediarios. Sabés
          con quién trabajás.
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            width: 48,
            height: 3,
            background: colors.gold,
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Grid */}
      <Grid container spacing={3} justifyContent="center">
        {services.map((svc) => (
          <Grid item xs={12} sm={6} md={4} key={svc.title}>
            <ServiceCard {...svc} />
          </Grid>
        ))}

        {/* Extra CTA card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "16px",
              height: "100%",
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              p: 4,
            }}
          >
            <Typography sx={{ fontSize: "1.6rem", mb: 1.5 }}>💬</Typography>
            <Typography
              sx={{
                fontFamily: fonts.body,
                fontSize: "0.9rem",
                color: colors.textSecondary,
                mb: 2,
              }}
            >
              ¿Necesitás algo que no está acá?
            </Typography>
            <Box
              component="a"
              href="https://wa.me/5491162589112"
              target="_blank"
              sx={{
                fontFamily: fonts.body,
                fontSize: "0.82rem",
                fontWeight: 600,
                color: colors.gold,
                textDecoration: "none",
                "&:hover": { color: colors.goldLight },
                transition: "color 0.3s",
              }}
            >
              Consultame sin cargo →
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Services;