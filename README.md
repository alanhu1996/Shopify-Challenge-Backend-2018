# Shopify-Challenge-Backend-2018

1. Run 'npm install' to install axios.
2. Run 'node backend.js' to execute the backend challenge script.

Output for challenge id = 1:
{"valid_menus":[
  {"id":2,"data":"Company","child_ids":[4,5,8]},
  {"id":9,"data":"Computer","child_ids":[10,11,12]}],
"invalid_menus":[
  {"id":1,"data":"House","child_ids":[3]}
  ]
}

Output for challenge id = 2:
{"valid_menus":[
	{"id":2,"data":"Company","child_ids":[8,9,11]},
	{"id":12,"data":"Computer","child_ids":[13,14,15]},
	{"id":19,"data":"Table","parent_id":4,"child_ids":[]}],
"invalid_menus":[
	{"id":1,"data":"House","child_ids":[3,4]}
	]
}
