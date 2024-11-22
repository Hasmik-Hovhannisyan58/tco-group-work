const fs=require(`fs`)//modul e  vory hnaravorutyun e talis fayler ev papkaner stexcel ,kardal,jnjel
const path=require('path')// uxu het ashxatelu hamar

function createDir(baseDir,folderCount,fileName,fileContent){
    //baseDir-himnakan uxi
    //papkaneri qanak,verjin fayli anuny,verji fayli parunakutyuny

    let currentDir=baseDir//himnakam uxi
    for(let i = 1;i<=folderCount;i++){
        currentDir=path.join(currentDir,`folder_${i}`)//yuraqanchyur ciklum nor papkayi anuny avelacnum enq himanakan uxun
        if(!fs.existsSync(currentDir)){//stugum te ardyoq papkan goyutyun uni
            fs.mkdirSync(currentDir)//ete chka apa stexcum enq ayn
        }
    }

    const filePath=path.join(currentDir,fileName)//verji papkayi mej avelacnum enq fayli anuny
    fs.writeFileSync(filePath,fileContent,'utf-8')//fayli parunakutyuny petq e lini textayin utf-8 kodavormamb
    console.log(`Created file at ${filePath}`)//fayly hajox stexcvelu depqym tpum e hetevyaly
}

function deleteDir(baseDir,folderCount){
    let currentDir=baseDir
    for(let i=1;i<-folderCount;i++){
        currentDir=path.join(currentDir,`folder_${i}`)
        if(fs.existsSync(currentDir)){
            fs.rmSync(currentDir,{recursive:true,force:true})
            console.log(`Delete all contents in ${currentDir}`)
        }else{
            console.log(`${currentDir} does not exist.`)
        }
    }

}

const baseDir=path.join(__dirname);
const folderCount=5
const fileName='example.txt'
const fileContent='This is an example text file.'

createDir(baseDir,folderCount,fileName,fileContent)

// deleteDir(baseDir,folderCount)//Gurgen jan chgitem inchi delety chi ashxatum mi tarberake prceci ynthanur papkes korav :(