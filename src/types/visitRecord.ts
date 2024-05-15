export type VisitRecord = {
  visNo: number,
  visName: string,
  companyName?: string | null,
  tel: string,
  numberWith: number,
  isHost: boolean,
  empNo?: number | null,
  reason?: string | null,
  checkIn: string,
  checkOut?: string | null
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