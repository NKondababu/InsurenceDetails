using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;

namespace InsureDetails.DAL
{
    public class dalInsureDetails
    {
        public DataTable dataTable;
        public DataSet dataSet;
        public int NonQueryvalue; 
        
        public dalInsureDetails()
        {
            dataTable = new DataTable();
            dataSet = new DataSet(); 
        }
        public void executeAdapter(string procedurename)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConfigSettings.ConnectionStrings.AppDbConn))
                {
                    using (SqlDataAdapter da = new SqlDataAdapter(procedurename, con))
                    {
                        da.SelectCommand.CommandType = CommandType.StoredProcedure;
                        da.Fill(dataTable);
                    }
                }
            }
            catch
            {
                throw;
            }
        }

        public void executeNonQuery(string procedurename, object obj)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConfigSettings.ConnectionStrings.AppDbConn))
                {
                    using (SqlCommand cmd = new SqlCommand(procedurename, con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        GenrateParameters(obj, cmd);
                        con.Open();
                        NonQueryvalue = cmd.ExecuteNonQuery();
                        con.Close();
                    }
                }
            }
            catch
            {
                throw;
            }
        }

        private void GenrateParameters(object obj, SqlCommand cmd)
        {
            try
            {
                if (obj != null)
                {
                    foreach (PropertyInfo p in obj.GetType().GetProperties())
                    {

                        cmd.Parameters.AddWithValue("@" + p.Name, p.GetValue(obj));
                    }
                }
            }
            catch
            {
                throw;
            }

        }

        private void GenrateParametersWithAdapter(object obj, SqlDataAdapter da)
        {
            try
            {
                if (obj != null)
                {
                    foreach (PropertyInfo p in obj.GetType().GetProperties())
                    {
                        da.SelectCommand.Parameters.AddWithValue("@" + p.Name, p.GetValue(obj));
                    }
                }
            }
            catch
            {
                throw;
            }

        }
    }
}
