class Mkulima{
    constructor(farms,vendor,products,orders){ 
        this.farms = farms;
        this.vendor = this.vendor;
        this.products = products;
        this.orders = orders;
        }
    addFarm(farmId,farmersName,farmer,contact,address){ 
        var farm={
            farmId:farmId,
            farmersName:farmersName,
            farmer:farmer,
            contact:contact,
            address:address,
        }
        this.farms.unshift(farm)
         return this.farms
    } 

     removeFarm(farmId){ 
         let farm1=this.farms.find(farm1=>farm1.farmId==farmId)
         
         return delete this.farms[farm1]
          
    }
      updateFarm (farmId,famersName,farmer,contact,address){
         let newFarm=this.farms.find(newFarm=>newFarm.famersName=="Kasolo")
        newFarm={
            farmId:farmId,
            famersName:famersName,
            farmer:farmer,
            contact:contact,
            address:address,
        }
        return newFarm
    }   
    getFarm(farmId){
        let farm2=this.farms.find(farm2=>farm2.farmId==farmId)
        return farm2
    }   
    addProduct(productId,famersName,price){
        var product={
            productId:productId,
            famersName:famersName,
            price:price
        }
        this.products.unshift (product)      
        return this.products
    }
    removeProduct(productId){
        let product=this.products.find(product=>product.productId==productId)
        return delete this.products[product]
    }  
    updateProduct(productId,famersName,cost){
        let newProduct=this.products.find(newProduct=>newProduct.productId==7080)
        newProduct={ 
            productId:productId,
            famersName:famersName,
            cost:cost,
    }
    return newProduct
    }  
    getProduct(productId){
        let product2=this.products.find(product2=>product2.productId==productId)
        return product2
    } 
    printProducts(){
        for(let items of this.products)
        console.log([`${items.famersName}:${items.cost}`])
    }
    calculateOrderCost(productId,quantity){
        let product2=this.products.find(product2=>product2.productId==productId)
        return product2.price*quantity
    }
    }
    var Kanabe=new Mkulima([],[],[],[])
    console.log(Kanabe.addFarm(56830,"Esamba","Kasolo","+256775674952","Iganga"))
    console.log(Kanabe.addFarm(39575,"Agriowers","Sirage","+256755033482","Bukoona"))
    console.log(Kanabe.addFarm(74928,"Maizemillers","Sadat","+256750512635","Gulu"))
    console.log(Kanabe.addFarm(33333,"Mulime","Anold","+256788044674","Kampala"))

    console.log(Kanabe.removeFarm(56830))

    console.log(Kanabe.updateFarm(39575,"Vegetablefarm","Bogere","+256788455222","Kalangala"))

    console.log(Kanabe.getFarm(23518))

    console.log(Kanabe.addProduct(7777,"cassava",800))
    console.log(Kanabe.addProduct(5067,"guavals",300))
    console.log(Kanabe.addProduct(3339,"ovacado",1800))

    console.log(Kanabe.removeProduct(5067))

    console.log(Kanabe.updateProduct(7723,"water melon",1500))

    console.log(Kanabe.getProduct(3339))

    Kanabe.printProducts()

    console.log(Kanabe.calculateOrderCost(7777,7))