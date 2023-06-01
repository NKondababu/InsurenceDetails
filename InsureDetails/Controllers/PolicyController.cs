using InsureDetails.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsureDetails.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PolicyController : ControllerBase
    {
        Business_Logic.blInsureDetailscs blInsureDetailscs = new Business_Logic.blInsureDetailscs();
        [HttpGet]
        [Route("policy_Get")]
        public PolicyDetails[] Get()
        {
            return blInsureDetailscs.policyDetails_GET(); 
        }
        [HttpPost]
        [Route("policy_Update")]
        public IActionResult policy_Update(PolicyDetails policyDetails)
        {
            var message = blInsureDetailscs.policy_Update(policyDetails);

            return Ok(message);
        }
    }
}
