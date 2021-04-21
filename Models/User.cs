using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipesProject.Models
{
    public class User : IdentityUser
    {
        public virtual ICollection<Recipe> Recipes { get; set; }
    }
}
