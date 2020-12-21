let fs=require("fs")
class Stock{
    constructor(){
        this.text=null
        this.file=null
    }
    jsonFile(fileName){
        this.file=fileName
        this.text=JSON.parse(fs.readFileSync(this.file))
    }
    
    value(){
        let sum=0
        this.text.Stock.forEach(element =>{
            sum +=element.price*element.numberOfShares
        })
        console.log("the sum is ",sum)
        this.text.Stock.forEach(element=>{
            console.log(element.name+" is ruppes "+element.numberOfShares*element.price)
        })
    }
}
module.exports=new Stock