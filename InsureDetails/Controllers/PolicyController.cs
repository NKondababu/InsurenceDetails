using InsureDetails.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsureDetails.Controllers
{
    //Controller to perform actions from the UI
    [ApiController]
    [Route("[controller]")]
    public class PolicyController : ControllerBase
    { 
        //To get policy details from db by calling business logic class
        [HttpGet]
        [Route("policy_Get")]
        public PolicyDetails[] Get()
        { 
            return new Business_Logic.blInsureDetailscs().policyDetails_GET(); 
        }

        //To update details to db
        [HttpPost]
        [Route("policy_Update")]
        public bool policy_Update(PolicyDetails policyDetails)
        {  
            return new Business_Logic.blInsureDetailscs().policy_Update(policyDetails);
        }
    }
}
