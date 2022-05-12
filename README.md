# Project Delivery Index In Workfront
I built a custom project status report to link with our Workfront system using Javascript and APIs which helps keep our project managers stay productive and save them a collective of ~100+ hours per week per customer.
<br>

[Presentation](https://onedrive.live.com/?authkey=%21AGJROMqr50qXzlM&cid=91FFA6D0580F1EA9&id=91FFA6D0580F1EA9%21137719&parId=91FFA6D0580F1EA9%21137725&o=OneUp)    -     [Recording](https://onedrive.live.com/?authkey=%21AO%2DaRfhgqYc7Sbs&cid=91FFA6D0580F1EA9&id=91FFA6D0580F1EA9%21137718&parId=91FFA6D0580F1EA9%21137725&o=OneUp)
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
<img align="right" width="60%" src="https://github.com/bwalshin/Project-Delivery-Index/blob/main/images/DI%20Report.png?raw=true"> In Workfront, create a custom form with all of the questions separated by category/section. Each section will represent each major risk category.


<br clear="right"/>

## Building the calculations
Each section must add up to 100 points. Evenly spread points per question. and assign points for each possible response choice.

After many iterations, I found simplicity made building the Delivery Index easy for all users (myself and the users entering data). Create 5 to 7 sections to make calculations easy to manage and use Yes/No questions to make it easy for users. The Yes/No questions and the sections will be weighted with a numerical value. The Yes value will be evenly weighted based off a total of 100. The No values will be weighted with 0.

<br>

<img align="right" width="60%" src="https://github.com/bwalshin/Project-Delivery-Index/blob/main/images/Sections%20and%20Points.png?raw=true">

<aside>
- 5 questions in section 1 * 20 points per question = index score of 100 </br>
- 6 questions in section 2 * 16.667 points per question = index score of 100 </br>
- 7 questions in section 3 * 14.29 points per question = index score of 100 </br>
</aside>

<br clear="right"/>
</br>

Each section will average to a total with will represent the score for that section. The total of all the sections will average the to a total overall index score of the delivery process.

You will find this will create a score with a decimal. Keeping with the simplicity model, I rounded the overall score to the nearest 10 to produce a clean number.

<img align="right" width="60%" src="https://github.com/bwalshin/Project-Delivery-Index/blob/main/images/Average%20of%20each%20section.png?raw=true">



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

<img align="right" width="60%" src="https://github.com/bwalshin/Project-Delivery-Index/blob/main/images/conditional%20formatting.png?raw=true">

<aside>
My management team chose the ranges below: </br>
<b> Red </b> = < 35 </br>
<b> Amber </b> = 35 - 65 </br>
<b> Green </b> = > 65 </br>
</aside>

<br clear="right"/>
</br>

<img align="right" width="60%" src="https://github.com/bwalshin/Project-Delivery-Index/blob/main/images/DI%20Report.png?raw=true">

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

<img align="right" width="60%" src="https://github.com/bwalshin/Project-Delivery-Index/blob/main/images/input%20data.png?raw=true"> 

<aside>
The initial user input will take about 15 minutes. Future updates should take about 1 to 2 minutes.
</aside>

<br clear="right"/>
</br>

<img align="right" width="60%" src="https://github.com/bwalshin/Project-Delivery-Index/blob/main/images/DI%20Report.png?raw=true"> 

<aside>
Project Managers will use the Delivery Index report to see all related project data in one place.
</aside>

<br clear="right"/>
</br>

<img align="right" width="60%" src="https://github.com/bwalshin/Project-Delivery-Index/blob/main/images/DI%20code.png?raw=true"> 

<aside>
Project Managers and Users will use the project details to pinpoint data specifics.
</aside>

<br clear="right"/>
</br>
