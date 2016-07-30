using System;
using System.ComponentModel.DataAnnotations;

namespace Authenticator.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Sex { get; set; }
        public DateTime? DOB { get; set; }
        public string About { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}