'use client'

import InformationTable from "components/organisms/InformationTable"
import { useVisitRecord } from "hooks"
import { useEffect } from "react"
import { VisitRecord } from "types/visitRecord"

const VisitRecordList = () => {

  const { visitRecordList, onSearchVisitRecordList } = useVisitRecord()
  useEffect(() => {
    onSearchVisitRecordList()
  }, [])


       return (
            <>
          {visitRecordList.length > 0 && (
            <InformationTable<VisitRecord> list={visitRecordList}></InformationTable>
          )}
          </>
        )
}

export default VisitRecordList
