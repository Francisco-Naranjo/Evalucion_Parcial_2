using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gestion_de_Musica.Migrations
{
    /// <inheritdoc />
    public partial class inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Artistas",
                columns: table => new
                {
                    artista_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellido = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    fecha_nacimiento = table.Column<DateTime>(type: "datetime2", nullable: true),
                    nacionalidad = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    fecha_creacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Artistas", x => x.artista_id);
                });

            migrationBuilder.CreateTable(
                name: "Albumes",
                columns: table => new
                {
                    album_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    titulo = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    genero = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    año_lanzamiento = table.Column<int>(type: "int", nullable: true),
                    discografica = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    artista_id = table.Column<int>(type: "int", nullable: true),
                    fecha_creacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Albumes", x => x.album_id);
                    table.ForeignKey(
                        name: "FK_Albumes_Artistas_artista_id",
                        column: x => x.artista_id,
                        principalTable: "Artistas",
                        principalColumn: "artista_id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Albumes_artista_id",
                table: "Albumes",
                column: "artista_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Albumes");

            migrationBuilder.DropTable(
                name: "Artistas");
        }
    }
}
