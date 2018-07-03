function data(state, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            // action.payload.query
            let results = []
            if (action.payload.query) {
                const categories = state.data.categories
                categories.map(category => {
                    let lista = category.playlist.filter(item => {
                        return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
                    })
                    results = results.concat(lista)
                })
            }
            return {
                ...state,
                search: results
            }
        }
        default:
            return state
    }
}

export default data

// function data(state, action) {
//     switch (action.type) {
//         case 'SEARCH_VIDEO': {
//             let results = [];
//             if (action.payload.query) {
//                 const categories = state.data.categories
//                 categories.map(cat => {
//                     let list = cat.playlist.filter(item => {
//                         return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
//                     })
//                     results = results.concat(list)
//                 })
//             }
//             return {
//                 ...state,
//                 search: results
//             }
//         }
//         default:
//             return state
//     }
// }

// export default data
