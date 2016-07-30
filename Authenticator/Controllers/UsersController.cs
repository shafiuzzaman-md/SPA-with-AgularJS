using Authenticator.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace Authenticator.Controllers
{
    public class UsersController : ApiController
    {
        private readonly UserDataContext _db = new UserDataContext();

        // GET: api/Users
        public IQueryable<User> GetUsers()
        {
            return _db.Users;
        }


        //GET: api/Users/aaa
       [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(string id)
        {
            User user = _db.Users.FirstOrDefault(u => u.UserName == id);
            return Ok(user);
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            _db.Entry(user).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        public HttpResponseMessage PostUser(User user)
        {
            // For checking availavility of userId
            var isExistingUser = _db.Users.Any(u => u.UserName == user.UserName);

            if (!isExistingUser)
            {
                _db.Users.Add(user);
                _db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            return Request.CreateResponse(HttpStatusCode.Unauthorized);
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = _db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            _db.Users.Remove(user);
            _db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return _db.Users.Count(e => e.Id == id) > 0;
        }
    }
}