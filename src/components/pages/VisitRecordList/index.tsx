'use client'

import Table from "components/organisms/Table"
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
            <Table<VisitRecord> list={visitRecordList}></Table>
          )}
          </>
        )
}

export default VisitRecordList
