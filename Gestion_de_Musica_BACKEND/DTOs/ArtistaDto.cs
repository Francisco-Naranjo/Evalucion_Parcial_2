namespace Gestion_de_Musica.DTOs
{
    public class ArtistaDto
    {
        public int artista_id { get; set; }
        public string nombre { get; set; } = string.Empty;
        public string apellido { get; set; } = string.Empty;
        public DateTime? fecha_nacimiento { get; set; }
        public string? nacionalidad { get; set; }
        public string nombre_completo => $"{nombre} {apellido}";
    }

    public class CreateArtistaDto
    {
        public string nombre { get; set; } = string.Empty;
        public string apellido { get; set; } = string.Empty;
        public DateTime? fecha_nacimiento { get; set; }
        public string? nacionalidad { get; set; }
    }
}
