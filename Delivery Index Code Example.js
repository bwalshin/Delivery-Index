//Section per question socring//

IF({Executive Sponsor does not support the decision to roll out Use Cases}="Yes" && Project Current Phase="Discover and Plan","AMBER",
		IF({Executive Sponsor does not support the decision to roll out Use Cases}="Yes" && Project Current Phase="Configure","RED",
			IF({Executive Sponsor does not support the decision to roll out Use Cases}="Yes" && Project Current Phase="Rollout","RED",
"GREEN")))

//Section Overall Status Code//

IF({RAG - Does Not Champion or Communicate}="RED" && Project Current Phase="Discover and Plan" || {RAG - Exec Sponsor Not Aligned With Products or Services} && Project Current Phase="Discover and Plan","RED",
	IF({RAG - No Control or Impact to Target Personas}="AMBER" && Project Current Phase="Discover and Plan" || {RAG - No Control or Influence to Data or System Owners}="AMBER" && Project Current Phase="Discover and Plan" || {RAG - No Committed Resource Support}="AMBER" && Project Current Phase="Discover and Plan" || {RAG - Not Engaged in Exec Reviews}="AMBER" && Project Current Phase="Discover and Plan" || {RAG - No Commitment To Improve Organization}="AMBER" && Project Current Phase="Discover and Plan","AMBER",
		
		IF({RAG - Does Not Champion or Communicate}="RED" && Project Current Phase="Configure" || {RAG - No Control or Impact to Target Personas}="RED" && Project Current Phase="Configure" || {RAG - No Control or Influence to Data or System Owners}="RED" && Project Current Phase="Configure" || {RAG - No Committed Resource Support}="RED" && Project Current Phase="Configure" || {RAG - Not Engaged in Exec Reviews}="RED" && Project Current Phase="Configure" || {RAG - Exec Sponsor Not Aligned With Products or Services}="RED" && Project Current Phase="Configure","RED",
			IF({RAG - No Commitment To Improve Organization}="AMBER" && Project Current Phase="Configure","AMBER",

				IF({RAG - Does Not Champion or Communicate}="RED" && Project Current Phase="Rollout" || {RAG - No Control or Impact to Target Personas}="RED" && Project Current Phase="Rollout" || {RAG - No Control or Influence to Data or System Owners}="RED" && Project Current Phase="Rollout" || {RAG - No Committed Resource Support}="RED" && Project Current Phase="Rollout" || {RAG - Not Engaged in Exec Reviews}="RED" && Project Current Phase="Rollout" || {RAG - No Commitment To Improve Organization}="RED" && Project Current Phase="Rollout" || {RAG - Exec Sponsor Not Aligned With Products or Services}="RED" && Project Current Phase="Rollout","RED",
"GREEN")))))

//Delivery Health Condition Code//

IF({TBMO Resources Condition}="RED" || {Data Condition}="RED" || {Value Alignment Condition}="RED" || {Executive Sponsor Condition}="RED" || {Adoption and Organization Readiness Condition}="RED" || {Product Configuration Condition}="RED" || {Extended Project Team Condition}="RED","RED",
	IF({TBMO Resources Condition}="AMBER" || {Data Condition}="AMBER" || {Value Alignment Condition}="AMBER" || {Executive Sponsor Condition}="AMBER" || {Adoption and Organization Readiness Condition}="AMBER" || {Product Configuration Condition}="AMBER" || {Extended Project Team Condition}="AMBER","AMBER",
		IF({TBMO Resources Condition}="GREEN" || {Data Condition}="GREEN" || {Value Alignment Condition}="GREEN" || {Executive Sponsor Condition}="GREEN" || {Adoption and Organization Readiness Condition}="GREEN" || {Product Configuration Condition}="GREEN" || {Extended Project Team Condition}="GREEN","GREEN",

"##")))

//
//
//
//
//
//

//Status - Use Case Data Is Not Defensible//
IF({Target Use Case data is not defensible or sponsor has no confidence in managing data or allocation objections}="Yes" && Project Current Phase="Discover and Plan","GREEN",
IF({Target Use Case data is not defensible or sponsor has no confidence in managing data or allocation objections}="Yes" && Project Current Phase="Configure","AMBER",
IF({Target Use Case data is not defensible or sponsor has no confidence in managing data or allocation objections}="Yes" && Project Current Phase="Rollout","RED",
"GREEN")))

//Status - Personas Not Trained//
IF({Targeted end user personas have not been trained on recurring usage of Apptio capabilities}="Yes" && Project Current Phase="Discover and Plan","GREEN",
		IF({Targeted end user personas have not been trained on recurring usage of Apptio capabilities}="Yes" && Project Current Phase="Configure","AMBER",
			IF({Targeted end user personas have not been trained on recurring usage of Apptio capabilities}="Yes" && Project Current Phase="Rollout","RED",
"GREEN")))

//Status - TBM Practice Not Defined///
IF({TBM Practice has not been defined and established to drive the necessary change management and communication through out the organization}="Yes" && Project Current Phase="Discover and Plan","GREEN",
		IF({TBM Practice has not been defined and established to drive the necessary change management and communication through out the organization}="Yes" && Project Current Phase="Configure","AMBER",
			IF({TBM Practice has not been defined and established to drive the necessary change management and communication through out the organization}="Yes" && Project Current Phase="Rollout","RED",
"GREEN")))

//Status - TBMA Not Able To Carry Apptios Value//
IF({TBMA has not demonstrated proficiency in business administration tasks and configuration maintenance to carry Apptios value forward}="Yes" && Project Current Phase="Discover and Plan","GREEN",
		IF({TBMA has not demonstrated proficiency in business administration tasks and configuration maintenance to carry Apptios value forward}="Yes" && Project Current Phase="Configure","AMBER",
			IF({TBMA has not demonstrated proficiency in business administration tasks and configuration maintenance to carry Apptios value forward}="Yes" && Project Current Phase="Rollout","RED",
"GREEN")))

//Status - Solution or Sponsor Has No Confidence//
IF({Solution is not defensible or sponsor has no confidence in managing data or allocation objections}="Yes" && Project Current Phase="Discover and Plan","GREEN",
IF({Solution is not defensible or sponsor has no confidence in managing data or allocation objections}="Yes" && Project Current Phase="Configure","AMBER",
IF({Solution is not defensible or sponsor has no confidence in managing data or allocation objections}="Yes" && Project Current Phase="Rollout","RED",
"GREEN"))) 

//RAG - Data Quality or Effort Is Too High And Not Achievable//
IF(There is no clear data quality improvement plan and ownership or the effort to improve is too high and will not be achieved soon="Yes" && {Project Current Phase}="Discover and Plan","GREEN",
		IF(There is no clear data quality improvement plan and ownership or the effort to improve is too high and will not be achieved soon="Yes" && {Project Current Phase}="Configure","GREEN",
			IF(There is no clear data quality improvement plan and ownership or the effort to improve is too high and will not be achieved soon="Yes" && {Project Current Phase}="Rollout","AMBER",
"GREEN")))