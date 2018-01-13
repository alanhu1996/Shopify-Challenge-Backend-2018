// Output for challenge id = 1:
// {"valid_menus":[
// 	{"id":2,"data":"Company","child_ids":[4,6,5,8]},
// 	{"id":9,"data":"Computer","child_ids":[10,11,13,14,12]}],
// "invalid_menus":[
// 	{"id":1,"data":"House","child_ids":[3]}
// 	]
// }

// Output for challenge id = 2:
// {"valid_menus":[
// 	{"id":2,"data":"Company","child_ids":[8,10,9,11]},
// 	{"id":12,"data":"Computer","child_ids":[13,14,16,17,21,15]},
// 	{"id":19,"data":"Table","parent_id":4,"child_ids":[]}],
// "invalid_menus":[
// 	{"id":1,"data":"House","child_ids":[5,18,3,6,1,20,7,4]}
// 	]
// }

let axios = require('axios')

const URL_CHALLENGE_ONE = 'https://backend-challenge-summer-2018.herokuapp.com/challenges.json?id=1&page='
const URL_CHALLENGE_TWO = 'https://backend-challenge-summer-2018.herokuapp.com/challenges.json?id=2&page='


let promiseList = []
// Assuming there is five pages maximum as mentioned in the challenge requirement.
for(let pageNumber = 1; pageNumber <= 5; pageNumber++) {
	// Change the url constant here to run challenge 1 or 2.
	promiseList.push(axios.get(URL_CHALLENGE_TWO + pageNumber))
}

let result = [{}]
axios.all(promiseList)
    .then(axios.spread((...args) => {
        for (let i = 0; i < args.length; i++) {
            result = result.concat(args[i].data.menus)
        }

    }))
    .then((res) => {

    	let visited = {}
    	let dfsNodeDict = {}
    	// Finding cycles using a dfs search. We keep track of the nodes visited in the current recursive stack. If a node gets visited twice in the 
    	// same recursion stack, that means a cycle exists.
    	let findCycles = (id, data, totalChildren = []) => {
    		if(!visited[id]) {
    			visited[id] = true
    			dfsNodeDict[id] = true
    			for(let i = 0; i < data[id].child_ids.length; i++) {
    				let childContainsCycle = !visited[data[id].child_ids[i]] && findCycles(data[id].child_ids[i], data, totalChildren).isCycle
    				let formsCycle = !!dfsNodeDict[data[id].child_ids[i]]
                    totalChildren.push(data[id].child_ids[i])
    				if(childContainsCycle || formsCycle) return {isCycle: true, children: totalChildren}
    				
    			}
    		}
    		dfsNodeDict[id] = false
    		return {isCycle: false, children: totalChildren}
		}
		let resultSummary = {
			valid_menus:[], 
			invalid_menus: []
		}
		for(let i = 1; i < result.length; i++) {
			if(visited[i]) continue
            let findCycleResult = findCycles(i, result)
			let insertKey = !findCycleResult.isCycle ? 'valid_menus' : 'invalid_menus'
			resultSummary[insertKey].push({id: result[i].id, data: result[i].data, child_ids: findCycleResult.children})
    		dfsNodeDict = {}
		}

		console.log(JSON.stringify(resultSummary))
		
    });
