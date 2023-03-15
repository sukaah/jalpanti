import { doesStringExistInArr } from "../utils/helpers"
import { handleJITException } from "./exceptionHandling"

const channelNames:string[] = []

export default (func:()=>Promise<any>,name:string)=>{
     if(doesStringExistInArr(name,channelNames)){
           handleJITException('Same channel name not allowed')
     }
}