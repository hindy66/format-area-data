function createMin(sourceObj,data,wholeData){
    let flag = false
    if(!sourceObj.children){
        sourceObj.children = []
    }
    for(let key in data) {
        let minObj = {}
        minObj.label = data[key]
        minObj.value = key
        sourceObj.children.push(minObj)
        if(wholeData.hasOwnProperty(minObj.value)){
            flag = true
        }
    }
    if(flag){
        targetItem(sourceObj.children,wholeData)
    }
}
function  targetItem (sourceArr,data){
    for( let key in data) {
        if (key == '86') {
            continue;
        }
        sourceArr.forEach( item => {
            if(key == item.value) {
                createMin(item,data[key],data)
            }
        })
    }
}
function createPro(data){
    const obj = []
    //  1.首先往数组中添加市级对象
    for( let key in data['86']) {
        let proObj = {}
        proObj.label = data['86'][key]
        proObj.value = key
        proObj.children = []
        obj.push(proObj)

    }
    targetItem(obj,data)
    return obj
}



