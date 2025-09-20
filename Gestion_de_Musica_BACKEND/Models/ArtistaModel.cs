using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gestion_de_Musica.Models
{
    public class Artista
    {
        [Key]
        public int artista_id { get; set; }

        [Required]
        [StringLength(100)]
        public string nombre { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string apellido { get; set; } = string.Empty;

        public DateTime? fecha_nacimiento { get; set; }

        [StringLength(100)]
        public string? nacionalidad { get; set; }

        public DateTime fecha_creacion { get; set; } = DateTime.Now;

        // Navegación
        public ICollection<Album> Albumes { get; set; } = new List<Album>();
    }
}
