<style>
div{
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #008CBA;
  border: 1px solid #1a1f2d;
  color:#fff;
  width: auto;
  height: auto;
}
</style>


# Project Delivery Index In Workfront
I built a custom project status report to link with our Workfront system using Javascript and APIs which helps keep our project managers stay productive and save them a collective of ~100+ hours per week per customer.

<br>

<div>
    <button class="button grid-item" name="button" onclick="https://onedrive.live.com/?authkey=%21AGJROMqr50qXzlM&cid=91FFA6D0580F1EA9&id=91FFA6D0580F1EA9%21137719&parId=91FFA6D0580F1EA9%21137725&o=OneUp">Presentation</button>
    <button class="button grid-item" name="button" onclick="https://onedrive.live.com/?authkey=%21AO%2DaRfhgqYc7Sbs&cid=91FFA6D0580F1EA9&id=91FFA6D0580F1EA9%21137718&parId=91FFA6D0580F1EA9%21137725&o=OneUp">Recording</button>
</div>

</br>

## Why build a delivery index?
- Improve visibility into project risks that are leading indicators to adoption risk.
- Create more meaningful project review meetings with specific action items.
- Provide a standard "score" across projects.

<br>

## What is the delivery index?
| **7 Categories** | **Report Highlighting Risks** |
| ---------------- | ----------------------------- |
| Questions are broken into 7 categories that are deemed critical to project and long-term customer success. | Each score is highlighted as red, amber, or green based on the calculations and ranges determined by our management team. |

| **Series of Yes/No Questions**   | **Calculations**    |
| -------------------------------- | ------------------- |
| Questions are answered/updated by our project managers prior to project reviews. | Each category has a calculation behind it to generate a numerical score. |

<br>

## Building the delivery index
<img align="right" width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4b4eb626-460d-495b-b75a-01f532049136/CFCategoriesbysection.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211208T182949Z&X-Amz-Expires=86400&X-Amz-Signature=040bb0e58b7a1049d40fe2452ca7d34138e8097ba3d6bccc0905c8c4c58335c7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22CF%252BCategories%252Bby%252Bsection.png%22&x-id=GetObject"> In Workfront, create a custom form with all of the questions separated by category/section. Each section will represent each major risk category.


<br clear="right"/>

## Building the calculations
Each section must add up to 100 points. Evenly spread points per question. and assign points for each possible response choice.

After many iterations, I found simplicity made building the Delivery Index easy for all users (myself and the users entering data). Create 5 to 7 sections to make calculations easy to manage and use Yes/No questions to make it easy for users. The Yes/No questions and the sections will be weighted with a numerical value. The Yes value will be evenly weighted based off a total of 100. The No values will be weighted with 0.

<br>

<img align="right" width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee949620-43e9-44fc-bbb2-51f22351b786/SectionsandPoints.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211208T191408Z&X-Amz-Expires=86400&X-Amz-Signature=b6b64e88260a7cb24411493abe676282d6fd75c3d978b70ba58e5f1a8757da9f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Sections%252Band%252BPoints.png%22&x-id=GetObject">

<aside>
- 5 questions in section 1 * 20 points per question = index score of 100 </br>
- 6 questions in section 2 * 16.667 points per question = index score of 100 </br>
- 7 questions in section 3 * 14.29 points per question = index score of 100 </br>
</aside>

<br clear="right"/>
</br>

Each section will average to a total with will represent the score for that section. The total of all the sections will average the to a total overall index score of the delivery process.

You will find this will create a score with a decimal. Keeping with the simplicity model, I rounded the overall score to the nearest 10 to produce a clean number.

<img align="right" width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8586f592-835e-4f02-b7cd-9b990f653554/Averageofeachsection.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211208T192248Z&X-Amz-Expires=86400&X-Amz-Signature=cf777f5b5f21271ff9c094ea87355cc975fe7b0db4029937945e7e6a97f92131&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Average%252Bof%252Beach%252Bsection.png%22&x-id=GetObject">



<aside>
<b> Example: </b> </br>
Section 1 index: 60.00 </br>
Section 2 index: 66.67 </br>
Section 3 index: 71.45 </br>
Section 4 index: 40.00 </br>
Section 5 index: 83.34 </br>
Section 6 index: 20.00 </br>
Section 7 index: 75.00 </br>
</br>
<b> Overall index score </b> = 59.49% or 60%
</br>
</aside>

<br clear="right"/>
</br>

## Creating the reporting front end

I asked my management team to decide what scoring values should represent Red, Amber, and Green. With that information, create a report and add each section from the custom form. In the Advanced Options tab for each section, add conditional formatting to highlight each category/section as red, amber, or green and input the values decided from the management team.

<img align="right" width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a93b4127-93ba-416c-ba7a-8cc425b6ac9d/conditionalformatting.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211208T192501Z&X-Amz-Expires=86400&X-Amz-Signature=7f5b9e7698ca825071d5f35e8154a06336921ef52cf2e8c4fd78beb8dcc70eb3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22conditional%252Bformatting.png%22&x-id=GetObject">

<aside>
My management team chose the ranges below: </br>
<b> Red </b> = < 35 </br>
<b> Amber </b> = 35 - 65 </br>
<b> Green </b> = > 65 </br>
</aside>

<br clear="right"/>
</br>

<img align="right" width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/20cfd196-2b68-4f3e-a125-804bf4d24bdb/DIcode.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211208T192758Z&X-Amz-Expires=86400&X-Amz-Signature=6c4735998fffdf98184106006e56b95ee61250fa23617476537afe2d8eab8cb3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22DI%252Bcode.png%22&x-id=GetObject">

<aside>
The last field on the report is named “URL to Project Details”. This will jump users directly to the information related to the Delivery Index for them to review why a section is red, amber, or green.

</br>

To do this, I created another report of roughly 300+ lines of code.
</aside>

<br clear="right"/>
</br>


Once this is created, I then created and applied a dashboard to layout templates to paper on all project

</br>

## Using the delivery index

<img align="right" width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/53cad81b-5311-47ea-891a-380982287dc3/image-asset.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211208T193036Z&X-Amz-Expires=86400&X-Amz-Signature=4dc6d6b49bcdbc7b3b4e9f2aba7951c3caff1bf8ca79818d4c987adb84c75f7e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22image-asset.png%22&x-id=GetObject"> 

<aside>
The initial user input will take about 15 minutes. Future updates should take about 1 to 2 minutes.
</aside>

<br clear="right"/>
</br>

<img align="right" width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11649fd7-a51d-4e17-8670-2f354787d3d2/image-asset-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211208T193305Z&X-Amz-Expires=86400&X-Amz-Signature=20feb10e8bf771804fca19ec299dfe56bb8226d1ecd86cffd41210daf768b39b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22image-asset-1.png%22&x-id=GetObject"> 

<aside>
Project Managers will use the Delivery Index report to see all related project data in one place.
</aside>

<br clear="right"/>
</br>

<img align="right" width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b1dd11d1-03af-40c6-bb04-5787058fadc8/image-asset-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211208T193333Z&X-Amz-Expires=86400&X-Amz-Signature=65d5624b88c309f77a6bf4985c5dae6e3396e441ddd9810ca4c6b39c1ea63c17&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22image-asset-2.png%22&x-id=GetObject"> 

<aside>
Project Managers and Users will use the project details to pinpoint data specifics.
</aside>

<br clear="right"/>
</br>
