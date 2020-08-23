export const budgetController = () => {

    let data = { 
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1    
    };

    let calculateTotal = type => {
        var sum = 0;
        data.allItems[type].forEach(cur => {
            sum += cur.value;
        });
        data.totals[type] = sum;
    }

    return {
        addItem: (type, desc, value) => {     
            let ID;
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id +1;
            } else {
                ID = 0;
            }         
            const newItem = {
                id: ID,
                description: desc,
                value: value
            }
            data.allItems[type].push(newItem);
                return newItem;
        },
        deleteItem: (type, id) => {
            console.log(id)
            let ids, index;
            ids = data.allItems[type].map(current => { 
                return current.id; 
            });
            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: () => {
            calculateTotal('exp');
            calculateTotal('inc');

            data.budget = data.totals.inc - data.totals.exp;
            
            if(data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
            console.log(data);

        },

        getBudget: () => {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        calculatePercentages : () => {
            data.allItems.exp.forEach(cur => {     
                if (data.totals.inc > 0) { 
                cur.percentage = Math.round((cur.value / data.totals.inc) * 100);
                } else {
                cur.percentage = -1;
                }            
            });
        },

        getPercentages: () => {
        let allPerc = data.allItems.exp.map(cur => { 
            return cur.percentage; 
        });
        return allPerc; 
        }
    }
}