  import { Container, Grid, Typography } from "@mui/material";
  import ServiceCard from "./ServiceCard";

  // 👉 Importar imágenes
  import reparacionImg from "../assets/reparacion_celulares.png";
  import camarasImg from "../assets/instalacion_camara.png";
  import webImg from "../assets/desarrollo_web.png";
  import mobileImg from "../assets/desarrollo_mobile.png";
  import atImg from "../assets/at.png";

  const Services = () => {
    return (
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Servicios Profesionales
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={5}>
          Soluciones rápidas, profesionales y a tu medida
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Reparación de celulares y tablets"
              description="Diagnóstico, reparación y mantenimiento de equipos móviles."
              image={reparacionImg}
              link="https://reparacionesfoucault.netlify.app/"
              whatsapp="5491162589112"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Cámaras de seguridad (CCTV)"
              description="Instalación y mantenimiento de sistemas de videovigilancia."
              image={camarasImg}
              link="https://trancacam.netlify.app/"
              whatsapp="5491162589112"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Desarrollo de páginas web"
              description="Webs modernas, rápidas y optimizadas para negocios."
              image={webImg}
              link="https://formulario-tu-pagina-web.netlify.app/ "
              whatsapp="5491162589112"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Desarrollo de apps móviles"
              description="Apps Android con React Native y Expo."
              image={mobileImg}
              link='https://salvatierra-diego-portafolio.netlify.app/'
              whatsapp="5491162589112"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Acompañante Terapéutico"
              description="Acompañamiento profesional a niños, adultos y adultos mayores."
              image={atImg}
              link="https://diego-salvatierra-acompaniante-terape.netlify.app/"
              whatsapp="5491162589112"
            />
          </Grid>
        </Grid>
      </Container>
    );
  };

  export default Services;
