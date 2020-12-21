let fs=require("fs")
class Iventory{
    constructor(){
        this.text=null
        this.file=null
    }
    jsonFile(fileName){
        this.file=fileName
        this.text=JSON.parse(fs.readFileSync(this.file))
    }
    display(){
        return this.text.Grains
    }
    value(){
        let total=0
        let riceTotal=0
        this.text.Grains.rice.forEach(element=>{
            riceTotal +=(element.weight*element.price)
            console.log(element.price)
        })
        let wheatTotal=0
        this.text.Grains.wheat.forEach(element=>{
            wheatTotal +=(element.price*element.weight)
        })
        let pulseTotal=0
        this.text.Grains.pulse.forEach(element=>{
            pulseTotal+=(element.weight*element.price)
        })
        total=riceTotal+wheatTotal+pulseTotal
        console.log("Total rice price is ",riceTotal)
        console.log("Total wheat price is ",wheatTotal)
        console.log("Total pulse price is ",pulseTotal)
    }
}
module.exports=new Iventory