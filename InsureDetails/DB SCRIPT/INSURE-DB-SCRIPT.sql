USE [DIT-Training]
GO

/****** Object:  Table [dbo].[tblCaseStudy]    Script Date: 6/2/2023 10:40:17 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tblCaseStudy](
	[Policy_id] [numeric](18, 0) NULL,
	[DateofPurchase] [datetime] NULL,
	[Customer_id] [numeric](18, 0) NULL,
	[Fuel] [varchar](50) NULL,
	[VEHICLE_SEGMENT] [varchar](50) NULL,
	[Premium] [numeric](18, 0) NULL,
	[bodilyinjuryliability] [bit] NULL,
	[personalinjuryprotection] [bit] NULL,
	[propertydamageliability] [bit] NULL,
	[collision] [bit] NULL,
	[comprehensive] [bit] NULL,
	[Customer_Gender] [varchar](50) NULL,
	[Customer_Incomegroup] [varchar](50) NULL,
	[Customer_Region] [varchar](50) NULL,
	[Customer_Marital_status] [bit] NULL
) ON [PRIMARY]
GO


USE [DIT-Training]
GO

/****** Object:  StoredProcedure [dbo].[SP_InsurenceDetails_UPDATE]    Script Date: 6/2/2023 10:40:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-- =============================================
-- Author:		<Author,,NK>
-- Create date: <Create Date,May 31, 2023,>
-- Description:	<Description,To update Insurence details>
-- =============================================
CREATE PROCEDURE [dbo].[SP_InsurenceDetails_UPDATE] 
	@policyid numeric(18,0),
	@dateofpurchase varchar(50)='',
	@customerid numeric(18,0),
	@fuel varchar(50),
	@vehiclesegment varchar(50),
	@premium numeric(18,0),
	@bodyinjuryliablity bit,
	@personalinjuryprotection bit,
	@propertydamageliability bit,
	@collision bit,
	@comprehensive bit,
	@customerGender varchar(50)='',
	@customerincomegroup varchar(50),
	@customerregion varchar(50),
	@customermartialstatus bit
AS
BEGIN
	 UPDATE [dbo].[tblCaseStudy]
   SET  
      [Fuel] = @fuel,
      [VEHICLE_SEGMENT] = @vehiclesegment,
      [Premium] = @premium,
      [bodilyinjuryliability] = @bodyinjuryliablity,
      [personalinjuryprotection] = @personalinjuryprotection,
      [propertydamageliability] = @propertydamageliability,
      [collision] = @collision,
      [comprehensive] = @comprehensive,
      [Customer_Gender] = @customerGender,
      [Customer_Incomegroup] = @customerincomegroup,
      [Customer_Region] = @customerregion,
      [Customer_Marital_status] = @customermartialstatus
		WHERE [Policy_id] = @policyid
END
GO

/****** Object:  StoredProcedure [dbo].[SP_InsurenceDetails_GET]    Script Date: 6/2/2023 10:40:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-- =============================================
-- Author:		<Author,,NK>
-- Create date: <Create Date,May 31, 2023,>
-- Description:	<Description,To get Insurence details>
-- =============================================
CREATE PROCEDURE [dbo].[SP_InsurenceDetails_GET] 
	
AS
BEGIN
	 SELECT * FROM tblCaseStudy
END
GO

