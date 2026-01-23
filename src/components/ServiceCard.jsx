import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LaunchIcon from "@mui/icons-material/Launch";

const ServiceCard = ({ title, description, image, link, whatsapp }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        borderRadius: 4,
        boxShadow: 6,
        transition: "0.3s",
        "&:hover": {
          transform: "  translateY(-6px)",
          boxShadow: 10,
        },
      }}
    >
      <CardMedia
        component="img"
        height="500"
        image={image}
        alt={title}
      />

      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {description}
        </Typography>

        <Stack direction="row" spacing={1}>
          {link && (
            <Button
              fullWidth
              variant="contained"
              endIcon={<LaunchIcon />}
              href={link}
              target="_blank"
            >
              Ver más
            </Button>
          )}

          {whatsapp && (
            <Button
              fullWidth
              variant="outlined"
              color="success"
              startIcon={<WhatsAppIcon />}
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
            >
              WhatsApp
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
