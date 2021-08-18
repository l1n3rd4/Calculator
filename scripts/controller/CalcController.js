class CalcController{
    constructor(){
        this._operation = [];
        this._locale = "pt-BR"
        this._displayCalculatorEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora")
        this._currentDate;
        this.initialize();
    }

    initialize(){
        this.setDisplayDateTime();
        
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

        this.initButtonsEvents();
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach((event) => {
            element.addEventListener(event, fn, false);
        });
    }

    setError(){
        this.displayCalculatorEl = "Error";
    }

    ClearAll(){
        this._operation = [];
    }

    ClearEntry(){
        return this._operation.pop();
    }

    getLastOperation(){
        return this._operation[this._operation.length - 1];
    }
    
    isOperator(value){
        return (["/", "%", "*", "+", "-", "="].indexOf(value) > -1)
    }

    setLastOperation(value){
        this._operation[this._operation.length - 1] = value;
    }

    addOperation(value){
        if(isNaN(this.getLastOperation())){
            if(this.isOperator(value)){
                this.setLastOperation(value);
            } else if (isNaN(value)){

            } else {
                this._operation.push(value);
            }
        }else if(this.isOperator(value)){
            this._operation.push(value);
        } else {
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(newValue);
        }


        console.log(this._operation);
    }

    execbtn(value){
        value = value.replace('btn-', '');

        switch(value){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
            case 'ponto':
                this.addOperation(".");
                break;
            case 'igual':
                this.addOperation("=");
                break;
            case 'soma':
                this.addOperation("+");
                break;
            case 'porcento':
                this.addOperation("%");
                break;
            case 'subtracao':
                this.addOperation("-");
                break;
            case 'multiplicacao':
                this.addOperation("*");
                break;
            case 'divisao':
                this.addOperation("/");
                break;
            case 'ac':
                this.ClearAll();
                break;
            case 'ce':
                this.ClearEntry();
                break;
            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
    
        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", (element) => {
                let Textbtn = btn.className.baseVal;
                this.execbtn(Textbtn);
            });
            
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", (element) => {
                btn.style.cursor = "pointer"
            });
        });
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayCalculatorEl(){
        return this._displayCalculatorEl.innerHTML;
    }

    set displayCalculatorEl(value){
        this._displayCalculatorEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}