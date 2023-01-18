
export default {
    state: {
        itemsList: [
            {
                itemId: 8,
                itemName: 'Tomatoes',
                itemPrice: 5,
                isApproved: false,
                description: 'Tomatoes Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero corrupti dolore repellendus, saepe sapiente eligendi fugit provident autem alias incidunt nostrum similique ratione quas tenetur eaque odio asperiores tempora quaerat.'
            },
            {
                itemId: 6,
                itemName: 'Cucumbers',
                itemPrice: 3,
                isApproved: false,
                description: 'Cucumbers  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero corrupti dolore repellendus, saepe sapiente eligendi fugit provident autem alias incidunt nostrum similique ratione quas tenetur eaque odio asperiores tempora quaerat.'
            },
            {
                itemId: 3,
                itemName: 'Bread',
                itemPrice: 10,
                isApproved: false,
                description: 'Bread  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero corrupti dolore repellendus, saepe sapiente eligendi fugit provident autem alias incidunt nostrum similique ratione quas tenetur eaque odio asperiores tempora quaerat.'
            },
            {
                itemId: 7,
                itemName: 'Grapes',
                itemPrice: 4,
                isApproved: false,
                description: 'Grapes Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero corrupti dolore repellendus, saepe sapiente eligendi fugit provident autem alias incidunt nostrum similique ratione quas tenetur eaque odio asperiores tempora quaerat.'
            },
        ],

    },
    getters: {
        items({ itemsList }) {
            return itemsList
        },

    },
    mutations: {
        setItem(state, { newItem }) {

            state.itemsList.push(newItem)
        },
        setToDeleteItem(state, { itemId }) {
            const itemToDelete = state.itemsList.find((item) => item.itemId === itemId)

            const idx = state.itemsList.findIndex((itemToDelete) => itemToDelete.itemId === itemId)

            state.itemsList.splice(idx, 1)
        },
        setApproveItem(state, { itemId }) {
            const approvedItem = state.itemsList.find((item) => item.itemId === itemId)
            const copy = { ...approvedItem, isApproved: !approvedItem.isApproved }

            const idx = state.itemsList.indexOf(approvedItem)

            state.itemsList.splice(idx, 1, copy)


            approvedItem.isApproved = !approvedItem.isApproved

        }

    },
    actions: {
        addItem({ commit }, { newItem }) {
            commit({ type: 'setItem', newItem })
        },
        deleteItem({ commit }, { itemId }) {
            commit({ type: 'setToDeleteItem', itemId })

        },
        approveItem({ commit }, { itemId }) {
            commit({ type: 'setApproveItem', itemId })
        }

    },
}