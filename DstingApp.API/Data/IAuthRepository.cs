using System.Threading.Tasks;
using DstingApp.API.Models;

namespace DstingApp.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register (User user,string password);
        Task<User> Login (string Username,string Password);
        Task<bool> UserExists (string Username);
    }
}