//6. На страници постоје 2 дугмета за наручивање 
//(као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

// -Дугмићи за 'наручивање' повећавају бројач
//-- Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку 
//(Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) Напомена: X је бројач, 
//проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

const order1 = document.createElement('button')
const order2 = document.createElement('button')
const orderOdmah1 = document.createElement('button')
const orderOdmah2 = document.createElement('button')

document.body.append(order1, order2,orderOdmah1,orderOdmah2)

order1.textContent = 'NARUCI1'
order2.textContent = 'NARUCI2'
orderOdmah1.textContent = 'ODMAH1'
orderOdmah2.textContent = 'ODMAH2'

let count = 0;

const povecajBrojac = () => {
    count++;
}

order1.addEventListener('click', e =>{
    povecajBrojac();     
})

order2.addEventListener('click', e =>{
    povecajBrojac();     
})

orderOdmah1.addEventListener('click', e =>{
    ispisiPorudzbinu();     
})

orderOdmah2.addEventListener('click', e =>{
    ispisiPorudzbinu();   
})

const ispisiPorudzbinu = () => {    
    if(count === 0){
        alert('Nemate trenutnih porudzbina');
    } else {    
    
    const datum = new Date();
    const p = document.createElement('p');   

    p.textContent = `Narucili ste ${count} pizza, vreme porucivanja: ${datum} `;
    document.body.appendChild(p);
    
    count = 0;
    }
}



