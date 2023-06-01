using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsureDetails.Models
{
    public class PolicyDetails
    {
        public int policyid { get; set; }
        public string dateofpurchase { get; set; }
        public int customerid { get; set; }
        public string fuel { get; set; }
        public string vehiclesegment { get; set; }
        public int premium { get; set; }
        public bool bodyinjuryliablity { get; set; }
        public bool personalinjuryprotection { get; set; }
        public bool propertydamageliability { get; set; }
        public bool collision { get; set; }
        public bool comprehensive { get; set; }
        public string customerGender { get; set; }
        public string customerincomegroup { get; set; }
        public string customerregion { get; set; }
        public bool customermartialstatus { get; set; }
    }
}
