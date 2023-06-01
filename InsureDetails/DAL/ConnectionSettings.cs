using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsureDetails.DAL
{
    public static class ConfigSettings
    {
        public static ConnectionStrings ConnectionStrings { get; set; }

        public static void Init(IConfiguration _config)
        {
            ConnectionStrings = new ConnectionStrings();
            ConnectionStrings.AppDbConn = _config.GetValue<string>("ConnectionStrings:AppDbConn");
        }
    }

    public class ConnectionStrings
    {
        public string AppDbConn { get; set; }
    }
}
