namespace Gestion_de_Musica.DTOs
{
    public class AlbumDto
    {
        public int album_id { get; set; }
        public string titulo { get; set; } = string.Empty;
        public string? genero { get; set; }
        public int? año_lanzamiento { get; set; }
        public string? discografica { get; set; }
        public int? artista_id { get; set; }
        public string? nombre_artista { get; set; }
    }

    public class CreateAlbumDto
    {
        public string titulo { get; set; } = string.Empty;
        public string? genero { get; set; }
        public int? año_lanzamiento { get; set; }
        public string? discografica { get; set; }
        public int? artista_id { get; set; }
    }
}