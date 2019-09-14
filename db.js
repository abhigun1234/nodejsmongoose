const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/restro55').then(()=>
console.log('connected to mongoDb')).catch(error=>error)

//schema
const menuSchema=new mongoose.Schema({
itemName:String,
price:String,
description:String,
menuType:String

})

//create model
const Menu =mongoose.model('Menu',menuSchema)


async function craeteMenu()
{
    const menu= new Menu({
        itemName:"chicken fry",
        price:'400',
        description:'chicken spacial',
        menuType:'main course'
    
    })
    const result=await menu.save()
    console.log(result)

}
craeteMenu()
//fetch menu data 

async  function getMenu()
{
    const menus = await Menu.find()
    console.log(menus)
}
getMenu()