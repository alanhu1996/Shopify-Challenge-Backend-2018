# Shopify-Challenge-Backend-2018 
NOTE *** The solution here differs from the file I submitted through the shopify website because I realized I misread the output requirement. 
For the solution in the website, I only output the immediate children of the root menus in the child_id key. In this solution, the child_id key of each menu in the output will contain all the children of the menu's root id.

1. Run 'npm install' to install axios.
2. Run 'node backend.js' to execute the backend challenge script.

Output for challenge id = 1:
{"valid_menus":[
	{"id":2,"data":"Company","child_ids":[4,6,5,8]},
	{"id":9,"data":"Computer","child_ids":[10,11,13,14,12]}],
"invalid_menus":[
	{"id":1,"data":"House","child_ids":[3]}
	]
}

Output for challenge id = 2:
{"valid_menus":[
	{"id":2,"data":"Company","child_ids":[8,10,9,11]},
	{"id":12,"data":"Computer","child_ids":[13,14,16,17,21,15]},
	{"id":19,"data":"Table","parent_id":4,"child_ids":[]}],
"invalid_menus":[
	{"id":1,"data":"House","child_ids":[5,18,3,6,1,20,7,4]}
	]
}
