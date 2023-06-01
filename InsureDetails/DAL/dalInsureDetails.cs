using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;

namespace InsureDetails.DAL
{
    //Code to handle DB operations
    public class dalInsureDetails
    {
        //Global variables that allow us to use them from the refence of dl operations from business logic
        public DataTable dataTable;
        public DataSet dataSet;
        public int NonQueryvalue; 
        
        //constructor for initialisation of global variables
        public dalInsureDetails()
        {
            dataTable = new DataTable();
            dataSet = new DataSet(); 
        }

        //To read the data from the DB using data adapter
        public void executeAdapter(string procedurename)
        {
            try
            {
                //making connection
                using (SqlConnection con = new SqlConnection(ConfigSettings.ConnectionStrings.AppDbConn))
                {
                    //providing command and connection to execute
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

        //Update the data in DB and get number of rows effected
        public void executeNonQuery(string procedurename, object obj)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConfigSettings.ConnectionStrings.AppDbConn))
                {
                    using (SqlCommand cmd = new SqlCommand(procedurename, con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        GenrateParameters(obj, cmd); //To generate paramter list for procedure
                        con.Open();
                        NonQueryvalue = cmd.ExecuteNonQuery();//returns number of rows effected
                        con.Close();
                    }
                }
            }
            catch
            {
                throw;
            }
        }

        //To generate parameter list dynamicaly from object using reflections
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
    }
}
