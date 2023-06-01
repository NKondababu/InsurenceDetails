using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsureDetails.DAL
{
    //To make the connection object by taking the connection string from the app settings json
    //we need to register this in startup services to get access of configurations
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
