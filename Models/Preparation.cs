using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipesProject.Models
{
    public class Preparation
    {
        [Key]
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public string Status { get; set; }
    }
}
