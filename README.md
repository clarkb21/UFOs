# UFO JavaScript Table Filters


## Purpose
- The purpose of this project was to build a table using data stored in a JavaScript array and creating filters to users to access the data in a more readable way. 
- The table was created using HTML, JavaScript, and Bootstrap customizations. 

## Project Overview
- Using JavaScript, I created a table that would be input into a webpage. 
- Using JavaScript for loops, functions, and variables, I automated the data entry process.
- A filter button was created to allow users to filter the data table by date. 

### Challenge Overview
- For the challenge part of this project, I removed the filter button and added four new filters, which would update by changing the value in the input box. 
- The table would now have filters for city, state, country, and shape of UFO sighting. The filters were created using multiple JavaScript functions. 

## Resources
- Data Source: data.js UFO sightings file
- Software:  JavaScript 
- MSU Bootcamp Spot Module 11: https://courses.bootcampspot.com/courses/2508/pages/11-dot-0-4-javascript-bootstrap-and-ufos?module_item_id=636366

## Results
- By removing the filter button and adding additional filters to the HTML file, there are now more options for filtering the UFO data. 
- I used placeholders for users to know what style of input each box could accept. 
- Filtered searches can be executed by typing in the date, city, state, country, or shape that you want, and then hitting "Enter" or clicking anywhere else on the page. The d3 event is listening for any change in those boxes. 

![image](https://user-images.githubusercontent.com/104038813/185809236-8864b3bc-9d86-4afc-ab81-c2ccff697f78.png)

- I also refactored the code so that the filters were not case sensitive. From the original data, all cities, states, and countries are lowercase. Updating this allowed for the filters to still catch the relevant data even if the case was different in the filter box. 

![image](https://user-images.githubusercontent.com/104038813/185809300-b06b2a3f-5352-41a8-97e2-9cc1155285ae.png)



## Summary
- The unfiltered table holds a large amount of data. It is unreasonable for most users to read through the entire table. 
- Adding filters to get specific results helps users gather the information they desire more quickly.

### Possible Drawbacks
- One possible drawback from this webpage is that there are no hyperlinks to click on any of the rows in the table. Users will be able to filter the table, but not reach any of those articles. 

### Future Development
- To help with the drawback, some future development could be to have additional resources that align with the data in the table. Users may be able to click on the entries and read more in-depth articles regarding each UFO sighting. 
- Another update to the webpage could be to allow users to filter for multiple states or cities with one search. The existing code can be refactored to have another conditional (OR) in place so that it can look for (state 1) OR (state 2) and pull up those results in one table. 
 




