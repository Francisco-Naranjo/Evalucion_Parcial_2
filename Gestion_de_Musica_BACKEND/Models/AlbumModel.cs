using Gestion_de_Musica.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Gestion_de_Musica.Models
{
    public class Album
    {
        [Key]
        public int album_id { get; set; }

        [Required]
        [StringLength(200)]
        public string titulo { get; set; } = string.Empty;

        [StringLength(100)]
        public string? genero { get; set; }

        public int? año_lanzamiento { get; set; }

        [StringLength(200)]
        public string? discografica { get; set; }

        public int? artista_id { get; set; }

        public DateTime fecha_creacion { get; set; } = DateTime.Now;

        // Navegación
        public Artista? Artista { get; set; }
    }
}