
export const createRouterTree = (arrayList, parent) => {
    if (arrayList.length > 0) {
        return buildRouterTree(arrayList, parent);
    } else {
        return parent
    }
}


const buildRouterTree = (arrayList, parent) => {

    for (let i = 0; i < arrayList.length; i++) {
        let treeVo = arrayList[i]
        if (treeVo.parentId === parent.id) {
            if (parent.path === '/') {
                treeVo.path = parent.path + treeVo.path
            } else {
                treeVo.path = parent.path + '/' + treeVo.path
            }
            treeVo = buildRouterTree(arrayList, treeVo)
            if(treeVo.children){

            }else{
                treeVo.children = []
            }
            if (parent.children) {
                parent.children.push(treeVo);
            } else {
                parent.children = []
                parent.children.push(treeVo);
            }

        }
    }
    return parent
}



export const createTree = (arrayList, parent) => {
    if (arrayList.length > 0) {
    } else {
        return parent
    }
    return buildTree(arrayList, parent);
}

const buildTree = (arrayList, parent) => {
    for (let i = 0; i < arrayList.length; i++) {
        let treeVo = arrayList[i]
        if (treeVo.parentId === parent.id) {
            if (parent.path === '/') {
                treeVo.path = parent.path + treeVo.path
            } else {
                treeVo.path = parent.path + '/' + treeVo.path
            }
            treeVo = buildTree(arrayList, treeVo)
            if(treeVo.children){

            }else{
                treeVo.children = []
            }
            if (parent.children) {
                parent.children.push(treeVo);
            } else {
                parent.children = []
                parent.children.push(treeVo);
            }

        }
    }
    return parent
}