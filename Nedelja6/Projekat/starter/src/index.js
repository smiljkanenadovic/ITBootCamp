import { budgetController } from './budgetController.js'
import { inputValue, inputType, inputDescription, inputBtn, incomeContainer, expensesContainer, budgetLabel, incomeLabel,
expenseLabel, percentageLabel, container, dateLabel } from './domElements.js'
import { formatNumber} from './utils.js'

const budgetCtrl = budgetController();

const renderBudget = budgetObj => {
        let type;
        budgetObj.budget > 0 ? type = 'inc' : type = 'exp';
        
        budgetLabel.textContent = formatNumber(budgetObj.budget, type); 
        incomeLabel.textContent = formatNumber(budgetObj.totalInc, 'inc');
        expenseLabel.textContent = formatNumber(budgetObj.totalExp, 'exp');        

        if(budgetObj.percentage > 0) {
            percentageLabel.textContent = budgetObj.percentage + '%';
        } else {
            percentageLabel.textContent = '---' ;
    }
}

const renderMonth = () => {
    let now, year;
    now = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June','July','August', 'September', 'October', 'November', 'December' ];
    let month = now.getMonth();   
    year = now.getFullYear();    
    dateLabel.textContent = months[month] + ' ' + year;
}

const renderItems = () => {        
    if(inputDescription.value !== "" && !isNaN(inputValue.value) && inputValue.value > 0) {
        const budgetItem = budgetCtrl.addItem(inputType.value, inputDescription.value, parseFloat(inputValue.value));
        let html, newHtml, container;  

            if (inputType.value === 'inc') {
                container = incomeContainer; 
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
           } else if (inputType.value === 'exp') {
                container = expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
           }
           newHtml = html.replace('%id%', budgetItem.id);
           newHtml = newHtml.replace('%description%', budgetItem.description);
           newHtml = newHtml.replace('%value%', formatNumber(budgetItem.value, inputType.value)); 
           container.insertAdjacentHTML('beforeend', newHtml);

           // clear fields
            let fields, fieldsArr;
            fields = document.querySelectorAll('.add__description' + ', ' + '.add__value');

            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(current => {
                current.value = "";
            });
            fieldsArr[0].focus(); 

            // display budget
            budgetCtrl.calculateBudget();
            const budgetObj = budgetCtrl.getBudget();
            renderBudget(budgetObj);

            budgetCtrl.calculatePercentages();
            const percentages = budgetCtrl.getPercentages();

            // display percentages
            let percFields = document.querySelectorAll('.item__percentage');

            nodeListForEach(percFields, (current, index) => {
                if(percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
    }
}

let nodeListForEach = (list, callback) => {
    for (var i = 0; i < list.length; i++) {
        callback(list[i], i);
    }
};

inputBtn.addEventListener('click', renderItems);     
document.addEventListener('keypress', e => {   
    console.log(e);
    if (event.keyCode === 13 || event.which === 13) { 
        renderItems();
    }
});
container.addEventListener('click', e => {
    console.log(e);
    let itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; 
    if(itemID) {           
        splitID = itemID.split('-'); 
        type = splitID[0];
        ID = parseInt(splitID[1]);        
        budgetCtrl.deleteItem(type, ID); 
        let el = document.getElementById(itemID);
        el.parentNode.removeChild(el);

        budgetCtrl.calculateBudget();
        const budgetObj = budgetCtrl.getBudget();          
        renderBudget(budgetObj);
    }
});

renderBudget({
    budget: 0,
    totalInc: 0,
    totalExp: 0,
    percentage: -1
});
renderMonth();


