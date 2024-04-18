export type VisitRecord = {
    // key : result
    visNo: number,
    visName: string,
    companyName: string,
    numberWith: number,
    isHost: boolean,
    empId: string,
    reason: string,
    checkIn: string,
    checkOut: string
}

export type VisitRecordList = {
    visitRecordList : VisitRecord[]
  }
