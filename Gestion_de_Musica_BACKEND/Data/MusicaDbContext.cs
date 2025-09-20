using Microsoft.EntityFrameworkCore;
using Gestion_de_Musica.Models;

namespace Gestion_de_Musica.Data
{
    public class MusicaDbContext : DbContext
    {
        public MusicaDbContext(DbContextOptions<MusicaDbContext> options) : base(options)
        {
        }

        public DbSet<Artista> Artistas { get; set; }
        public DbSet<Album> Albumes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Album>()
                .HasOne(a => a.Artista)
                .WithMany(ar => ar.Albumes)
                .HasForeignKey(a => a.artista_id);

            base.OnModelCreating(modelBuilder);
        }
    }
}
