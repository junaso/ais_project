export type VisitRecord = {
  visNo: number,
  visName: string,
  companyName: string,
  tel: string,
  numberWith: number,
  isHost: boolean,
  empNo: number,
  reason: string,
  checkIn: string,
  checkOut: string
}

export type VisitRecordState = {
  steps: FormStep[]
  activeStep: number
}

export type FormStep = {
  label: string
  option?: string
  completed: boolean
  error: boolean
  data?: VisitRecord
}