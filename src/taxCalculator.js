export default function taxAndNetIncome(income){
    const taxCalculator = (income) =>{
        var tax = 0
        if (income > 37500){
            tax += 37500 * .2
            income -= 37500
        }
        else {
            tax += income*.2
            return tax
        }
        if (income > 112500){
            tax += 112500 * .4
            income -= 112500
        }
        else{
            tax += income * .4
            return tax
        }
        return tax + income * .45

    }
    const paidTax = taxCalculator(income)
    return {tax:paidTax.toFixed(2), netSalary: (income-paidTax).toFixed(2)}
}
