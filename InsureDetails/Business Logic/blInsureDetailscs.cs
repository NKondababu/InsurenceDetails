using InsureDetails.DAL;
using InsureDetails.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace InsureDetails.Business_Logic
{
    public class blInsureDetailscs
    {
        public PolicyDetails[] policyDetails_GET()
        {
            PolicyDetails[] policyDetails = null;
            dalInsureDetails objdal = new dalInsureDetails();
            objdal.executeAdapter("SP_InsurenceDetails_GET");
            if (objdal.dataTable != null && objdal.dataTable.Rows.Count > 0)
            {
                policyDetails = new PolicyDetails[objdal.dataTable.Rows.Count];
                for (int i = 0; i < objdal.dataTable.Rows.Count; i++)
                {
                    policyDetails[i] = new PolicyDetails();
                    policyDetails[i].policyid = Convert.ToInt32(objdal.dataTable.Rows[i]["Policy_id"]);
                    policyDetails[i].dateofpurchase = objdal.dataTable.Rows[i]["DateofPurchase"].ToString();
                    policyDetails[i].customerid = Convert.ToInt32(objdal.dataTable.Rows[i]["Customer_id"]);
                    policyDetails[i].fuel = objdal.dataTable.Rows[i]["Fuel"].ToString();
                    policyDetails[i].vehiclesegment = objdal.dataTable.Rows[i]["VEHICLE_SEGMENT"].ToString();
                    policyDetails[i].premium = Convert.ToInt32(objdal.dataTable.Rows[i]["Premium"]);
                    policyDetails[i].bodyinjuryliablity = Convert.ToBoolean(objdal.dataTable.Rows[i]["bodilyinjuryliability"]);
                    policyDetails[i].personalinjuryprotection = Convert.ToBoolean(objdal.dataTable.Rows[i]["personalinjuryprotection"]);
                    policyDetails[i].propertydamageliability = Convert.ToBoolean(objdal.dataTable.Rows[i]["propertydamageliability"]);
                    policyDetails[i].collision = Convert.ToBoolean(objdal.dataTable.Rows[i]["collision"]);
                    policyDetails[i].comprehensive = Convert.ToBoolean(objdal.dataTable.Rows[i]["comprehensive"]);
                    policyDetails[i].customerGender = objdal.dataTable.Rows[i]["Customer_Gender"].ToString();
                    policyDetails[i].customerincomegroup = objdal.dataTable.Rows[i]["Customer_Incomegroup"].ToString();
                    policyDetails[i].customerregion = objdal.dataTable.Rows[i]["Customer_Region"].ToString();
                    policyDetails[i].customermartialstatus = Convert.ToBoolean(objdal.dataTable.Rows[i]["Customer_Marital_status"]);
                }
            }
            return policyDetails;
        }

        public bool policy_Update(PolicyDetails policyDetails)
        {
            dalInsureDetails objdal = new dalInsureDetails();
            objdal.executeNonQuery("SP_InsurenceDetails_UPDATE", policyDetails);
            return objdal.NonQueryvalue > 0 ? true : false;
        }
    }
}
