
class Bagpack{
    //define parameters
    constructor(name,volume,color,pocketNum,strapLengthL,strapLengthR,lidOpen){
//define properties

this.name=name
this.volume=volume
this.color=color
this.pocketNum=pocketNum
this.strapLength={
    left:strapLengthL,
    right:strapLengthR
}

this.lidOpen=lidOpen
    }
    //Adding methods too

    toggleLid(lidstatus){
        this.lidOpen=lidstatus
    }

    newStrapLength(leftLength,rightLength){
        this.strapLength.left=leftLength
        this.strapLength.right=rightLength
    }

}



const everyDayBagPack= new Bagpack(
    "EveryDay Bagpack",
    30,
    "gray",
    28,
    50,
    50,
    false
)

console.log("Every Day Ex: ", everyDayBagPack)
console.log("Pocketnum Value: ", everyDayBagPack.pocketNum )