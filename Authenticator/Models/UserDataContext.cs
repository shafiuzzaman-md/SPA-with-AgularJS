using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Authenticator.Models
{
    public class UserDataContext : DbContext
    {
        public UserDataContext() : base("name=userDB")
        {
        }

        public DbSet<User> Users { get; set; }
    }
}