export type VisitRecord = {
    // key : result
    visNo?:number,
    visName:string,
    companyName:string,
    tel:string,
    numberWith:number,
    isHost?:boolean,
    empNo:number,
    reason:string,
    checkIn:string,
    checkOut:string
}

export type VisitRecordList = {
    visitRecordList : VisitRecord[]
  }
